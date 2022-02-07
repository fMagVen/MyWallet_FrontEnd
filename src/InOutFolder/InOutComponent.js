import { useContext, useState } from "react";
import { TailSpin } from 'react-loader-spinner'

import UserContext from "../contexts/UserContextFile";
import { InOutScreen } from "./StyledInOutFile";

import ExitVector from '../assets/img/ExitVector.png';

import api from '../services/api'

export default function InOut(){
    const {page, setPage, inOut, loading, setLoading, token, setAllTransactions, modItemId, inoutNotice, setInOutNotice} = useContext(UserContext)
    const [cash, setCash] = useState('')
    const [desc, setDesc] = useState('')

    async function addTransaction(){
        try{
            const expense = (inOut[0] === 'Nova saída' ? true : false )
            const transactionDetails = {value: cash*100, description: desc, expense}
            await api.postTransaction(transactionDetails, api.headerToken(token))
            setLoading(false)
            setCash('')
            setDesc('')
            const loadTransactions = await api.getTransactions(api.headerToken(token))
            setAllTransactions(loadTransactions.data)
            setInOutNotice('Transação adicionada')
        }catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    async function modifyTransaction(){
        try{
            const expense = (inOut[0] === 'Editar saída' ? true : false )
            const transactionDetails = {id: modItemId, value: cash*100, description: desc, expense}
            await api.modTransaction(transactionDetails, api.headerToken(token))
            setLoading(false)
            setCash('')
            setDesc('')
            const loadTransactions = await api.getTransactions(api.headerToken(token))
            setAllTransactions(loadTransactions.data)
            setInOutNotice('Transação alterada')
        }catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    function transactionsFunction(e){
        e.preventDefault()
        setLoading(true)
        if(inOut[0] === 'Nova saída' || inOut[0] === 'Nova entrada'){
            addTransaction()
        }
        else{
            modifyTransaction()
        }
    }

    if(page === 'inout'){
        return(
            <InOutScreen>
                <div className="pseudoheader">
                    <span>{inOut[0]}</span>
                    <img src={ExitVector} alt="exit button" onClick={() => {setPage('overview'); setCash(''); setDesc('')} }/>
                </div>
                <form onSubmit={(e) => transactionsFunction(e)}>

                    <input type="number"
                    onChange={(e) => setCash(e.target.value)}
                    value={cash}
                    placeholder='Valor'
                    required disabled={loading} />

                    <input type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    placeholder='Descrição'
                    required disabled={loading} />

                    <span>{inoutNotice}</span>

                    <button type="submit">
                        {loading ? <TailSpin color="#fff" height={30} width={320}/> : `${inOut[1]}`}
                    </button>

                </form>
            </InOutScreen>
        )
    }
    else{
        return <></>
    }
}
import { useContext, useEffect } from "react";
import { Subcontainer } from "./StyledOverviewFile";

import UserContext from "../contexts/UserContextFile";
import api from '../services/api'

export default function TransactionsOverview(){

    const {setPage, setInOut, setInOutNotice, token, allTransactions, setAllTransactions, setModItemId, balanceSum, setBalanceSum} = useContext(UserContext)

    useEffect(() => {
        const loadTransactions = api.getTransactions(api.headerToken(token))
        loadTransactions.then(res => makeSum(res.data)).catch(e => console.log(e))
    },[])

    function makeSum(array){
        array.reverse()
        let sum = 0
        for(let i = 0; i < array.length; i++){
            if(array[i].expense){
                sum -= array[i].value
            }
            else{
                sum += array[i].value
            }
        }
        sum /= 100
        setBalanceSum([Math.sign(sum), sum.toFixed(2)])
        setAllTransactions(array)
    }

    async function deleteItem(id){
        if(window.confirm("Tem certeza que quer apagar essa movimentação?")){
        await api.deleteTransaction({ id }, api.headerToken(token))
        const loadTransactions = await api.getTransactions(api.headerToken(token))
        makeSum(loadTransactions.data)
        }
    }

    function updateItem(id, expense){
        if(expense){
            setInOut(['Editar saída','Atualizar saída'])
            setInOutNotice('')
        }
        else{
            setInOut(['Editar entrada','Atualizar entrada'])
            setInOutNotice('')
        }
        setModItemId(id)
        setPage('inout')
    }

    if(!allTransactions || allTransactions.length < 1){
        return(
            <Subcontainer>
                <div className="empty">
                    <span>Não há registros de entrada ou saída</span>
                </div>
            </Subcontainer>
        )
    }else{
        return(
            <Subcontainer>
                <div className="main">
                    <ul>
                    {allTransactions.map(item => 
                        <li key={item._id}>
                            <div className="item">
                                <div className="date-desc-align">
                                    <div className="date">{item.date}</div>
                                    <div className="desc" onClick={() => updateItem(item._id, item.expense)}>{item.description}</div>
                                </div>
                                <div className="bonus-delete">
                                    <div className={`amount ${item.expense ? 'out' : 'in'}`}>{(item.value/100).toFixed(2)}</div>
                                    <div className="x" onClick={() => deleteItem(item._id)}>x</div>
                                </div>
                            </div>
                        </li>
                    )}
                    </ul>
                </div>
                <div className="total">
                    <div className="name">SALDO</div>
                    <div className={`balance ${balanceSum[0] === 1 ? 'positive' : 'negative'}`}>{balanceSum[1]}</div>
                </div>
            </Subcontainer>
        )
    }
}
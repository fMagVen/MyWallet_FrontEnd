import { useContext } from "react";

import UserContext from "../contexts/UserContextFile";
import { OverviewScreen } from "./StyledOverviewFile";
import  TransactionsOverview from './TransactionsScreen'

import ExitVector from '../assets/img/ExitVector.png'
import PlusCircle from '../assets/img/PlusCircle.png'
import MinusCircle from '../assets/img/MinusCircle.png'

export default function AccountOverview(){
    const {page, setPage, setInOut, setInOutNotice, name, setLoading} = useContext(UserContext)

    function exit(){
        localStorage.removeItem("myWalletToken")
        localStorage.removeItem("myWalletName")
        setPage('login')
        setLoading(false)
    }

    if(page === 'overview'){
        return(
            <OverviewScreen>
                <div className="pseudoheader">
                    <span>Olá, {name}</span>
                    <img src={ExitVector} alt="exit button" onClick={() => exit()} />
                </div>
                <div className="container">
                    <TransactionsOverview />
                </div>
                <div className="container">
                    <div className="pseudofooter">
                        <div className="newlogbutton" onClick={() => { setInOut(['Nova entrada','Salvar entrada']); setInOutNotice(''); setPage('inout') }}>
                            <img src={PlusCircle} alt="add income" />
                            <span>Nova entrada</span>
                        </div>
                        <div className="newlogbutton" onClick={() => { setInOut(['Nova saída','Salvar saída']); setInOutNotice(''); setPage('inout') }}>
                            <img src={MinusCircle} alt="add expense" />
                            <span>Nova saída</span>
                        </div>
                    </div>
                </div>
            </OverviewScreen>
        )
    }
    else{
        return <></>
    }
}
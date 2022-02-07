import UserContext from './contexts/UserContextFile'
import {useState, useEffect} from 'react'
import LoginPage from './LoginSignupFolder/LoginComponent'
import SignUpPage from './LoginSignupFolder/SignupComponent'
import AccountOverview from './AccountOverviewFolder/AccountOverviewComponent.js'
import InOutScreen from './InOutFolder/InOutComponent.js'

export default function App(){
    const [page, setPage] = useState('login')
    const [inOut, setInOut] = useState(['Nova saída','Salvar saída'])
    const [loading, setLoading] = useState(false)
    const [allTransactions, setAllTransactions] = useState('')
    const [modItemId, setModItemId] = useState('')
    const [balanceSum, setBalanceSum] = useState('')
    const [inoutNotice, setInOutNotice] = useState('')
    const [token, setToken] = useState( JSON.parse( localStorage.getItem("myWalletToken") ) )
    const [name, setName] = useState( JSON.parse( localStorage.getItem("myWalletName") ) )

    useEffect(() => {
        if(token) setPage('overview')
    },[])

    return(
        <UserContext.Provider value={{
        page, setPage, 
        inOut, setInOut, 
        loading, setLoading, 
        token, setToken, 
        name, setName, 
        allTransactions, setAllTransactions, 
        modItemId, setModItemId,
        balanceSum, setBalanceSum,
        inoutNotice, setInOutNotice
        }}>
            <LoginPage />
            <SignUpPage />
            <AccountOverview />
            <InOutScreen />
        </UserContext.Provider>
    )
}
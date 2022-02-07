import { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

import UserContext from "../contexts/UserContextFile"
import { AuthScreen } from "./StyledLoginSignupFile"
import api from '../services/api'

import mywallet from '../assets/img/MyWallet.png'

export default function LoginPage(){

    const {page, setPage, loading, setLoading, setToken, setName} = useContext(UserContext)
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    async function doLogin(e){
        try{
            e.preventDefault()
            setLoading(true)
            const loginAccount = {email: emailLogin, password: passwordLogin}
            const loginResponse = await api.login(loginAccount)
            setToken(loginResponse.data.token)
            localStorage.setItem("myWalletToken", JSON.stringify(loginResponse.data.token))
            setName(loginResponse.data.name)
            localStorage.setItem("myWalletName", JSON.stringify(loginResponse.data.name))
            setPage('overview')
            setLoading(false)
        }catch(e){
            console.log(e)
            setLoading(false)
        }
    }

     if(page === 'login'){
        return(
            <AuthScreen>
                <img src={mywallet} alt="my wallet logo" />
                <form onSubmit={(e) => doLogin(e)}>

                    <input type="email"
                    onChange={(e) => setEmailLogin(e.target.value)}
                    value={emailLogin}
                    placeholder='E-mail'
                    required disabled={loading}/>

                    <input type="password"
                    onChange={(e) => setPasswordLogin(e.target.value)}
                    value={passwordLogin}
                    placeholder='Senha'
                    required disabled={loading}/>

                    <button type="submit">
                        {loading ? <TailSpin color="#fff" height={30} width={320}/> : 'Entrar'}
                    </button>

                </form>
                <span onClick={() => setPage('signup')}>{!loading && 'Primeira vez? Cadastre-se!'}</span>
            </AuthScreen>
        )
    }else{
        return <></>
    }
}
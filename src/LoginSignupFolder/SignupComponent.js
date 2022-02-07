import { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

import UserContext from "../contexts/UserContextFile"
import { AuthScreen } from "./StyledLoginSignupFile"
import api from '../services/api'

import mywallet from '../assets/img/MyWallet.png'

export default function SignUpPage(){
    const {page, setPage, loading, setLoading} = useContext(UserContext)
    const [name, setName] = useState('')
    const [emailSignup, setEmailSignup] = useState('')
    const [passwordSignup, setPasswordSignup] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordNotice, setPasswordNotice] = useState('')

    if(page === 'signup'){

        async function doSignUp(e){
            try{
                e.preventDefault()
                setLoading(true)
                if(passwordSignup === confirmPassword){
                    const createAccount = {email: emailSignup, name, password: passwordSignup}
                    await api.signUp(createAccount)
                    setPasswordNotice(true)
                    setLoading(false)
                }else{
                    setPasswordNotice(false)
                    setLoading(false)
                    return
                }
            }
            catch(e){
                console.log(e)
            }
        }
        return(
            <AuthScreen>
                <img src={mywallet} alt="my wallet logo" />
                <form onSubmit={(e) => doSignUp(e)}>

                    <input type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Nome'
                    required disabled={loading}/>

                    <input type="email"
                    onChange={(e) => setEmailSignup(e.target.value)}
                    value={emailSignup}
                    placeholder='E-mail'
                    required disabled={loading}/>

                    <input type="password"
                    onChange={(e) => setPasswordSignup(e.target.value)}
                    value={passwordSignup}
                    placeholder='Senha'
                    required disabled={loading}/>

                    <input type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder='Confirme a senha'
                    required disabled={loading}/>

                    {passwordNotice === '' ? <span></span> : passwordNotice ? <span style={{color: 'green'}}>Conta criada com sucesso!</span> : <span style={{color: 'red'}}>As senhas não são iguais.</span>}

                    <button type="submit">
                        {loading ? <TailSpin color="#fff" height={30} width={320}/> : 'Entrar'}
                    </button>

                </form>
                <span onClick={() => setPage('login')}>{!loading && 'Já tem uma conta? Entre agora!'}</span>
            </AuthScreen>
        )
    }else{
        return <></>
    }
}
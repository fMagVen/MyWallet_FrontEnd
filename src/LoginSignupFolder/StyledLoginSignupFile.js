import styled from 'styled-components'

const AuthScreen = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 145px;
        height: 31px;
        margin-top: 160px;
    }
    form{
        gap: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 33px;
    }
    input{
        width: 303px;
        height: 52px;
        border: none;
        border-radius: 5px;
        padding-left: 15px;
    }
    input::placeholder{
        font-size: 20px;
        color: #000000;
    }
    button{
        width: 320px;
        height: 45px;
        background-color: ${props => props.loading ? '#86CCFF' : '#A328D6'};
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        margin-bottom: 25px
    }
    span{
        color: #FFFFFF;
        font-weight: 700
    }
`

export { AuthScreen }
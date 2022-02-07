import styled from 'styled-components'

const InOutScreen = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 13px;
    div{
        height: 78px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        span{
            color: #fff;
            font-weight: 700;
            font-size: 26px;
            margin-left: 25px;
        }
        img{
            width: 23px;
            height: 24px;
            margin-right: 25px;
        }
    }
    form{
        gap: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 18px;
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
    span{
        font-size: 18px;
        font-weight: 700;
        color: #fff;
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
`
export {InOutScreen}
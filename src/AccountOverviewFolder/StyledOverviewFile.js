import styled from 'styled-components'

const OverviewScreen = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    .pseudoheader{
        width: 100%;
        height: 78px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
    .container{
        width: 100%;
        height: auto;
    } 
    .pseudofooter{
        height: 143px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 13px;
        padding: 0 25px 0;
        gap: 15px;
        div{
            width: 100%;
            height: 144px;
            background-color: #A328D6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                height: 25px;
                width: 25px;
                padding: 9px 0 0 8px;
            }
            span{
                color: #fff;
                font-weight: 700;
                font-size: 17px;
                padding: 0 0 9px 10px;
            }
        }
    }
`

const Subcontainer = styled.div`
    margin: 0 25px 0;
    background-color: #fff;
    border-radius: 5px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .empty{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            width: 180px;
            text-align: center;
            font-size: 20px;
            color: #868686;
        }
    }
    .main{
        width: 100%;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        .item{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 15px 12px;
            .date-desc-align{
                display: flex;
                flex-direction: row;
            }
            .date{
                font-size: 16px;
                color: #C6C6C6;
                margin-right: 10px;
            }
            .desc{
                font-size: 16px;
            }
            .amount{
                font-size: 16px;
            }
            .out{
                color: #C70000;
            }
            .in{
                color: #03AC00;
            }
            .bonus-delete{
                display: flex;
                flex-direction: row;
                gap: 11px;
                .x{
                    color: #C6C6C6;
                    font-size: 16px;
                }
            }
        }
    }
    .total{
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .name{
            padding: 10px;
            font-size: 17px;
            font-weight: 700;
        }
        .balance{
            padding: 10px;
            font-size: 17px;
        }
        .negative{
            color: #C70000;
        }
        .positive{
            color: #03AC00;
        }
    }
`

export {OverviewScreen, Subcontainer}
import styled from "styled-components";

export const Div = styled.div`
    padding: 3rem 0;

    display: flex;
    justify-content: center;

    align-items: center;


    & .logo{
        margin-left: auto;
        display:flex;
        align-items: center;

        &::after{
            content:"";
            display:inline-block;
            height: 1.9rem;
            width: 0.3rem;
            background-color: #17241e;
            border-radius: 99px;
            margin-left: .5rem;
            margin-right: .5rem;
        }
    }
    & .text{
        text-decoration: none;
        color: #ff38609f;
        font-size: 1.5rem;
        margin-right: auto;
    }
    & .menu{
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-right: 4rem;
        & .login{
            color: #ffffff9f;
            font-weight: 600;
        }
        & .post{
            color: #ffffff9f;
            display: inline-block;
            
            font-size: 1rem;
            text-decoration:none;

            border: 2px solid white;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            
            margin-right: 1rem;
            &:hover{
                color: #ffffff;
                border-color: #ffffff;
            }
        }
        & .logout{
            background: none;
            color: rgba(255, 100, 100, 100);

            font-size: 1rem;
            text-decoration:none;

            border: 2px solid rgba(255, 100, 100, 100);
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            &:hover{
                color: rgba(255, 75, 75, 100);
                border-color: rgba(255, 75, 75, 100);
            }
        }
    }
    &:hover{
        & .text{
            color: #ff3860;
        }
        & .menu .login{
            color: #ffffff;
        }
    }

`;

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
            height: 2rem;
            width: 0.5rem;
            background-color: #17241e;
            border-radius: 99px;
            margin-left: .5rem;
            margin-right: .5rem;
        }
    }
    & .text{
        color: #ff38609f;
        font-size: 1.5rem;
    }
    & .menu{

        margin-left: auto;
        margin-right: 4rem;
        & .login{
            color: #ffffff9f;
            font-weight: 600;
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

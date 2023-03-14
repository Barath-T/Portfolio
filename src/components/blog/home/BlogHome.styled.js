import styled from "styled-components";

import { Link } from "react-router-dom";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArticlesDiv = styled.div`
    width: 75%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    margin-bottom: 5rem;
`;

export const ArticleLink = styled(Link)`
    margin: 0 5rem;
    padding: 4rem;

    text-decoration: none;
    color: white;
    transition: box-shadow 300ms ease-out;
    &:hover{
        box-shadow: rgba(255, 56, 96, 0.4) 5px 5px, rgba(255, 56, 96, 0.3) 10px 10px, rgba(255, 56, 96, 0.2) 15px 15px, rgba(255, 56, 96, 0.1) 20px 20px, rgba(255, 56, 96, 0.05) 25px 25px;
    }
`;
















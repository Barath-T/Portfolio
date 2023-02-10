import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  flex: 0;
  display: flex;
  padding: 4rem 4rem;
  .pages {
    min-width: 30rem;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name-available {
    min-width: 14rem;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.25rem;
  }
  .name-available .available {
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.05);
    font-size: 1rem;
    text-decoration: none;

    padding: 0.25rem 0.75rem;
    margin-left: 1rem;
    border-radius: 1rem;
    
    &::before{
      content: "";
      background-color: #48c78e;
      display:inline-block;
      height:0.5rem;
      width:0.5rem;
      border-radius: 99px;
      transform: translate(-50%, -25%);
    } 
    strong{
      font-weight:600;
    }
    &:hover{
      background-color: #17241e;
      color: #39966c;
    }
    
    &:hover strong{
      color: #48c78e;
    } 
  }
  .github{
    position: relative;
    height:25px;
    width:25px;
    svg{
      width: "20px",
      height: "20px" 
    }
    svg path{
      fill: white;
    }
  }
  .github::after{
    content:"";

    position:absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    z-index:-2;

    transform:scale(0, 0);
    background-color: white;
    border-radius: 999px;
    transition: transform ease-out 0.3s;
  }

  .github:hover{
    svg path{
      fill:#121212;
    }
  }
  .github:hover::after{
    transform: scale(1.7, 1.7);
  }

`;

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
  position: relative;
  &::after {
    content: "";
    background-color: ${(props) => props.inputcolor || "#ff3860"};
    position: absolute;

    height: 2px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition-duration: 0.5s;
    transition-property: transform;
    width: 100%;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

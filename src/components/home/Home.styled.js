import styled from "styled-components";

export const Div = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hi {
    max-width: 50%;
    font-size:1.5rem;
  }
  h1 {
    margin: 0;
    font-family: kanit;
    font-weight: bold;
    font-size: 3.66rem;
    line-height: 1.233;
    display: flex;
    flex-direction: column;

    .role {
      color: #ff3860;
    }
  }
  .content {
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 1em 0;
  }
  
  .findme{
    color: #5d5d5d;
  }
  .findme a{
    text-decoration:none;
    color: #5d5d5d;
    position:relative;

    transition: color 0.5s;

    &::after{
      content:"";
      height:2px;
      background-color:white;

      position:absolute;
      bottom:0;
      left:0;
      
      transform: scaleX(0);
      transform-origin:bottom left;
      transition: transform 0.5s;

      width:100%;    
    }
    &:hover{
      color: white;
    }
    &:hover::after{
      transform:scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const Button = styled.button`
   padding: 0.5rem 1.5rem;
   margin-right: 1rem;

   background-color: rgba(0, 0, 0, 0);
   color: #ffffff;

   border-width: 0.15rem;
   border-color: ${props=>props.mycolor || "#ff3860"};
   border-radius: 0.25rem;

   font-size: 1.75rem;
  
  &:hover{
    background-color:${props=>props.mycolor || "#ff38607f"};
  }
`;



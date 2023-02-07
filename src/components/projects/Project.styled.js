import styled from "styled-components";

export const Div = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;

  & .header-portion{

    width: 50%;
    h1{
      text-align: center;
      font-size: 5rem;
      font-family: "times new roman";
      font-weight: bolder;
      color: ${props=>`${props.mycolor}`};
    }
    .below-title{
      position:relative;
      margin-top: 10rem;
      display:flex;
      .catchy{
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        font-size:3rem;
        font-weight: 700;
        & span::after{
          content:".";
          color:${props=>`${props.mycolor}f5`};
        }
      }
      .desc{
        font-size: 1.5rem;
        margin-left:auto;
        
        width:50%;
      }
    }
  }
  & .tools-portion{
    margin:7rem 0;
    width:50%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    span{
      display: flex;
      align-items: center;
      span{
        margin-left:1rem;
        font-size:1.2rem;
        text-transform: capitalize;
        color: #ffffff80;
       }
      }
    }
    span img{
      height:40px;
    }
  }
  
  & .screenshot-portion{

    padding-bottom: 8rem;
    display: grid;
    grid-template-columns:auto auto;
    grid-template-rows:auto auto;
    
    column-gap:2rem;
    row-gap: 2rem;
    
    width:75%;
    
    & img:first-child{
      grid-column: 1/3;
      border:0;
      box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
      
    }
    img{
      width: 100%;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 5px 15px;
    }
  }
  
`;

//border:2px solid ${props=>`${props.mycolor}`};
//box-sizing:border-box;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  flex:1;
  .title{
    padding:1.5rem 0 1.5rem 4rem;
    display: inline-block;
    font-size:${props=>props.titlesize || "2.5rem"} ;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.6);
  }
  .title-list a{
    text-decoration:none;
    margin-left: 1rem;
    color: #565656;
    
    transition: color ease-out 0.5s;
  }
  .title-list a:hover{
    color:white;
   }
 `;

export const AllDispDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
   
  padding:2.5rem 4rem;
`;

export const StyledLink = styled(Link)`
  position:relative;
  
  border-radius: 1.5rem;
  padding: 3rem 0; 
  margin-bottom:1rem;
  

  font-size:2rem;
  font-weight: 600;
  text-decoration:none;
  color: white;
  
  display:flex;
  align-items:center;
  
  width:100%;
  counter-increment: a;

  .title-desc {
    display:flex;
    flex-direction:column;
    .desc{
      font-size: 1.2rem;
      margin-left: 4.5rem;
      padding-top:0.5rem;
      color: #ffffff7f;
    }
  }
  
  & .title-desc .skill-title{
    margin-left:2rem;
    &::before{
      content: counter(a) "."; 
      margin-right:1rem;
      color: ${props=>props.linkcolor};
    }
  }
  .img-span{
    margin-left:auto;
  }
  .img-span img{
    height: 50px;
    width:auto;
    margin-left:1rem;
    &:last-child{
      margin-right: 2rem;
    }
  }
  &::before{
    content:"";
    display: inline-block;
  
    border-radius:1.5rem;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    
    opacity:0;
    background-color: ${props=>props.linkcolor};

    transition: opacity ease-out 0.2s;
  }
  &:hover::before{
    opacity: 0.2;
  }
`;

export const SkillsLink = styled(StyledLink)`
  
`;

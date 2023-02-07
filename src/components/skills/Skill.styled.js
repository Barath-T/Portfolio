import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.mycolor || ""};
  position: relative;
  z-index: 0;

  padding-top: 4rem;

  &::before {
    content: "";

    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;

    background-color: rgba(0, 0, 0, 0.8);
  }
  .desc {
    position: relative;
    z-index: 0;
    width: 35%;
    padding-bottom:8rem;
    .main-desc {
      font-size: 4rem;
    }
    .p-desc {
      font-size: 2rem;
    }
  }
  
  & button {
    position: relative;
    z-index: 0;
  }
  
  .tool-logo{
    position:relative;
    margin-top:auto;
    padding:2rem 0;
    background-color: #121212;

    display:flex;
    width:100%;
    justify-content: space-around;
    align-items:center;
    
    img{
      display:relative;
      height: 100px;
    }
  }
`;

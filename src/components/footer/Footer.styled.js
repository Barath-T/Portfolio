import styled from "styled-components";

export const Div = styled.div`
  flex: 0;
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: hsla(0, 0%, 100%, 0.04);
  color: #5d5d5d;

  a {
    position: relative;
    text-decoration: none;
    color: #5d5d5d;
    transition: color 0.5s;

    &::after {
      content: "";
      background-color: white;
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

    &:hover{
      color: white;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  em {
    margin: 0 0.5rem;
    opacity: 0.5;
  }
  .links {
    margin: 0;
    margin-bottom: 2rem;
  }
  .cp {
    margin: 0;
    margin-bottom: 2rem;
  }
`;

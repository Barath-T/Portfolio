import styled from "styled-components";

import { StyledLink } from "../skills/Skills.styled.js";

export const ProjectLink = styled(StyledLink)`
  .title-desc .desc{
    margin-left:0;
    color: #ffffff;
    font-weight: normal;
    
  }
  & .title-desc{
    display: grid;
    grid-template-columns:auto auto;
    grid-template-rows:auto auto;
    align-items:center;
    margin-right:auto;

    max-width:30%;

    &::before{
      content: "${props=>props.year || "2022"}";
      margin-right:1rem;
      color: ${props=>props.linkcolor};

      font-size: 1.2rem;
      grid-column:1;
      grid-row: 1 / 3;

      transform: rotate(-90deg);
    }
  }
  .tagline{
    color: ${props=>props.linkcolor};
    font-size: 1rem;
  }
`;

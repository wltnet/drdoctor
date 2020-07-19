import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 100px;

  ${breakpoints.tablet`
    width: 120px;
  `};

  ${breakpoints.desktop`
    width: 150px;
  `};
`;

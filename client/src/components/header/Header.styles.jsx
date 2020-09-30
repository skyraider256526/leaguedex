import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.header};
  `}

  display: flex;
  flex-flow: column nowrap;
`;

Container.Bottom = styled.div`
  display: flex;
`;

Container.Brand = styled(Link)`
  margin: 0;
`;

Container.Brand.Image = styled.img``;

Container.Buttons = styled.div`
  display: none;
  @media screen and (min-width: 968px) {
    display: flex;
  }
`;

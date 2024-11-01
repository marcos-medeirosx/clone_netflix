import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #141414;
    color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;

export const MovieListContainer = styled.div`
  margin-bottom: 30px;
`;

export const MovieListTitle = styled.h2`
  margin: 0 0 0 30px;
`;

export const MovieItemContainer = styled.div`
  display: inline-block;
`;

export const MovieListItem = styled.img`
  width: 100%;
  border-radius: 5px;
`;

import React from 'react';
import styled from 'styled-components';

const MovieItemContainer = styled.div`
  position: relative;
  min-width: 250px;
  flex: 0 0 auto;
  overflow: visible;
  transition: transform 0.3s;
`;

const MovieItemImage = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s;
  
  ${MovieItemContainer}:hover & {
    transform: scale(1.3);
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 1;
  }
`;

const MovieItem = ({ posterPath }) => {
  return (
    <MovieItemContainer>
      <MovieItemImage src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt="" />
    </MovieItemContainer>
  );
};

export default MovieItem;

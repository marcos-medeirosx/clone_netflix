import React from 'react';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  margin-bottom: 10px;
`;

const MovieItemContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 70px;
`;

const MovieItem = styled.div`
  min-width: 200px;
  img {
    width: 100%;
    border-radius: 5px;
    min-width: 250px;
    flex: 0 0 auto;
    transition: transform 0.1s, all ease 0.6s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const MovieList = ({ title, items }) => {
  return (
    <MovieListContainer>
      <h2>{title}</h2>
      <MovieItemContainer>
        {items && items.results.map((movie, index) => (
          <MovieItem key={movie.id || index}>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title || movie.name} />
            </a>
          </MovieItem>
        ))}
      </MovieItemContainer>
    </MovieListContainer>
  );
};

export default MovieList;
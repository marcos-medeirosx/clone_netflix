import styled from 'styled-components';

const Featured = styled.div`
  height: 100vh; /* Defina a altura desejada aqui */
`;

export const FeaturedVertical = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

export const MovieName = styled.h1`
  font-size: 2.5rem; /* Corrigido espaço */
  color: #fff;
  margin: 0;
  z-index: 1; /* Garante que o título fique acima da imagem */
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 2rem; /* Corrigido espaço */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const MovieDescription = styled.p`
  color: #fff;
  max-width: 600px; /* Limite a largura */
  font-size: 1.2rem;

  /* Propriedades para truncar o texto */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Número de linhas antes de cortar */
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%; /* Ajusta a largura em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 90%;
  }
`;

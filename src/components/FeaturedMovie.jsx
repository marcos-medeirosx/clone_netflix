import React from 'react';
import { FeaturedVertical, MovieName, MovieDescription } from './FeaturedMovieStyle';
export default ({ item }) => {
    if (!item) return null;

    console.log(item);

    return (
        <FeaturedVertical style={{
            background: `linear-gradient(to top, #111 10%, transparent 90%), url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <MovieName>{item.original_title}</MovieName>
            <MovieDescription>{item.overview}</MovieDescription>
        </FeaturedVertical>
    );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    console.log(movies.shows.Search);
    return (
        <div classSName='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {movies.movies.Response === "True" ? (
                        movies.movies.Search.map((movie, index) => (
                            <MovieCard key={index} data={movie} />
                        ))
                    ) : (
                        <div className='movies-error'>
                            <h3>{movies.movies.Error}</h3>
                        </div>
                    )}
                </div>
            </div>
            <div className='movie-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {movies.shows.Response === "True" ? (
                        movies.shows.Search.map((show, index) => (
                            <MovieCard key={index} data={show} />
                        ))
                    ) : (
                        <div className='movies-error'>
                            <h3>{movies.shows.Error}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;
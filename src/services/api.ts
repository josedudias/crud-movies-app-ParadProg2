import axios from 'axios';
import { Movie } from '../types/Movie';

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get('http://localhost:3001/movies');
    return response.data;
};

export const addMovie = async (movie: Movie): Promise<Movie> => {
    const response = await axios.post('http://localhost:3001/movies', movie);
    return response.data;
};

export const deleteMovie = async (id: number | undefined): Promise<void> => {
    await axios.delete(`http://localhost:3001/movies/${id}`);
};

export const updateMovie = async (id: number | undefined, movie: Movie): Promise<Movie> => {
    const response = await axios.put(`http://localhost:3001/movies/${id}`, movie);
    return response.data;
};
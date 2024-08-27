import React, { useState, useEffect } from 'react';
import { getMovies, addMovie, updateMovie } from './services/api';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import { Movie } from './types/Movie';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(error => console.error(error));
  }, []);

  const handleAddMovie = (movie: Movie) => {
    addMovie(movie)
      .then(newMovie => setMovies([...movies, newMovie]))
      .catch(error => console.error(error));
  };

  const handleEditMovie = (movie: Movie) => {
    setEditingMovie(movie);
  };

  const handleUpdateMovie = (updatedMovie: Movie) => {
    if (editingMovie) {
      updateMovie(editingMovie.id, updatedMovie)
        .then(newMovie => {
          setMovies(movies.map(movie => (movie.id === newMovie.id ? newMovie : movie)));
          setEditingMovie(null);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className='movie-container'>
      <h1 className='movie-title'>Gerenciador de Filmes</h1>
      <MovieForm onSubmit={editingMovie ? handleUpdateMovie : handleAddMovie} initialData={editingMovie || undefined} />
      <MovieList movies={movies} setMovies={setMovies} onEdit={handleEditMovie} />
    </div>
  );
};

export default App;
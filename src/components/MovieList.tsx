import { Movie } from '../types/Movie';
import { deleteMovie } from '../services/api';

interface MovieListProps {
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    onEdit: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, setMovies, onEdit }) => {
    const handleDelete = async (id: number | undefined) => {
        await deleteMovie(id).then(() => setMovies(movies.filter(movie => movie.id !== id)));
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Filmes Adicionados</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {movies.length > 0 ?
                    movies.map(movie => (
                        <li key={movie.id} style={{ marginBottom: '12px' }}>
                            {movie.title} ({movie.year}) - {movie.director}
                            <button onClick={() => onEdit(movie)}>Editar</button>
                            <button style={{ marginLeft: '12px' }} onClick={() => handleDelete(movie.id)}>Deletar</button>
                        </li>
                    ))
                    :
                    <li>Nenhum filme adicionado</li>
                }
            </ul>
        </div>
    );
};

export default MovieList;
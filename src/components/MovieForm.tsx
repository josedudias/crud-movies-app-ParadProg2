import { useState, useEffect } from 'react';
import { Movie } from '../types/Movie';

interface MovieFormProps {
    onSubmit: (movie: Movie) => void;
    initialData?: Movie;
}

const MovieForm: React.FC<MovieFormProps> = ({ onSubmit, initialData }) => {
    const [movie, setMovie] = useState<Movie>(initialData || {
        title: '',
        director: '',
        year: 0,
        genre: '',
        duration: 0,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [warning, setWarning] = useState<string>('');

    useEffect(() => {
        if (initialData) {
            setMovie(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!movie.title) newErrors.title = 'Title is required';
        if (!movie.director) newErrors.director = 'Director is required';
        if (movie.year <= 0) newErrors.year = 'Year must be greater than 0';
        if (!movie.genre) newErrors.genre = 'Genre is required';
        if (movie.duration <= 0) newErrors.duration = 'Duration must be greater than 0';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        if (initialData && JSON.stringify(movie) === JSON.stringify(initialData)) {
            setWarning('Nada foi alterado');
            return;
        }
        onSubmit(movie);
        setMovie({
            title: '',
            director: '',
            year: 0,
            genre: '',
            duration: 0,
        });
        setErrors({});
        setWarning('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={movie.title}
                onChange={handleChange}
                placeholder="Titúlo"
            />
            {errors.title && <span>{errors.title}</span>}
            <input
                name="director"
                value={movie.director}
                onChange={handleChange}
                placeholder="Diretor"
            />
            {errors.director && <span>{errors.director}</span>}
            <input
                name="year"
                value={movie.year}
                onChange={handleChange}
                placeholder="Ano"
                type="number"
            />
            {errors.year && <span>{errors.year}</span>}
            <input
                name="genre"
                value={movie.genre}
                onChange={handleChange}
                placeholder="Gênero"
            />
            {errors.genre && <span>{errors.genre}</span>}
            <input
                name="duration"
                value={movie.duration}
                onChange={handleChange}
                placeholder="Duração (minutos)"
                type="number"
            />
            {errors.duration && <span>{errors.duration}</span>}
            <button type="submit">Salvar</button>
            {warning && <p>{warning}</p>}
        </form>
    );
};

export default MovieForm;
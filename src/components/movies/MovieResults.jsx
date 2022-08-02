import { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

function MovieResults() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			//change the api key into a token
			const response = await fetch(
				'https://api.themoviedb.org/3/trending/all/week?api_key=01ac0302e321c114c72100f026cfc028&language=en-US'
			);

			const { results } = await response.json();
			setMovies(results);
		};

		fetchMovies();
	}, []);

	console.log(movies);

	return (
		<div className='grid grid-cols-1 gap-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2'>
			{movies.map((movie) => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</div>
	);
}

export default MovieResults;

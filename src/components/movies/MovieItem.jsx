import React from 'react';

function MovieItem({ movie: { original_title, title, name, overview, backdrop_path, vote_average } }) {
	return (
		<div className='card w-96 bg-base-100 shadow-xl image-full mx-3 my-3'>
			<figure>
				<img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					{original_title ? original_title : name}
					<div className='badge badge-secondary'>{vote_average}</div>
				</h2>
				<p>{overview}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Watch</button>
					<button className='btn btn-primary'>Save for later</button>
				</div>
			</div>
		</div>
	);
}

export default MovieItem;

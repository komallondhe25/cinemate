import { useParams} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
      async function getMovie() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setMovie(data);
      }
      getMovie();
    },[])
    const imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    useDocumentTitle(movie.title)
  return (
    <main>
      <section className='flex flex-wrap justify-around py-5'>
        <div className='max-w-sm'>
          <img className="rounded" src={imagePath} alt="" />
        </div>

        <div className='max-w-2xl text-slate-800 text-lg dark:text-slate-100 '>
        <h1 className=' font-bold text-4xl my-4 text-center lg:text-left'>{movie.title}</h1>
        <p className='my-5'>{movie.overview}</p>
        {movie.genres ? (<p className='flex flex-wrap gap-2 my-3'>
          { movie.genres.map((genre) => (
          <span className='mr-2 p-2 border rounded border-black dark:border-white ' key={genre.id}>{genre.name}</span>
          ))}
        </p>) : "" }
        
        

  <div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-2 t text-gray-900 dark:text-white">{movie.vote_average}</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <span className=" text-gray-900 dark:text-white">{movie.vote_count}</span>
  </div>
            <p className='my-4'>
              <span className='font-bold mr-2'>Runtime:</span>
              <span>{movie.runtime} min.</span>
            </p>
            <p className='my-4'>
              <span className='font-bold mr-2'>Budget:</span>
              <span>{movie.budget} </span>
            </p>
            <p className='my-4'>
              <span className='font-bold mr-2'>Revenue:</span>
              <span>{movie.revenue} </span>
            </p>
            <p className='my-4'>
              <span className='font-bold mr-2'>Release Date:</span>
              <span>{movie.release_date}</span>
            </p>
            <p className='my-4'>
              <span className='font-bold mr-2'>IMDB code:</span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank' rel='noreferrer'>{movie.imdb_id} </a>
            </p>

        </div>
      </section>
    </main>
  )
}

'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Movie, SliderImage } from '@/_lib/types';
import ImageSlider from '@/_components/MovieSearch/ImageSlider';
import { Input } from '@/_components/ui/input';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import MovieScore from './MovieScore';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

const MovieSearch = ({ serverMovies }: { serverMovies: Movie[] }) => {
  const [movies, setMovies] = useState<Movie[]>(serverMovies);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async (query: string) => {
    const res = await fetch(
      `${SEARCH_URL}&query=${query}&append_to_response=genres`,
    );
    const { results } = await res.json();
    setMovies(results);
  };

  useEffect(() => {
    // search debounce
    const timeout = setTimeout(() => {
      if (searchQuery) handleSearch(searchQuery);
      else setMovies(serverMovies);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const mapImages = (movies: Movie[]): SliderImage[] => {
    return movies
      .map((movie) => {
        if (!movie.poster_path) return null;
        return {
          url: `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`,
          alt: movie.title,
          caption: movie.title,
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          overlayContent: (
            <MovieScore
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
            />
          ),
        };
      })
      .filter(Boolean) as SliderImage[];
  };

  const mappedImages = useMemo(() => mapImages(movies), [movies]);

  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div className='relative mx-auto w-full max-w-5xl'>
        <Input
          type='text'
          placeholder='Search for a movie by title...'
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full pr-10'
        />
        <MagnifyingGlassIcon className='pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400' />
      </div>
      <p className='w-full text-center'>
        Showing results for:
        <span className='font-bold'>
          {' '}
          {searchQuery || 'Latest Popular Movies'}
        </span>
      </p>
      <ImageSlider images={mappedImages} />
      <p className='w-full text-center text-zinc-400 text-xs dark:text-zinc-500'>
        Powered by{' '}
        <Link
          href='https://www.themoviedb.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          TMDb
        </Link>
      </p>
    </div>
  );
};

export default MovieSearch;

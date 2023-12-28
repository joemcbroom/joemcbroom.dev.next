'use client';
import { useEffect, useState } from 'react';
import type { Movie, SliderImage } from '@/_lib/types';
import ImageSlider from '@/_components/ImageSlider';
import { Input } from '@/_components/ui/input';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

const MovieSearch = ({ serverMovies }: { serverMovies: Movie[] }) => {
  const [movies, setMovies] = useState<Movie[]>(serverMovies);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [images, setImages] = useState<SliderImage[]>(mapImages(movies));

  const handleSearch = async (query: string) => {
    const res = await fetch(`${SEARCH_URL}&query=${query}`);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    // search debounce
    const timeout = setTimeout(() => {
      handleSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  function mapImages(movies: Movie[]) {
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
        };
      })
      .filter(Boolean) as SliderImage[];
  }

  useEffect(() => {
    if (!movies.length) return;
    setImages(mapImages(movies));
  }, [movies]);

  return (
    <>
      <div className='relative mx-auto w-full max-w-5xl'>
        <Input
          type='text'
          placeholder='Search'
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full pr-10'
        />
        <MagnifyingGlassIcon className='pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-400' />
      </div>
      <ImageSlider images={images} />
    </>
  );
};

export default MovieSearch;

import MovieSearch from '@/_components/MovieSearch/Search';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const revalidate = 0;

const getRecentMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
  );
  const { results } = await res.json();
  return results;
};

const MovieSearchPage = async () => {
  const movies = await getRecentMovies();

  return (
    <>
      <h1 className='my-4 text-center text-xl md:my-10'>Movies</h1>
      <MovieSearch serverMovies={movies} />
    </>
  );
};

export default MovieSearchPage;

// import { createContext, useContext, useState } from 'react';
// import { Movie } from '@/_lib/types';

// type MovieContextType = {
//   movies: Movie[];
//   setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
// };

// // A context is a way to pass data through the component tree without having to pass props down manually at every level.

// // In the example below, we create a context with a default value of an empty array. We also create a function to update the value of the context.
// export const MovieContext = createContext<MovieContextType>({
//   movies: [],
//   setMovies: () => [],
// });

// // We then create a custom hook to use the context in any component.
// export const useMovieContext = () => useContext(MovieContext);

// // We create a provider component that wraps the entire app. This allows us to access the context anywhere in the app.
// export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   return (
//     <MovieContext.Provider value={{ movies, setMovies }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

// // We then wrap the app in the provider component in src/app/_app.tsx.

// // We can then access the context in any component like so:
// // import { useMovieContext } from '@/_lib/hooks/movieContext';
// //
// // const { movies, setMovies } = useMovieContext();


import './App.css';
import { useEffect, useState } from 'react';
import MovieList from "./components/MovieList";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import 'bulma/css/bulma.min.css';
import AddFavorites from './components/AddFavorites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fb797f92`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
   
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  }

  return (
          <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
      
              <MovieListHeading heading="Movies" />
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className='row'>
            <MovieList 
              movies={movies} favoriteComponent={AddFavorites} />

    </div>
    
  </div>
  );
};

export default App;

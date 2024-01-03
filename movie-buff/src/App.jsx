
import './App.css';
import React, { useEffect, useState } from 'react';
import MovieList from "./components/MovieList";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import 'bulma/css/bulma.min.css';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
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

  useEffect(() => {
          const movieFavorites = JSON.parse(
                localStorage.getItem('react-movie-app-favorites')
          );

          if (movieFavorites) {
              setFavorites(movieFavorites);
          }
  }, []);

  const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
        const newFavoriteList = favorites.filter(
            (favorite) => favorite.imdbID !== movie.imdbID
        );

        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
  };


  return (
          
    <div className='container is-fluid movie-app'>
        <div className='row align-items-center mt-6 mb-5'>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
            <MovieList 
                      movies={movies}
                      handleFavoritesClick={addFavoriteMovie}
                      favoriteComponent={AddFavorites}
            />
          </div>
          <div className='row d-flex align-items-center mt-4 mv-b'>
                  <MovieListHeading heading='Favorites' />
          </div>
          <div className='row'>
            <MovieList 
                  movies={favorites} 
                  handleFavoritesClick={removeFavoriteMovie}
                  favoriteComponent={RemoveFavorites}
            />

        </div>
    
    </div>
  );
};

export default App;

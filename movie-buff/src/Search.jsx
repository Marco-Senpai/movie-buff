import React from "react"
import { useState } from "react"
import './Search.css'

const movies = [
    {movie: 'Dredd',
     cast: 'Karl Urban, Olivia Thirlby',
     release: '12/22/2012'
    },
    {
      movie: 'Mission Impossible',
      cast: 'Tom Cruise, Ving Rhames, Simon Pegg',
      release: '01/22/1999'
    },
    {
      movie: 'Tar',
      cast: 'Cate Blanchet, Nina Hoss',
      release: '10/28/2022'
    }
  ]
  function Search() {
    const [ movie, setMovie] = React.useState("");
    const fetchData = (value) => {
      
    }
    
    return (
      <div>
        <button><h1>Movie Buff</h1></button>
          <div>
            <button>Movies</button>
            <button>Actors</button>
            <button>Release Date</button>
           </div>
          <form>
            <input type="search" id="search" placeholder="Search for movies..." value={movie} onChange={(e) => setMovie(e.target.value)} />
            <button type="submit" onChange>Search</button>
          </form>
        </div>
    );
  }
  
  export default Search;
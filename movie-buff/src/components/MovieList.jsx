import React from "react";

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    
    return (
            <>
                {props.movies.map((movie, index) => (
                    <div className="image-container d-flex justify-content-start ">
                        <img src={movie.Poster} alt="movie"></img>
                        <div 
                        onClick={() => props.handleFavoritesClick(movie)} 
                        className="overlay d-flex align-items-center justifycontent-center">
                        
                        <FavoriteComponent/>
                    </div>  
                </div>
            ))}
        </>
    );
};

export default MovieList;
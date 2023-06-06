import React from "react";
import StarRating from "./StarRating";

const MovieCard = ({ movie,deleteMethode }) => {
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />
       <p>{movie.date}</p>
       <div>
        <button className="btn"  onClick={()=>deleteMethode(movie.id)}>Delete</button>
       </div>
    </div>
  );
};

export default MovieCard;

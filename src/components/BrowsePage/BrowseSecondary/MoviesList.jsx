import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, data }) => {
  return (
    <div className="card-info pl-5 pb-2  font-semibold text-2xl">
      <div className="card-info-inner  ">
        <p className="text-white py-2 pl-3">{title}</p>
        <div className="card-container">
          <MoviesCard data={data} title={title} />
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

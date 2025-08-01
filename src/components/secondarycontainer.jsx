import React from "react";
import Movielist from "./movielist";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-69 relative z-20">
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Upcoming"} movies={movies.upComingMovies} />
        <Movielist title={"Popular"} movies={movies.popularMovies} />
        <Movielist title={"Top Rated "} movies={movies.topratedMovies} />
      </div>
    </div>
  );
};

export default Secondarycontainer;

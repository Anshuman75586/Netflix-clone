import Moviecard from "./moviecard";

const Movielist = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="p-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex">
          {movies?.map((movies) => (
            <Moviecard key={movies.id} posterPath={movies?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;

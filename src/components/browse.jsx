import { useSelector } from "react-redux";
import useNowplayingmoviess from "../hooks/useNowplayingMovies";
import usePopularMoviess from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Maincontainer from "./maincontainer";
import Secondarycontainer from "./secondarycontainer";
import GPTsearchPage from "./GPTsearchPage";

const Browse = () => {
  useNowplayingmoviess();
  usePopularMoviess();
  useUpcomingMovies();
  useTopRatedMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      {showGptSearch ? (
        <GPTsearchPage />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;

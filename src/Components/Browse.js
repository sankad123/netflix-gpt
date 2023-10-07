import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../customHooks/uesPopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //calling the custom hooks
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* {
        MainContainer
         -VideoBackground
         -VideoTitle

        -SecondaryContainer
         -MovieList*n
         -MovieCards *n

      } */}
    </div>
  );
};

export default Browse;

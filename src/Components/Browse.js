import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  //calling the custom hooks
useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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

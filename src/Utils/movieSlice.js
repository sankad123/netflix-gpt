import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies:null,
    popularMovies: null,
    topRatedMovies:null,
    upComngMovies:null,
    trailerVideo:null,
  },
  reducers: {
    addNowPlayingMovies : (state, action)=>{
        state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies : (state, action)=>{
      state.popularMovies = action.payload;
  },
  addNowTopRatedMovies : (state, action)=>{
    state.topRatedMovies = action.payload;
},
addNowUpComingMovies : (state, action)=>{
  state.upComngMovies = action.payload;
},
    addTrailerVideo :(state,action)=>{
      state.trailerVideo = action.payload;
    }
  },
});

export default movieSlice.reducer;

export const {addNowPlayingMovies,addTrailerVideo,addNowPopularMovies,addNowTopRatedMovies,addNowUpComingMovies}= movieSlice.actions;

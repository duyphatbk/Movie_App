import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIkey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies'
, async () => {
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows'
, async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${seriesText}&type=series`);
    return response.data;
});

const initialState = {
    movies: {},
    shows: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, shows: payload };
        },
    },

});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export default movieSlice.reducer;
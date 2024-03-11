import { Route, Routes } from "react-router-dom";
import { MovieDetails, MovieList, Search, PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <div  className="dark:bg-slate-700">
        <Routes>
            <Route path="/" element={<MovieList api="movie/now_playing" title="Home"/>}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="movies/popular" element={<MovieList api="movie/popular" title="Popular" />}></Route>
            <Route path="movies/top" element={<MovieList api="movie/top_rated" title="Top rated"/>}></Route>
            <Route path="movies/upcoming" element={<MovieList api="movie/upcoming"title="Upcoming"/>}></Route>
            <Route path="search" element={<Search api="/search/movie"/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

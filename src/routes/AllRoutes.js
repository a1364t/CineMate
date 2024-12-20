import { Routes, Route, ScrollRestoration } from "react-router-dom";

import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";
import { MovieRecommendations } from "../pages/MovieRecommendations";
import { About } from "../pages/About";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/recommendadtions" element={<MovieRecommendations title="Recommendations" />} />
        <Route path="/about" element={<About title="About" />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
};

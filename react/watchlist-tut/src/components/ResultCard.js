import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  // context를 사용해 전역으로 상태관리해준다.
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  //배열에 이미 들어가 있는 영화가 있는지 비교하기 위한 변수
  let storedMovie = watchlist.find((a) => a.id === movie.id);
  //배열에 이미 들어가 있는 시청된 영화가 있는지 비교하기 위한 변수
  let storedMovieWatched = watched.find((a) => a.id === movie.id);

  //배열에 영화가 있으면 disabled 를 true, 없으면 false반환
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4) + "년"
              : "개봉일 미작성"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            등록
          </button>
          <button
            className="btn"
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            시청완료
          </button>
        </div>
      </div>
    </div>
  );
};

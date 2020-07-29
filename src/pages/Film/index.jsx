import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Loader } from '../../components';

import cls from './Film.module.scss';
import { FaStar, FaUndo } from 'react-icons/fa';

const Film = ({ match }) => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`http://www.omdbapi.com/?i=${match.params.filmId}&apikey=fc8a57a6`).then((resp) => {
      setMovie(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && movie ? (
        <section className={cls.Film}>
          <Link to="/" className={cls.Arrow}>
            <FaUndo />
          </Link>
          <div className={cls.Modal}>
            <p>
              Rating: {movie.imdbRating} <FaStar />
            </p>
          </div>
          <div className={cls.FilmHeader}>
            <h3>{movie.Title}</h3>
            <h5>{movie.Year}</h5>
          </div>
          <div className={cls.FilmBody}>
            <img src={movie.Poster} alt="" />
            <p>{movie.Plot}</p>
            <p>
              <span>Released:</span> {movie.Released}
            </p>
            <p>
              <span>Genres:</span> {movie.Genre}
            </p>
            <p>
              <span>Earned: </span>
              {movie.BoxOffice}
            </p>
          </div>
        </section>
      ) : (
        <div className={cls.Loader}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default Film;

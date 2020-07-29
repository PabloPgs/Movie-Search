import React from 'react';
import { Link } from 'react-router-dom';

import NotFound from '../../assets/img/not-found.png';
import cls from './Card.module.scss';

const Card = ({ Poster, Title, Year, imdbID }) => {
  return (
    <div className={cls.Card}>
      <img src={Poster !== 'N/A' ? Poster : NotFound} alt="" />
      <h5>{Title}</h5>
      <h6>{Year}</h6>
      <Link to={'/' + imdbID}>
        <button className="btn btn-success">View More</button>
      </Link>
    </div>
  );
};

export default Card;

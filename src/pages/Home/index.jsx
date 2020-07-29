import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Search, Card, Loader } from '../../components';

import cls from './Home.module.scss';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({
    value: '',
    type: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSearchMovie = (value) => {
    setSearch(value);
  };

  const onChangePage = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (!search.value) {
      return;
    }
    setLoading(true);
    setMovies([]);
    axios(
      `http://www.omdbapi.com/?s=${search.value}&type=${search.type}&page=${currentPage}&apikey=fc8a57a6`,
    )
      .then(({ data }) => {
        if (!data.Search) {
          setError('Nothing found');
        } else {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
          setError('');
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError('Something went wrong');
      });
  }, [search, currentPage]);

  return (
    <section className={cls.Home}>
      <h2 className={cls.Title}>Search for movies now!</h2>

      <div className={cls.HomeHeader}>
        <Search onSearch={onSearchMovie} />
      </div>
      {error && <p className={cls.Error}>{error}</p>}
      <div className={cls.HomeContent}>
        {loading && (
          <div className={cls.Loader}>
            <Loader />
          </div>
        )}
        {!loading &&
          movies.length > 0 &&
          movies.map((movie) => {
            return <Card key={movie.imdbID} {...movie} />;
          })}
      </div>

      {totalPages > 1 && (
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={<span className={cls.PaginateBreak}>...</span>}
          pageCount={totalPages}
          onPageChange={onChangePage}
          containerClassName={cls.Paginate}
          disabledClassName={cls.PaginateDisabled}
          activeClassName={cls.PaginateActive}
        />
      )}
    </section>
  );
};

export default Home;

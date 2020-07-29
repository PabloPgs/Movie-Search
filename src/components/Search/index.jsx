import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import cls from './Search.module.scss';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState({
    value: '',
    type: 'movie',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch({
      value: '',
      type: 'movie',
    });
  };

  const inputHandler = (e) => {
    e.persist();
    setSearch((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };

  const selectHandler = (e) => {
    e.persist();
    setSearch((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };

  return (
    <form className={cls.Search} onSubmit={submitHandler}>
      <input
        onChange={inputHandler}
        value={search.value}
        type="text"
        placeholder="Search movie..."
      />
      <button className="btn btn-primary">
        <FaSearch />
      </button>

      <div className={cls.Select}>
        Type:
        <select onChange={selectHandler} value={search.type}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
    </form>
  );
};

export default Search;

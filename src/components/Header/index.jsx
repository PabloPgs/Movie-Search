import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import SideBar from './SideBar';

import cls from './Header.module.scss';

const Header = () => {
  const [sidebar, showSidebar] = useState(false);

  const toggleSidebar = () => {
    showSidebar(!sidebar);
  };

  return (
    <header className={cls.Header}>
      <div className={cls.HeaderInner}>
        {sidebar ? (
          <FaTimes className={cls.Burger} onClick={toggleSidebar} />
        ) : (
          <FaBars className={cls.Burger} onClick={toggleSidebar} />
        )}
        <Link to="/" className="logo">
          MovieSearch
        </Link>

        <SideBar show={sidebar} hideSidebar={toggleSidebar} />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './SideBar.module.scss';

const SideBar = ({ show, hideSidebar }) => {
  const clz = [cls.SideBar];

  if (show) {
    clz.push(cls.Active);
  }

  return (
    <nav className={clz.join(' ')}>
      <NavLink to="/" onClick={hideSidebar} exact activeClassName={cls.Active}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={hideSidebar} activeClassName={cls.Active}>
        About
      </NavLink>
    </nav>
  );
};

export default SideBar;

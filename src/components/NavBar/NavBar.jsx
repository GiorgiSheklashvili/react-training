import React from 'react';
import nav from './NavBar.module.css'

const NavBar = () => {
    return <nav className={nav.nav}>
    <div className={nav.item}>
      Profile
    </div>
    <div className={`${nav.item} ${nav.active}`}>
      Messages
    </div>
    <div className={nav.item}>
      News
    </div>
    <div className={nav.item}>
      Music
    </div>
    <div className={nav.item}>
      Settings
    </div>
  </nav>
}

export default NavBar;
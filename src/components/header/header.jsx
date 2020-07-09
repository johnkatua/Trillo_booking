import React from 'react'

import './header.scss';

import logo from '../../images/logo.png';
import user from '../../images/user.jpg';
import {ReactComponent as Search} from '../../images/SVG/magnifying-glass.svg';
import {ReactComponent as Bookmark} from '../../images/SVG/bookmark.svg';
import {ReactComponent as Chat} from '../../images/SVG/chat.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt = "logo" className='logo'/>

      <form action='#' className='search'>
        <input type='text' className='search__input' placeholder='search hotels' />
        <button className='search__button'>
          <svg className='search__icon'>
            <Search />
          </svg>
        </button>
      </form>
      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
             <Bookmark />
          </svg>
          <span className='user-nav__notification'>45</span>
        </div>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
             <Chat />
          </svg>
          <span className='user-nav__notification'>21</span>
        </div>
        <div className="user-nav__user">
           <img src={user} alt = 'user' className='user-nav__user-photo' />
           <span className="user-nav__user-name">katua</span>
        </div>
      </nav>
    </div>
  )
};

export default Header;

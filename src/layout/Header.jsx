import React from 'react';
import { Link } from 'react-router-dom';
import { useUserState } from '../store/auth/provider';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineSend,
} from 'react-icons/ai';
import AuthBtn from './AuthBtn';

const Header = () => {
  const { user } = useUserState();
  return (
    <header className="header">
      <div className="inner">
        <div className="header-utils">
          <h1>
            <Link to="/">
              <img
                src={require('../assets/images/logo.png')}
                alt="인스타그램"
              />
            </Link>
          </h1>
          <div className="header-search">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="검색"
              className="search"
            />
          </div>
          <nav className="gnb">
            <ul>
              <li>{user && <span>{user}님 안녕하세요!</span>}</li>
              <li>
                <Link to="/">
                  <AiOutlineHome />
                </Link>
              </li>
              <li>
                <AiOutlineSend />
              </li>
              <li>
                <AuthBtn />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

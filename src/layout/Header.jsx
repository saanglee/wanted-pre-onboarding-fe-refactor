import React from 'react';
import { Link } from 'react-router-dom';
import { useUserState } from '../store/auth/provider';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineSend,
} from 'react-icons/ai';
import AuthBtn from './AuthBtn';
import { useThrottle } from '../hooks/useThrottle';

const Header = () => {
  const { user } = useUserState();
  const throttleScroll = useThrottle(handleScroll, 150);

  // scrolls
  const [hide, setHide] = React.useState(false);
  const [pageY, setPageY] = React.useState(0);
  // console.log(pageY);

  const documentRef = React.useRef(document);

  function handleScroll(event) {
    event.stopPropagation();
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  }

  React.useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () =>
      documentRef.current.removeEventListener(
        'scroll',
        throttleScroll,
      );
  }, [pageY]);

  return (
    <header className={hide ? 'hide header' : 'header'}>
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
              <li className="user">
                {user && <span>{user}님 안녕하세요!</span>}
              </li>
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

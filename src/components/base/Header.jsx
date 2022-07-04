import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHome, AiOutlineSend } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="inner">
        <div className="header-utils">
          <h1>
            <Link to="/">
              <img
                src={require("../../assets/images/logo.png")}
                alt="인스타그램"
              />
            </Link>
          </h1>
          <div className="header-search">
            <AiOutlineSearch />
            <input type="text" placeholder="검색" className="search" />
          </div>
          <nav className="gnb">
            <ul>
              <li>
                <Link to="/">
                  <AiOutlineHome />
                </Link>
              </li>
              <li>
                <AiOutlineSend />
              </li>
              <li>
                <button type="button" onClick={onLogout}>
                  LOGOUT
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

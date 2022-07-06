import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../components/member/LoginForm';

import { FaFacebookSquare } from 'react-icons/fa';

const SignUpMoal = ({ isModal, setShowModal }) => {
  // const handleCloseModal = useCallback(() => {
  //   setShowModal(false);
  // }, [setShowModal]);
  return (
    <>
      <div className="overlay"></div>
      <div className="sign-up-cotent">
        <section className="login-form">
          <h2>
            <img src={require('../assets/images/logo.png')} alt="" />
          </h2>
          <div className="login-facebook">
            <FaFacebookSquare />
            <Link to="/">Facebook으로 로그인</Link>
          </div>
          <LoginForm isModal={isModal} />
          <div className="login-hr">
            <span></span>
            <span>또는</span>
            <span></span>
          </div>
          <div>
            <span>계정이 있으신가요?</span>
            <Link to="/"> 로그인 </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUpMoal;

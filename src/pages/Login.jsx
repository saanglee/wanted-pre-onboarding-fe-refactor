import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useUserState } from '../store/auth/provider';
import Layout from '../layout';
import LoginForm from '../components/member/LoginForm';
import { FaFacebookSquare } from 'react-icons/fa';

const Login = () => {
  return (
    <Layout>
      <div className="login">
        <div className="login-content">
          <div className="login-form">
            <h2>
              <img
                src={require('../assets/images/logo.png')}
                alt=""
              />
            </h2>
            <LoginForm />
            <div className="login-hr">
              <span></span>
              <span>또는</span>
              <span></span>
            </div>
            <div className="login-facebook">
              <FaFacebookSquare />
              <Link to="/">Facebook으로 로그인</Link>
            </div>
            <Link to="/">비밀번호를 잊으셨나요?</Link>
          </div>
          <div className="login-account">
            <span>계정이 없으신가요?</span>
            <Link to="/">가입하기</Link>
          </div>
          <div className="login-download">
            <p>앱을 다운로드 하세요.</p>
            <div className="apps">
              <Link to="/">
                <img
                  src={require('../assets/images/download_ios.png')}
                ></img>
              </Link>
              <Link to="/">
                <img
                  src={require('../assets/images/download_and.png')}
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

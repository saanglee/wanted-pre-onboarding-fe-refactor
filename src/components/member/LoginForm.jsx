import React, { useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';

import cx from 'classnames';

const LoginForm = ({ isModal }) => {
  const { loginCallback } = useAuth();

  const [inputs, setInputs] = useState({
    user: '',
    email: '',
    password: '',
  });

  const inputId = useRef();
  const inputEmail = useRef();
  const inputPw = useRef();

  //이메일, 비밀번호 유효성 검사 상태 저장
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [pwdFocused, setPwdFocused] = useState(false);

  const [statusBtn, setstatesBtn] = useState(false);

  //비구조화 할당
  const { user, email, password } = inputs;

  // Handle Focus
  const handleEmailFocused = () => {
    setEmailFocused(current => !current);
  };

  const handlePwdFocused = () => {
    setPwdFocused(current => !current);
  };

  const handleNameFocused = () => {
    setNameFocused(current => !current);
  };

  //input change event
  const onChangeHandler = e => {
    const CurentName = inputId.current.value;
    const CurrentEmail = inputEmail.current.value;
    const CurrentPwd = inputPw.current.value;

    if (CurentName !== '') {
      setValidName(true);
    } else {
      setValidName(false);
    }

    //이메일 유효성
    if (validationEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    //비밀번호 유효성
    if (validationPassword(CurrentPwd)) {
      setValidPwd(true);
    } else {
      setValidPwd(false);
    }

    //이메일 && 비밀번호 유효성 검사 - 버튼 disabled 여부
    if (
      CurentName !== '' &&
      validationEmail(CurrentEmail) &&
      validationPassword(CurrentPwd)
    ) {
      setstatesBtn(true);
    } else {
      setstatesBtn(false);
    }

    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    loginCallback(inputs);
  };

  function validationEmail(v) {
    if (v === '') {
      return false;
    }
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*)*\.[a-zA-Z]{2,3}$/i;

    if (!emailRegex.test(v)) {
      return false;
    }
    return true;
  }

  //비밀번호 유효성 검사 함수
  function validationPassword(v) {
    if (v === '') {
      return false;
    }
    const pwRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&~]{8,}/g;

    //비밀번호 형식이 맞지 않을 경우
    if (!pwRegex.test(v)) {
      return false;
    }

    return true;
  }

  // Button
  const loginButton = (
    <button
      type="submit"
      className="btn btn-point w100"
      disabled={statusBtn ? '' : 'disabled'}
    >
      로그인
    </button>
  );
  const signUpButton = (
    <button
      type="submit"
      className="btn btn-point w100"
      disabled={statusBtn ? '' : 'disabled'}
    >
      회원가입
    </button>
  );

  return (
    <form method="post" onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="user"
        ref={inputId}
        onFocus={handleNameFocused}
        onBlur={handleNameFocused}
        onChange={onChangeHandler}
        placeholder="닉네임"
        className={cx('w100', {
          error: validName !== '' && !validName && nameFocused,
        })}
      />
      <input
        type="text"
        name="email"
        ref={inputEmail}
        onFocus={handleEmailFocused}
        onBlur={handleEmailFocused}
        onChange={onChangeHandler}
        placeholder="이메일"
        className={cx('w100', {
          error: validEmail !== '' && !validEmail && emailFocused,
        })}
      />
      <input
        type="password"
        name="password"
        ref={inputPw}
        onFocus={handlePwdFocused}
        onBlur={handlePwdFocused}
        onChange={onChangeHandler}
        placeholder="비밀번호"
        className={cx('w100', {
          error: validPwd !== '' && !validPwd && pwdFocused,
        })}
      />
      {isModal ? signUpButton : loginButton}
    </form>
  );
};

export default LoginForm;

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

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [pwdFocused, setPwdFocused] = useState(false);

  const [statusBtn, setstatesBtn] = useState(false);

  const { user, email, password } = inputs;

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

    if (validationEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (validationPassword(CurrentPwd)) {
      setValidPwd(true);
    } else {
      setValidPwd(false);
    }

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

  function validationPassword(v) {
    if (v === '') {
      return false;
    }
    const pwRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&~]{8,}/g;

    if (!pwRegex.test(v)) {
      return false;
    }

    return true;
  }

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
      <button
        type="submit"
        className="btn btn-point w100"
        disabled={statusBtn ? '' : 'disabled'}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;

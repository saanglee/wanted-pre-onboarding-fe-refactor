import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    user: "",
    email: "",
    password: "",
  });
  const inputId = useRef();
  const inputEmail = useRef();
  const inputPw = useRef();

  //이메일, 비밀번호 유효성 검사 상태 저장
  const [statusId, setStatusId] = useState(true);
  const [statusEmail, setStatusEmail] = useState(true);
  const [statusPw, setStatusPw] = useState(true);
  const [statusBtn, setstatesBtn] = useState(false);
  //비구조화 할당
  const { user, email, password } = inputs;

  //input change event
  const onChangeHandler = (e) => {
    const idCurrent = inputId.current.value;
    const emailCurrent = inputEmail.current.value;
    const pwCurrent = inputPw.current.value;

    if (idCurrent !== "") {
      setStatusId(true);
    } else {
      setStatusId(false);
    }

    //이메일 유효성
    if (validationEmail(email)) {
      setStatusEmail(true);
    } else {
      setStatusEmail(false);
    }

    //비밀번호 유효성
    if (validationPassword(pwCurrent)) {
      setStatusPw(true);
    } else {
      setStatusPw(false);
    }

    //이메일 && 비밀번호 유효성 검사 - 버튼 disabled 여부
    if (
      idCurrent !== "" &&
      validationEmail(emailCurrent) &&
      validationPassword(pwCurrent)
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

  //form 전송
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      localStorage.getItem("email") === email &&
      localStorage.getItem("password") === password
    ) {
      alert("등록된 이메일, 패스워드와 일치합니다.");
    } else {
      //로컬스토리지에 저장
      localStorage.setItem("user", user);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("로그인 되었습니다.");
      navigate("/");
    }
  };

  //이메일 유효성 검사 함수
  function validationEmail(v) {
    if (v === "") {
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
    if (v === "") {
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

  return (
    <form method="post" onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="user"
        ref={inputId}
        onChange={onChangeHandler}
        placeholder="닉네임"
        className={(statusId ? "" : "error") + " w100"}
      />
      <input
        type="text"
        name="email"
        ref={inputEmail}
        onChange={onChangeHandler}
        placeholder="이메일"
        className={(statusEmail ? "" : "error") + " w100"}
      />
      <input
        type="password"
        name="password"
        ref={inputPw}
        onChange={onChangeHandler}
        placeholder="비밀번호"
        className={(statusPw ? "" : "error") + " w100"}
      />
      <button
        type="submit"
        className="btn btn-point w100"
        disabled={statusBtn ? "" : "disabled"}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;

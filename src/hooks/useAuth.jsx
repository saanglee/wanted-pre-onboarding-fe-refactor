import { useNavigate } from 'react-router-dom';
import { useUserDispatch } from '../store/auth/provider';
import { checkIsVerifyAccount } from '../util/checkIsVerifyAccount';

/**
 * useAuth
 * @typedef { function }
 * @function login, logout 콜백함수를 모아두는 hook
 * @return { function } login 콜백함수
 * @return { function } logout 콜백함수
 */
export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const loginCallback = getLoginCallback(navigate, dispatch);
  const logoutCallback = getLogoutCallback(navigate, dispatch);

  return { loginCallback, logoutCallback };
}

const getLoginCallback =
  (navigate, dispatch) => async inputValues => {
    const { user, email, password } = inputValues;
    const isUserExist = checkIsVerifyAccount({ email, password });

    if (!isUserExist) {
      alert('아이디 또는 비밀번호를 잘못 입력하셨습니다!');
      return;
    }

    dispatch({
      type: 'LOGIN',
      user,
    });

    alert('로그인 성공하였습니다.');
    navigate('/', { replace: true });
  };

const getLogoutCallback = (navigate, dispatch) => async () => {
  alert('로그아웃 되었습니다.');
  dispatch({
    type: 'LOGOUT',
  });

  navigate('/login', { replace: true });
};

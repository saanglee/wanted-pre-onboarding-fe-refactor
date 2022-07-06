import { useNavigate } from 'react-router-dom';
import {
  useUserDispatch,
  useUserState,
} from '../store/auth/provider';
import { checkAccount } from '../util/checkAccount';

/**
 * useAuth
 * @typedef { function }
 * @function login, logout 콜백함수를 모아두는 hook
 * @return { function } login 콜백함수
 * @return { function } logout 콜백함수
 */
export function useAuth() {
  const navigate = useNavigate();
  const { userList } = useUserState();
  const dispatch = useUserDispatch();

  const signUpCallback = getSignUpCallback(dispatch);
  const loginCallback = getLoginCallback(
    navigate,
    userList,
    dispatch,
    signUpCallback,
  );
  const logoutCallback = getLogoutCallback(navigate, dispatch);

  return { loginCallback, logoutCallback };
}

const getLoginCallback =
  (navigate, userList, dispatch, signUpCallback) =>
  async inputValues => {
    const { user, email, password } = inputValues;
    const { isUserExist, isUserValid } = checkAccount(
      { email, password },
      userList,
    );

    if (isUserExist && !isUserValid) {
      alert('비밀번호가 잘못되었습니다! 확인해주세요!');
      return;
    }

    if (!(isUserExist && isUserValid)) {
      signUpCallback({ email, password });
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

const getSignUpCallback = dispatch => async user => {
  alert('존재하지 않는 유저입니다. 회원가입 처리 하겠습니다');

  dispatch({
    type: 'SIGNUP',
    user,
  });

  alert('회원가입 완료했습니다! 로그인 해주세요!');
};

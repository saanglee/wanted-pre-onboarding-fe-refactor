import { useUserState } from '../store/auth/provider';
import { useAuth } from '../hooks/useAuth';

export default function AuthBtn() {
  const { token } = useUserState();
  const { logoutCallback } = useAuth();
  return (
    <>
      {token && <LogoutBtn submitCallback={logoutCallback} />}
      {token || <LoginBtn />}
    </>
  );
}

const LoginBtn = () => {
  return <button type="button">LOGIN</button>;
};

const LogoutBtn = ({ submitCallback }) => {
  return (
    <button type="button" onClick={submitCallback}>
      LOGOUT
    </button>
  );
};

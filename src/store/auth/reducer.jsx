const initialState = {
  token: JSON.parse(localStorage.getItem('authToken')),
  user: localStorage.getItem('user'),
  userList:
    JSON.parse(localStorage.getItem('registeredUserList')) || [],
};

const authReducer = (state, { type, user }) => {
  switch (type) {
    case 'LOGIN':
      localStorage.setItem('authToken', true);
      localStorage.setItem('user', user);
      return {
        ...state,
        token: true,
        user,
      };
    case 'LOGOUT':
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return {
        ...state,
        token: false,
        user,
      };
    case 'SIGNUP':
      const newUserList = [...state.userList, user];
      localStorage.setItem(
        'registeredUserList',
        JSON.stringify(newUserList),
      );
      return {
        ...state,
        userList: newUserList,
      };
    default:
      return state;
  }
};

export { initialState, authReducer };

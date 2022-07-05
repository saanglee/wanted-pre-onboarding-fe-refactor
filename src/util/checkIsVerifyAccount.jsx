const DUMMY_USER = [
  {
    userEmail: 'test12@naver.com',
    userPassword: 'Test12345!',
  },
  {
    userEmail: 'test23@naver.com',
    userPassword: 'Test12345!',
  },
  {
    userEmail: 'test34@naver.com',
    userPassword: 'Test12345!',
  },
];

/**
 * checkIsVerifyAccount
 * @typedef { function }
 * @function checkIsVerifyAccount - 입력받은 values에 해당하는 사용자가 존재하는지 판별
 * @param { object } 입력된 email, password 객체
 * @param { array } 가입된 유저 리스트 Dummy data
 * @return { boolean } 일치하는 사용자가 존재하는지 여부
 */
export function checkIsVerifyAccount({ email, password }) {
  const isUserExist = DUMMY_USER.find(
    ({ userEmail, userPassword }) => {
      return email === userEmail && password === userPassword;
    },
  );

  return Boolean(isUserExist);
}

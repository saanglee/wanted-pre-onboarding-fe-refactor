/**
 * checkAccount
 * @typedef { function }
 * @function checkAccount - 입력된 유저의 account check
 * @param { object } 입력된 email, password 객체
 * @param { array } 가입된 유저 리스트 Dummy data
 * @return { boolean, boolean } 유저 존재 여부, 비밀번호 일치 여부
 */
export function checkAccount(inputValues, userList) {
  return isUserExist(inputValues, userList);
}

const isUserExist = (inputValues, userList) => {
  let checkUserAccout = { isUserExist: false, isUserValid: false };

  const filteredIdList = userList.filter(
    user => user.email === inputValues.email,
  );

  if (!filteredIdList.length) return checkUserAccout;
  checkUserAccout = { ...checkUserAccout, isUserExist: true };

  const isPwMatched = filteredIdList.find(
    registeredUser =>
      JSON.stringify(inputValues) === JSON.stringify(registeredUser),
  );

  if (isPwMatched) {
    checkUserAccout = { ...checkUserAccout, isUserValid: true };
  }

  return checkUserAccout;
};

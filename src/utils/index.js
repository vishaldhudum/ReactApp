function validateEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function checkPassword(str) {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{0,}$/;
  return regex.test(str);
}

function checkUsername(str) {
  const regex = /^[0-9a-zA-Z]+$/;
  return str.match(regex);
}

const isLogin = () => {
  return localStorage.getItem('loggedIn') === "true"
}

const setCookie = (name, value) => {
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString() + ";path=/";
  document.cookie = name + "=" + value + expires;
}

const usernameFieldValidation = (value) => {
  let error = '';
  if (!value) 
      error = "Please enter username";
  else if (!checkUsername(value))
      error = "Username should contain alphabets and numbers";
  else if (value.length < 8)
      error = "Username should be minimum 8 characters";
  else if (value.length > 50)
      error = "Username should be maximum 50 characters";
  else
      error = "";
  
  return error
}

const emailFieldValidation = (value) => {
  let error = '';
  if (!value)
      error = "Please enter email";
  else if (!validateEmail(value))
      error = "Please enter valid email";
  else
      error = "";
  
  return error
}

const passwordFieldValidation = (value) => {
  let error = '';
  if (!value) 
      error = "Please enter password";
  else if (value.length < 8)
      error = "Password is too short, should be 8 characters minimum";
  else if (!checkPassword(value))
      error = "Password should contain atleast 1 character, 1 number and 1 special character";
  else if (value.length > 50)
      error = "Password is too long, maximum 50 characters allowed";
  else
      error = "";

  return error
}

export { isLogin, setCookie, usernameFieldValidation, emailFieldValidation, passwordFieldValidation }
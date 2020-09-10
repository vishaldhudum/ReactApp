// Libraries
import React from "react";

// Utils
import { setCookie, usernameFieldValidation, emailFieldValidation, passwordFieldValidation } from "../../../utils";

// Constants
import { CustomInputField } from '../../../constants/components'

// CSS
import '../../../style/Login.css'

export default function Login(props) {
  const initialState = {
    username: "",
    email: "",
    password: "",
    errors: {
      username: "",
      email: "",
      password: ""
    }
  };

  const [state, setState] = React.useState(initialState);

  const handleChange = event => {
    setState({
      ...state, 
      [event.target.name]: event.target.value 
    });
  };

  const handleFocus = event => {
    let { errors } = state;
    errors[event.target.name] = "";
    setState({ 
      ...state,
      errors 
    });
  };

  const handleBlur = event => {
    if (event.target.name === 'username') {
      state.errors.username = usernameFieldValidation(event.target.value);
    }
    if (event.target.name === 'email') {
      state.errors.email = emailFieldValidation(event.target.value);
    }
    if (event.target.name === 'password') {
      state.errors.password = passwordFieldValidation(event.target.value);
    }
    setState({ ...state, errors });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { username, email, password } = state;
    let errors = [];

    errors['username'] = usernameFieldValidation(username);
    errors['email'] = emailFieldValidation(email);
    errors['password'] = passwordFieldValidation(password);

    setState({ ...state, errors });
    console.log(props)
    if (!errors.username && !errors.email && !errors.password) {
      localStorage.setItem("loggedIn", 'true');
      setCookie('username', username);
      setCookie('email', email);
      setCookie('password', password);
      props.history.push('/home');
    }
  };

  const { username, email, password, errors } = state;

  return (
    <div className="login">
      <div className="title">
        <h1>Login</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <CustomInputField
          label='Username'
          name='username'
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          errorMsg={errors.username}
        />
        <CustomInputField
          label='Email'
          name='email'
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          errorMsg={errors.email}
        />
        <CustomInputField
          label='Password'
          name='password'
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          errorMsg={errors.password}
        />
        <div className="loginBtn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

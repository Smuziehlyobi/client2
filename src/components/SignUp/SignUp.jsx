import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import {useAppDispatch} from "../../app/providers/Store/hooks.js";
import {useNavigate} from "react-router";
import {registerAsync} from "../../features/auth/authSlice.js";
import {appRoutes, RoutePaths} from "../../app/providers/routes/routeConfig.jsx";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
    repeatPassword: '',
    password: '',
    email: ''
  });
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(registerAsync({
        firstName: formData.firstName,
        lastName: formData.lastName,
        patronymic: formData.patronymic,
        password: formData.password,
        repeatPassword: formData.repeatPassword,
        email: formData.email,
      }))
        .then(() => navigate(RoutePaths[appRoutes.WALLET]))
        .catch(()=> console.log('error :)'))
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container>
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleInputChange}
                 className="form-control"
                 placeholder="Last name"
          />
        </div>
        <div className="mb-3">
          <label>Patronymic</label>
          <input
            type="patronymic"
            name="patronymic"
            value={formData.patronymic}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button onClick={(event) => handleSubmit(event)} className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </Container>
  )
};

export default SignUp;
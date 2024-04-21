import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {loginAsync} from "../../features/auth/authSlice.js";
import {useAppDispatch} from "../../app/providers/Store/hooks.js";
import {useNavigate} from "react-router";
import {appRoutes, RoutePaths} from "../../app/providers/routes/routeConfig.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
      dispatch(loginAsync({
        username: formData.username,
        password: formData.password
      }))
        .then(() => navigate(RoutePaths[appRoutes.WALLET]))
    } catch (error) {
      console.log(error);
    }

    setFormData({ username: '', password: '' });
  };

  return (
    <Container>
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="username"
            value={formData.username}
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
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        <div className="d-grid">
          <button onClick={(event) => handleSubmit(event)} className="btn btn-primary">Submit</button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </Container>
  );
};

export default Login;

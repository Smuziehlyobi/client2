import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import {loginAsync, selectAuth} from "../../features/auth/authSlice.js";
import {useAppDispatch, useAppSelector} from "../../app/providers/Store/hooks.js";
import { useNavigate } from "react-router";
import { appRoutes, RoutePaths } from "../../app/providers/routes/routeConfig.jsx";
import styles from "./Login.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector(selectAuth)

  useEffect(() => {
    if (isLoggedIn) {
      navigate(RoutePaths[appRoutes.WALLET])
    }
  }, [isLoggedIn]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      loginAsync({
        username: formData.username,
        password: formData.password,
      }),
    )

    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <div className={styles.header}>Карта жителя Ростова</div>

      <Container>
        <form>
          <h3 className={styles.loginTitle}>Вход</h3>
          <div className="mb-3">
            <label>Электронная почта</label>
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Электронная почта"
            />
          </div>
          <div className="mb-3">
            <label>Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Пароль"
            />
          </div>
          <div className="mb-3"></div>
          <div className="d-grid">
            <CustomButton color="blue" onClick={(event) => handleSubmit(event)}>
              Войти
            </CustomButton>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;

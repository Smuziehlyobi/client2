import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/providers/Store/hooks.js";
import { useNavigate } from "react-router";
import {registerAsync, selectAuth} from "../../features/auth/authSlice.js";
import { appRoutes, RoutePaths } from "../../app/providers/routes/routeConfig.jsx";
import styles from "./SignUp.module.css";
import CustomButton from "../CustomButton/CustomButton.jsx";
import {Link} from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    patronymic: "",
    repeatPassword: "",
    password: "",
    email: "",
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
    try {
      dispatch(
        registerAsync({
          firstName: formData.firstName,
          lastName: formData.lastName,
          patronymic: formData.patronymic,
          password: formData.password,
          repeatPassword: formData.repeatPassword,
          email: formData.email,
        }),
      )
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.header}>Карта жителя Ростова</div>
      <h3 className={styles.signUpTitle}>Регистрация</h3>

      <Container>
        <form>
          <div className="mb-3">
            <label>Фамилия</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Иванов"
            />
          </div>
          <div className="mb-3">
            <label>Имя</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Иван"
            />
          </div>
          <div className="mb-3">
            <label>Отчество</label>
            <input
              type="patronymic"
              name="patronymic"
              value={formData.patronymic}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Владимирович"
            />
          </div>
          <div className="mb-3">
            <label>Электронная почта</label>
            <input
              type="email"
              name="email"
              value={formData.email}
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
              placeholder="*****"
            />
          </div>
          <div className="mb-3">
            <label>Повторите пароль</label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Повторите пароль"
            />
          </div>
          <div className="d-grid">
            <CustomButton color="violet" onClick={(event) => handleSubmit(event)}>
              Зарегестрироваться
            </CustomButton>
          </div>
          <p className="forgot-password text-right">
            Уже зарегестрированы? <Link to={RoutePaths[appRoutes.LOGIN]}>войти</Link>
          </p>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;

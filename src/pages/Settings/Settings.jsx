import React from "react";
import { Container, Form } from "react-bootstrap";
import styles from "./Settings.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";

export default function Settings() {
  return (
    <div>
      <Header />

      <Container>
        <div className={styles.title}>Настройки аккаунта</div>

        <Form>
          <Form.Group className="mt-4 mb-2" controlId="formBasicEmail">
            <Form.Label>Ваша почта</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control type="text" placeholder="Фамилия" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" placeholder="Имя" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Отчество</Form.Label>
            <Form.Control type="text" placeholder="Отчество" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Ваш пароль</Form.Label>
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>

          <div className={styles.submitButtonWrapper}>
            <CustomButton color="violet" variant="primary" type="submit">
              Сохранить
            </CustomButton>
          </div>
        </Form>
      </Container>
    </div>
  );
}

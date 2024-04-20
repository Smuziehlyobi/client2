import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import styles from "./Header.module.css";
import profileImg from "./../../assets/img/gray.png";
import favoritesImg from "./../../assets/img/icons/star.svg";
import searchImg from "./../../assets/img/icons/search.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link className={styles.profile}>
          <img className={styles.profileImg} src={profileImg} alt="profile" />
        </Link>

        <InputGroup className={styles.search}>
          <InputGroup.Text
            style={{ borderTopLeftRadius: "9999px", borderBottomLeftRadius: "9999px" }}>
            {" "}
            <img src={searchImg} alt="" />{" "}
          </InputGroup.Text>
          <Form.Control
            style={{ borderTopRightRadius: "9999px", borderBottomRightRadius: "9999px" }}
            placeholder="Поиск"
            aria-label="Поиск"
          />
        </InputGroup>
      </div>

      <div className={styles.divider}></div>
    </Container>
  );
}

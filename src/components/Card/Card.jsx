import React from "react";
import styles from "./Card.module.css";
import { Badge } from "react-bootstrap";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardColumn}>
        <Badge className={styles.badge} pill bg="info">
          У вас запись к врачу
        </Badge>
        <div className={styles.balance}>9999 ₽</div>
        <div className={styles.name}>Фамилия И. О.</div>
      </div>
      <div className={styles.cardColumn}>
        <div className={styles.cardNumber}>...1714</div>
      </div>
    </div>
  );
}

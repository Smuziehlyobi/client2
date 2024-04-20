import React from "react";
import { Card } from "react-bootstrap";
import styles from "./PrivelegesItem.module.css";

export default function PrivelegesItem({ title, descr, link }) {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className={`text-muted ${styles.descr}`}>{descr}</Card.Subtitle>
        <Card.Link className={styles.link} href={link}>
          Перейти
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./NewsItem.module.css";

export default function NewsItem({ title, descr, imgSrc }) {
  return (
    <Card className={styles.cardWrapper}>
      <Card.Img className={styles.img} variant="top" src={imgSrc} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text className={styles.descr}>{descr}</Card.Text>
        <Button className={styles.button} variant="success">
          Прочитать новость
        </Button>
      </Card.Body>
    </Card>
  );
}

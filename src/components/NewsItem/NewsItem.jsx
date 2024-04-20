import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./NewsItem.module.css";
import CustomButton from "../CustomButton/CustomButton";

export default function NewsItem({ title, descr, imgSrc }) {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.img} variant="top" src={imgSrc} />
      <div className={styles.title}>{title}</div>
      <div className={styles.descr}>{descr}</div>
      <div className={styles.buttonWrapper}>
        <CustomButton color="violet" className={styles.button} variant="success">
          Прочитать новость
        </CustomButton>
      </div>
    </div>
  );
}

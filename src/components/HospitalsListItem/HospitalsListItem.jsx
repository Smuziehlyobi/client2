import React from "react";
import styles from "./HospitalsListItem.module.css";

export default function HospitalsListItem({ title, descr, imgSrc }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.title}>{title}</div>
        <div className={styles.descr}>{descr}</div>
      </div>

      <div className={styles.column}>
        <img src={imgSrc} alt="" className={styles.img} />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./CustomButton.module.css";

export default function CustomButton({ color, children }) {
  // const classList = `${styles.button} ${color  styles.[]}`;
  return <button className={`${styles.button} ${styles[color]}`}>{children}</button>;
}

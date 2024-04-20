import React from "react";
import styles from "./CustomButton.module.css";

export default function CustomButton({ color, children, style }) {
  // const classList = `${styles.button} ${color  styles.[]}`;
  return (
    <button style={style} className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  );
}

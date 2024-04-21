import React from "react";
import Header from "../../components/Header/Header";
import HospitalsList from "../../components/HospitalsList/HospitalsList";
import styles from "./Hospitals.module.css";

export default function Hospitals() {
  return (
    <div>
      <Header />
      <div className={styles.title}>Запись к врачу</div>
      <HospitalsList />
    </div>
  );
}

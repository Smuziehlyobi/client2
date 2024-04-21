import React from "react";
import styles from "./HospitalsList.module.css";
import exampleImg from "./../../assets/img/example-img.png";
import HospitalsListItem from "../HospitalsListItem/HospitalsListItem";
import { Container } from "react-bootstrap";

export default function HospitalsList() {
  const stateHospitals = [
    {
      id: 1,
      title: "Клиника государственная",
      descr: "Описание",
    },
    {
      id: 2,
      title: "Клиника государственная",
      descr: "Описание",
    },
    {
      id: 3,
      title: "Клиника государственная",
      descr: "Описание",
    },
  ];

  const privateHospitals = [
    {
      id: 1,
      title: "Клиника частная",
      descr: "Описание",
    },
    {
      id: 2,
      title: "Клиника частная",
      descr: "Описание",
    },
    {
      id: 3,
      title: "Клиника частная",
      descr: "Описание",
    },
  ];

  return (
    <Container>
      <div className={styles.title}>Государственные клиники</div>
      {stateHospitals.map((item) => (
        <HospitalsListItem
          key={item.id}
          title={item.title}
          descr={item.descr}
          imgSrc={exampleImg}
        />
      ))}

      <div className={styles.title}>Частные клиники</div>

      {privateHospitals.map((item) => (
        <HospitalsListItem
          key={item.id}
          title={item.title}
          descr={item.descr}
          imgSrc={exampleImg}
        />
      ))}
    </Container>
  );
}

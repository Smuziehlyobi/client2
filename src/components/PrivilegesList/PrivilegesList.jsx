import React from "react";
import PrivelegesItem from "../PrivelegesItem/PrivelegesItem";
import styles from "./PrivilegesList.module.css";
import exampleImg from "./../../assets/img/example-img.png";

export default function PrivilegesList() {
  const privilegesList = [
    {
      id: 1,
      title: "Мероприятие 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
    {
      id: 2,
      title: "Мероприятие 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
    {
      id: 3,
      title: "Мероприятие 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
    {
      id: 4,
      title: "Мероприятие 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
  ];
  return (
    <div className={styles.privileges}>
      <div className={styles.privilegesTitle}>Мероприятия для льготников</div>
      {privilegesList.map((item) => (
        <PrivelegesItem
          key={item.id}
          title={item.title}
          descr={item.descr}
          link={item.link}
          imgSrc={exampleImg}
        />
      ))}
    </div>
  );
}

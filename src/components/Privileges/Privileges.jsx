import React from "react";
import PrivelegesItem from "../PrivelegesItem/PrivelegesItem";
import styles from "./Privileges.module.css";

export default function Privileges() {
  const privilegesList = [
    {
      id: 1,
      title: "Привелегия 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
    {
      id: 2,
      title: "Привелегия 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
    {
      id: 3,
      title: "Привелегия 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
    {
      id: 4,
      title: "Привелегия 1",
      descr: "Описание 1",
      link: "https://youtu.be/dQw4w9WgXcQ?si=ZX_BZ42yvI7pN8ps",
    },
  ];
  return (
    <div className={styles.privileges}>
      <div className={styles.privilegesTitle}>Привелегии</div>
      {privilegesList.map((item) => (
        <PrivelegesItem key={item.id} title={item.title} descr={item.descr} link={item.link} />
      ))}
    </div>
  );
}

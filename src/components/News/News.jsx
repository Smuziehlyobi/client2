import React from "react";
import grayImg from "./../../assets/img/gray.png";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./News.module.css";

export default function News() {
  const newsList = [
    {
      id: 1,
      title: "Новость 1",
      descr: "Описание 1",
      img: grayImg,
    },
    {
      id: 2,
      title: "Новость 2",
      descr: "Описание 2",
      img: grayImg,
    },
    {
      id: 3,
      title: "Новость 3",
      descr: "Описание 3",
      img: grayImg,
    },
  ];
  return (
    <div className={styles.newsWrapper}>
      <div className={styles.newsTitle}>Новости</div>
      {newsList.map((item) => (
        <NewsItem key={item.id} title={item.title} descr={item.descr} imgSrc={item.img} />
      ))}
    </div>
  );
}

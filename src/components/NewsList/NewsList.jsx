import React, { useEffect } from "react";
import exampleImg from "./../../assets/img/example-img.jpg";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";
import axios from "axios";

export default function NewsList() {
  const newsList = [
    {
      id: 1,
      title: "Новость 1",
      descr: "Описание 1",
      img: exampleImg,
    },
    {
      id: 2,
      title: "Новость 2",
      descr: "Описание 2",
      img: exampleImg,
    },
    {
      id: 3,
      title: "Новость 3",
      descr: "Описание 3",
      img: exampleImg,
    },
  ];

  let newsXml;
  let xmlDocument;

  useEffect(() => {
    axios({
      method: "get",
      url: "https://don24.ru/rss",
      responseType: "stream",
    })
      .then(function (response) {
        newsXml = response.data;
        console.log(newsXml);
        // resolve(newsXml);
      })
      .then(function (response) {
        xmlDocument = new DOMParser().parseFromString(newsXml, "text/xml");
        // resolve(xmlDocument);
      })
      .then(function (response) {
        console.log(xmlDocument);
      });
  }, []);

  // const xmlReference = `
  //   <tutorials>
  //     <tutorial>
  //       <id>123</id>
  //       <title>qwerty</title>
  //     </tutorial>
  //     <tutorial>
  //       <id>123808</id>
  //       <title>dfbfdbb</title>
  //     </tutorial>
  //   </tutorials>
  // `;

  // useEffect(() => {
  //   const xmlDocument = new DOMParser().parseFromString(xmlReference, "text/xml");
  //   console.log(xmlDocument);
  // }, []);

  return (
    <div className={styles.newsWrapper}>
      <div className={styles.newsTitle}>Новости</div>
      {newsList.map((item) => (
        <NewsItem key={item.id} title={item.title} descr={item.descr} imgSrc={item.img} />
      ))}
    </div>
  );
}

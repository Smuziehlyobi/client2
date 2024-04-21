import React from "react";
import styles from "./News.module.css";
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";

export default function News() {
  return (
    <div>
      <Header />
      <NewsList />
    </div>
  );
}

import React from "react";
import styles from "./CardBenefits.module.css";
import backpackImg from "./../../assets/img/icons/backpack.svg";
import bagCheckImg from "./../../assets/img/icons/bag-check.svg";
import busImg from "./../../assets/img/icons/bus.svg";
import cardChecklistWhiteImg from "./../../assets/img/icons/card-checklist-white.svg";
import percent from "./../../assets/img/icons/percent.svg";
import { Container } from "react-bootstrap";

export default function CardBenefits() {
  return (
    <Container className={styles.cardBenefits}>
      <div className={styles.title}>Преимущества вашей карты</div>

      <ul className={styles.list}>
        <li>
          <div className={styles.imgWrapper}>
            <img src={backpackImg} alt="" className={styles.img} />
          </div>
          <div className={styles.text}>
            Льготный или бесплатный проезд на общественном транспорте
          </div>
        </li>

        <li>
          <div className={styles.imgWrapper}>
            <img src={bagCheckImg} alt="" className={styles.img} />
          </div>
          <div className={styles.text}>Запись к врачу с помощью карты жителя Ростова</div>
        </li>

        <li>
          <div className={styles.imgWrapper}>
            <img src={busImg} alt="" className={styles.img} />
          </div>
          <div className={styles.text}>Скидки на товары и услуги</div>
        </li>

        <li>
          <div className={styles.imgWrapper}>
            <img src={cardChecklistWhiteImg} alt="" className={styles.img} />
          </div>
          <div className={styles.text}>Проход и питание в школе или колледже</div>
        </li>

        <li>
          <div className={styles.imgWrapper}>
            <img src={percent} alt="" className={styles.img} />
          </div>
          <div className={styles.text}>Бонусы за оплату по QR-коду</div>
        </li>
      </ul>
    </Container>
  );
}

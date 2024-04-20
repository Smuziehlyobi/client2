import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Unregistered.module.css";
import logo from "./../../assets/img/logo.svg";
import transportImg from "./../../assets/img/transport.svg";
import documentsImg from "./../../assets/img/documents.svg";
import saleImg from "./../../assets/img/sale.svg";
import studyImg from "./../../assets/img/study.svg";
import News from "../../components/News/News";
import Privileges from "../../components/Privileges/Privileges";
import ciCardImg from "./../../assets/img/ci-card.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import CardBenefits from "../../app/CardBenefits/CardBenefits";

export default function Unregistered() {
  return (
    <>
      <Container className={styles.mainSection}>
        <header className={styles.headerTitle}>Карта жителя Ростова</header>
        <h1 className={styles.title}>Оформите карту жителя Ростова - получите скидки</h1>
        <h2 className={styles.subtitle}>
          Множество льгот для пенсионеров, студентов, и школьников{" "}
        </h2>

        <div className={styles.buttonWrapper}>
          <CustomButton className={styles.getCardButton}>Получить карту</CustomButton>
        </div>

        <img src={ciCardImg} alt="ciCardImg" className={styles.ciCardImg} />
      </Container>

      <CardBenefits />

      {/* <img className={styles.logo} src={logo} alt="logo" />

      <div className={styles.title}>
        Карта жителя Ростова — это именная пластиковая карта, которая выдается жителям
        Ростова-на-Дону и обеспечивает персональный доступ к городской инфраструктуре.
      </div>

      <div className={styles.listTitle}>Карта жителя Ростова позволяет:</div>

      <ul className={styles.possibilitiesList}>
        <li>
          пользоваться бесплатным, льготным (со скидкой) или платным проездом на общественном
          транспорте
        </li>
        <li>записываться к врачу</li>
        <li>получать скидки на товары и услуги в партнерских точках</li>
        <li>производить оплату по QR-коду и получать бонусы</li>
      </ul>

      <Button
        style={{
          width: "100%",
          height: "60px",
          fontWeight: 500,
        }}
        variant="outline-success">
        Получить карту
      </Button>

      <div className={styles.benefitsTitle}>Преимущества вашей карты</div>

      <ul className={styles.benefitsList}>
        <li>
          <img src={transportImg} alt="transport" className={styles.benefitsImg} />
          <div className={styles.benefitsText}>Бесплатный проезд на общественном транспорте</div>
        </li>
        <li>
          <img src={documentsImg} alt="documents" className={styles.benefitsImg} />
          <div className={styles.benefitsText}>Запись к врачу с помощью карты москвича</div>
        </li>
        <li>
          <img src={saleImg} alt="sale" className={styles.benefitsImg} />
          <div className={styles.benefitsText}>Скидки на товары и услуги</div>
        </li>
        <li>
          <img src={studyImg} alt="study" className={styles.benefitsImg} />
          <div className={styles.benefitsText}>Проход и питание в школе или колледже</div>
        </li>
        <li>
          <img src={saleImg} alt="sale" className={styles.benefitsImg} />
          <div className={styles.benefitsText}>Бонусы за оплату по QR-коду</div>
        </li>
      </ul> */}

      {/* <News />
      <Privileges /> */}
    </>
  );
}

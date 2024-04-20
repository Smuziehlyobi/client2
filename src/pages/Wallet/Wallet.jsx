import React, {useState} from 'react';
import walletCard from '../../assets/img/icons/wallet-card.svg'
import Styles from "./Wallet.module.css"
import {Button, Modal} from "react-bootstrap";

const Wallet = () => {
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  function handleShow() {
    setShowPaymentHistory(true);
  }

  return (
    <div>
      <div className="card">
        <div className={`card-body ${Styles.cardInContainer}`}>
          <div className={Styles.cardInItem}>
            <img src={walletCard} alt={'#card-ico'}/>
          </div>
          <div className={Styles.cardInItem}>
            <p>
              Студент
            </p>
          </div>
          <div className={Styles.cardInItem}>
            <div className="">2556 Р.</div>
            <div className="">Фамилия И. О.</div>
          </div>
          <div className={Styles.cardNumber}>
            <p>
              ...1714
            </p>
          </div>
        </div>
      </div>

      <Button className={Styles.QrPayment} variant="outline-success">Оплатить по QR-коду</Button>

      <div className={`d-grid gap-2 ${Styles.operationHistory}`}>
        <Button onClick={() => handleShow()} variant="secondary" size="lg">
          История операций
        </Button>
      </div>

      <Modal
        show={showPaymentHistory}
        fullscreen={true}
        animation={false}
        onHide={() => setShowPaymentHistory(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>История операций</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </div>
  );
};

export default Wallet;
import React, { useState } from "react";
import walletCard from "../../assets/img/icons/wallet-card.svg";
import Styles from "./Wallet.module.css";
import { Button, Modal } from "react-bootstrap";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
import Card from "../../components/Card/Card";
import CustomButton from "../../components/CustomButton/CustomButton";
import qrImg from "./../../assets/img/icons/qr-code-scan.svg";

const Wallet = () => {
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  function handleShow() {
    setShowPaymentHistory(true);
  }

  return (
    <div>
      <Header />
      <div className={Styles.title}>Кошелек</div>
      <Container className={Styles.walletWrapper}>
        <Card />

        <div className={Styles.customButtonWrapper}>
          <CustomButton color="violet" style={{ fontWeight: 600 }} variant="outline-success">
            <div className={Styles.buttonContent}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className={Styles.buttonImg}>
                <g clip-path="url(#clip0_63_368)">
                  <path d="M0 0.5C0 0.367392 0.0526784 0.240215 0.146447 0.146447C0.240215 0.0526784 0.367392 0 0.5 0L3.5 0C3.63261 0 3.75979 0.0526784 3.85355 0.146447C3.94732 0.240215 4 0.367392 4 0.5C4 0.632608 3.94732 0.759785 3.85355 0.853553C3.75979 0.947322 3.63261 1 3.5 1H1V3.5C1 3.63261 0.947322 3.75979 0.853553 3.85355C0.759785 3.94732 0.632608 4 0.5 4C0.367392 4 0.240215 3.94732 0.146447 3.85355C0.0526784 3.75979 0 3.63261 0 3.5V0.5ZM12 0.5C12 0.367392 12.0527 0.240215 12.1464 0.146447C12.2402 0.0526784 12.3674 0 12.5 0L15.5 0C15.6326 0 15.7598 0.0526784 15.8536 0.146447C15.9473 0.240215 16 0.367392 16 0.5V3.5C16 3.63261 15.9473 3.75979 15.8536 3.85355C15.7598 3.94732 15.6326 4 15.5 4C15.3674 4 15.2402 3.94732 15.1464 3.85355C15.0527 3.75979 15 3.63261 15 3.5V1H12.5C12.3674 1 12.2402 0.947322 12.1464 0.853553C12.0527 0.759785 12 0.632608 12 0.5ZM0.5 12C0.632608 12 0.759785 12.0527 0.853553 12.1464C0.947322 12.2402 1 12.3674 1 12.5V15H3.5C3.63261 15 3.75979 15.0527 3.85355 15.1464C3.94732 15.2402 4 15.3674 4 15.5C4 15.6326 3.94732 15.7598 3.85355 15.8536C3.75979 15.9473 3.63261 16 3.5 16H0.5C0.367392 16 0.240215 15.9473 0.146447 15.8536C0.0526784 15.7598 0 15.6326 0 15.5V12.5C0 12.3674 0.0526784 12.2402 0.146447 12.1464C0.240215 12.0527 0.367392 12 0.5 12ZM15.5 12C15.6326 12 15.7598 12.0527 15.8536 12.1464C15.9473 12.2402 16 12.3674 16 12.5V15.5C16 15.6326 15.9473 15.7598 15.8536 15.8536C15.7598 15.9473 15.6326 16 15.5 16H12.5C12.3674 16 12.2402 15.9473 12.1464 15.8536C12.0527 15.7598 12 15.6326 12 15.5C12 15.3674 12.0527 15.2402 12.1464 15.1464C12.2402 15.0527 12.3674 15 12.5 15H15V12.5C15 12.3674 15.0527 12.2402 15.1464 12.1464C15.2402 12.0527 15.3674 12 15.5 12ZM4 4H5V5H4V4Z" />
                  <path d="M7 2H2V7H7V2ZM3 3H6V6H3V3ZM5 11H4V12H5V11Z" />
                  <path d="M7 9H2V14H7V9ZM3 10H6V13H3V10ZM11 4H12V5H11V4Z" />
                  <path d="M9 2H14V7H9V2ZM10 3V6H13V3H10ZM8 8V10H9V11H8V12H10V10H11V12H12V11H14V10H11V8H8ZM10 10H9V9H10V10ZM14 12H13V13H11V14H14V12ZM10 14V13H8V14H10Z" />
                  <path d="M12 9H14V8H12V9Z" />
                </g>
                <defs>
                  <clipPath id="clip0_63_368">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Оплатить по QR-коду
            </div>
          </CustomButton>
        </div>
      </Container>

      <div className={`d-grid gap-2 ${Styles.operationHistory}`}>
        <div className={Styles.historyButtonWrapper}>
          <CustomButton color="blue" onClick={() => handleShow()} variant="secondary" size="lg">
            История операций
          </CustomButton>
        </div>
      </div>

      <Modal
        show={showPaymentHistory}
        fullscreen={true}
        animation={false}
        onHide={() => setShowPaymentHistory(false)}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>История операций</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Container>
      </Modal>
    </div>
  );
};

export default Wallet;

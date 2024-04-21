import React, {useEffect, useRef, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import QrScanner from "qr-scanner";
import Styles from "./QrReader.module.css"
import QrFrame from "../../assets/img/icons/qr-frame.svg"
import {useNavigate} from "react-router";
import {appRoutes, RoutePaths} from "../../app/providers/routes/routeConfig.jsx";
import {postPayment} from "../../api/postPayment.js";
import {useAppDispatch} from "../../app/providers/Store/hooks.js";
import {payForQr} from "../../features/auth/authSlice.js";
const QrReader = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [show, setShow] = useState(false);

  const handleAccess = () => {
    // запрос на БД
    dispatch(payForQr())
  };
  const handleClose = () => {
    navigate(RoutePaths[appRoutes.WALLET])
  }
  const handleShow = () => setShow(true);

  // QR States
  const scanner = useRef()
  const videoEl = useRef(null)
  const qrBoxEl = useRef(null)
  const [qrOn, setQrOn] = useState(true)

  // Result
  const [scannedResult, setScannedResult] = useState("")

  // Success
  const onScanSuccess = result => {
    // 🖨 Print the "result" to browser console.
    console.log(result)
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data)
  }


  useEffect(() => {
    if (scannedResult) {
      handleShow()
      console.log(scannedResult.data)
    }
  }, [scannedResult]);


  // Fail
  const onScanFail = err => {
    // 🖨 Print the "err" to browser console.
    console.log(err)
  }

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined
      })

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch(err => {
          if (err) setQrOn(false)
        })
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop()
      }
    }
  }, [])

  // ❌ If "camera" is not allowed in browser permissions, show an alert.
  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      )
  }, [qrOn])

  return (
      <div className={Styles.qrReader}>
        {/* QR */}
        <video ref={videoEl}></video>
        <div ref={qrBoxEl} className={Styles.qrBox}>
          <img
            src={QrFrame}
            alt="Qr Frame"
            width={256}
            height={256}
            className={Styles.qrFrame}
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Выполнить операцию?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Отменить
            </Button>
            <Button variant="primary" onClick={handleAccess}>
              Подтвердить
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default QrReader

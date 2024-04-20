import { Container } from "react-bootstrap";
import Header from "../components/Header/Header.jsx";
import "./App.css";
import AppRouter from "./providers/routes/AppRouter.jsx";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className={"app"}>
      {/* <Header /> */}
      <AppRouter />
    </div>
  );
}

export default App;

import { Container } from "react-bootstrap";
import Header from "../components/Header/Header.jsx";
import "./App.css";
import AppRouter from "./providers/routes/AppRouter.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className={"app"}>
      <Container className="content-page">
        <Header />
        <AppRouter />
      </Container>
      <NavBar/>
    </div>
  );
}

export default App;

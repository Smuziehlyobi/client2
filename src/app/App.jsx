import { Container } from "react-bootstrap";
import Header from "../components/Header/Header.jsx";
import "./App.css";
import AppRouter from "./providers/routes/AppRouter.jsx";

function App() {
  return (
    <div className={"app"}>
      <Container className="content-page">
        <Header />
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;

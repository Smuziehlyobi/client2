import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path=""></Route>
      </Routes>
    </>
  );
}

export default App;

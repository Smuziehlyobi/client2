import "./App.css";
import AppRouter from "./providers/routes/AppRouter.jsx";

function App() {
  return (
    <div className={'app'}>
      <div className="content-page">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;

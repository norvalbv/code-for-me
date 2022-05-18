import "../index.css";
import AppRouter from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-stone-300 via-teal-100 to-pink-200 min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;

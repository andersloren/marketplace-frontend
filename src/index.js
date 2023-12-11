import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import AppRouter from "./components/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <AppRouter />
  </div>
);

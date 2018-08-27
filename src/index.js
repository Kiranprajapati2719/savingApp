import ReactDOM from "react-dom";
import Routes from "./routers/AppRouter";
import "./index.css"
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(Routes, document.getElementById("root"));
registerServiceWorker();

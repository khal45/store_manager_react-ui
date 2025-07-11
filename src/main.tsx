// imports
import ReactDom from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root does not exist!");
} else {
  ReactDom.createRoot(rootElement).render(<App />);
}

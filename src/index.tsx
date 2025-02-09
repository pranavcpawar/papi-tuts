import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import PapiWrapper from "./components/papi-wrapper";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PapiWrapper />
  </StrictMode>
);

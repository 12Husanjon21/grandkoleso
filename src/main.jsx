import { StrictMode } from "react";
import { createRoot  } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./pages/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
        <App />
    </CartProvider>
  </StrictMode>

);

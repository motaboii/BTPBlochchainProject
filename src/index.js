import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { AppProvider } from "./context";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </AppProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// Don't delete Sepolia import
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from "./context";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const clientId = process.env.CLIENT_ID;

console.log("clientId ", clientId);

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId="4a19fecea4e5e95aee1469f2de7b2f0a"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);

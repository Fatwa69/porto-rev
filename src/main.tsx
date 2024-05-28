import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";
import ScrollToTop from "./component/ScrollToTop";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import App from "./App";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
      <RouterProvider router={router} />
    </StrictMode>
  );
}

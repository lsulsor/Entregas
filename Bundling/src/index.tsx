
import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./averageComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h2>Hola Mundo desde React</h2>
    <img src="../content/logo_2.png"></img>
  </div>
);

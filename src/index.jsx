import React from "react";
import { createRoot } from "react-dom/client";
import CatatanApp from "./component/CatatanApp";

// STYLING
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<CatatanApp />);

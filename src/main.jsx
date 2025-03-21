import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppLayout } from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<AppLayout />
	</React.StrictMode>,
);

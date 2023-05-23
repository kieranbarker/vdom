import { StrictMode, createElement as h } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const tasks = [
	{ id: "task-mv600Yov_rEYKAIBSQOn0", name: "Buy groceries", done: false },
	{ id: "task-fIgXwErqDeSlYHKKGvP-H", name: "Walk dogs", done: false },
	{ id: "task-YbS8DuIkkEjQjxMayC_2p", name: "Work out", done: false },
];

root.render(h(StrictMode, null, h(App, { tasks })));

import { nanoid } from "nanoid";
import { Fragment, createElement as h, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);

	function addTask(name) {
		const newTask = { name, id: `task-${nanoid()}`, done: false };
		setTasks([...tasks, newTask]);
	}

	function toggleTask(id) {
		const newTasks = tasks.map(task =>
			task.id === id ? { ...task, done: !task.done } : task
		);

		setTasks(newTasks);
	}

	return h(
		Fragment,
		null,
		h("h1", null, "Todos"),
		h(TaskForm, { addTask }),
		tasks.length
			? h(
					"ul",
					{ role: "list" },
					tasks.map(task =>
						h(Task, { ...task, toggleTask, key: task.id })
					)
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  )
			: h("p", null, "Add some tasks...")
	);
}

export default App;

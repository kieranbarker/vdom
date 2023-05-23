import { createElement as h, useState } from "react";

function TaskForm(props) {
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.addTask(value);
		setValue("");
	}

	return h(
		"form",
		{ className: "TaskForm", onSubmit: handleSubmit },
		h(
			"p",
			null,
			h("label", { htmlFor: "task" }, "Task"),
			h("input", {
				value,
				id: "task",
				type: "text",
				required: true,
				onChange: handleChange,
			})
		),
		h("p", null, h("button", { type: "submit" }, "Add task"))
	);
}

export default TaskForm;

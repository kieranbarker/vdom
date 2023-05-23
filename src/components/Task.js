import { createElement as h } from "react";

function Task(props) {
	function handleChange() {
		props.toggleTask(props.id);
	}

	return h(
		"li",
		{ className: "Task" },
		h(
			"label",
			{ htmlFor: props.id },
			h("input", {
				id: props.id,
				type: "checkbox",
				checked: props.done,
				onChange: handleChange,
			}),
			h("span", null, props.name)
		)
	);
}

export default Task;

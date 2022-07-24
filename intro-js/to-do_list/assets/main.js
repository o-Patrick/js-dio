const form = document.querySelector('#task-form');
const taskList = document.querySelector('.tasks');

form.onsubmit = function(e){
	e.preventDefault();
	const inputField = document.querySelector('#task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(taskName){
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskNameNode = document.createTextNode(taskName);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', taskName);
	newTask.setAttribute('id', taskName);

	taskLabel.setAttribute('for', taskName);
	taskLabel.appendChild(taskNameNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
};

/* First (failed) try
function start(){
	alert('a');
	let task = document.querySelector(#task);
	task.value = "";
	let btn = document.querySelector(#btn);
	btn.addEventListener('click', function(){
		let taskList = [];
		taskList.push(task.value); // stores input taskds
		let list = document.createElement('input'); // creates a checkbox
		list.type = 'checkbox'
		let i = 0; // control var for showing tasks
		list.value = taskList[i];
		document.appendChild('list');
		i++; // adds to control var so the next task is added on next click
	});
};
*/
let listElement = document.querySelector('#app ul') as HTMLUListElement;
let inputElement = document.querySelector('#app input') as HTMLInputElement;
let buttonElement = document.querySelector('#app button') as HTMLButtonElement;

let tasks: string[] = [];

function addTask(): void {
    let taskName: string = inputElement.value;

    if (taskName.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    
    tasks.push(taskName);
    inputElement.value = '';
    console.log('Current Tasks:', tasks);
    renderTasks();
    saveData();
}

function renderTasks(): void {
    listElement.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        if (task === undefined) {
            continue;
        }

        let taskElement = document.createElement('li');
        let taskText = document.createTextNode(task);
        let linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');
        let linkText = document.createTextNode('Delete');
        linkElement.setAttribute('style', 'color: red; margin-left: 10px; cursor: pointer;');
        linkElement.appendChild(linkText);
        linkElement.addEventListener('click', () => {
            deleteTask(i);
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(linkElement);
        listElement.appendChild(taskElement);
    }
}

function deleteTask(index: number): void {
    tasks.splice(index, 1);
    renderTasks();
    saveData();
}

function loadData(): void {
    let storedTasks = localStorage.getItem('taskList');

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

buttonElement.addEventListener('click', addTask);

function saveData(): void {
    localStorage.setItem('taskList', JSON.stringify(tasks));
}

loadData();
renderTasks();
// Vetor para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask(event) {
event.preventDefault();

  // Obter os valores do formulário
const description = document.getElementById('description').value;
const priority = document.getElementById('priority').value;
const dueDate = new Date(document.getElementById('due-date').value);

  // Criar um objeto de tarefa
const task = {
    description: description,
    priority: priority,
    dueDate: dueDate,
    completed: false
};

  // Adicionar a tarefa ao vetor
tasks.push(task);

  // Limpar os campos do formulário
document.getElementById('description').value = '';
document.getElementById('priority').value = 'alta';
document.getElementById('due-date').value = '';

  // Atualizar a tabela
updateTable();
}

// Função para remover uma tarefa
function removeTask(index) {
  // Remover a tarefa do vetor
tasks.splice(index, 1);

  // Atualizar a tabela
updateTable();
}

// Função para marcar uma tarefa como concluída
function markCompleted(index) {
  // Inverter o valor do campo completed da tarefa
tasks[index].completed = !tasks[index].completed;

  // Atualizar a tabela
updateTable();
}

// Função para atualizar a tabela com as tarefas
function updateTable() {
const tableBody = document.querySelector('#task-table tbody');
tableBody.innerHTML = '';

  // Criar uma linha na tabela para cada tarefa
for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const row = document.createElement('tr');
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = task.description;
    row.appendChild(descriptionCell);

    const priorityCell = document.createElement('td');
    priorityCell.textContent = task.priority;
    row.appendChild(priorityCell);

    const dueDateCell = document.createElement('td');
    dueDateCell.textContent = task.dueDate.toDateString();
    row.appendChild(dueDateCell);

    const statusCell = document.createElement('td');
    statusCell.textContent = task.completed ? 'Concluída' : 'Pendente';
    row.appendChild(statusCell);

    const actionsCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => removeTask(i));
    actionsCell.appendChild(removeButton);

    const markButton = document.createElement('button');
    markButton.textContent = task.completed ? 'Desmarcar' : 'Marcar';
    markButton.addEventListener('click', () => markCompleted(i));
    actionsCell.appendChild(markButton);

    row.appendChild(actionsCell);
    tableBody.appendChild(row);
}
}

// Adicionar um listener de evento ao formulário para adicionar tarefas
const form = document.getElementById('task-form');
form.addEventListener('submit', addTask);
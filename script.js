document.addEventListener('DOMContentLoaded', function () {
  const inputBox = document.getElementById('input-box');
  const addButton = document.querySelector('.row button');
  const listContainer = document.getElementById('list-container');

  // Event listener for the add button
  addButton.addEventListener('click', function () {
    const taskText = inputBox.value.trim();

    if (taskText !== '') {
      addTask(taskText);
      inputBox.value = '';
    }
  });

  // Event listener for pressing Enter in the input box
  inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addButton.click();
    }
  });

  // Event listener for marking/unmarking a task as checked
  listContainer.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'LI') {
      target.classList.toggle('checked');
    } else if (target.classList.contains('delete')) {
      deleteTask(target.closest('li'));
    }
  });

  // Function to add a new task to the list
  function addTask(text) {
    const newTask = document.createElement('li');
    newTask.textContent = text;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');

    newTask.appendChild(deleteButton);
    listContainer.appendChild(newTask);
  }

  // Function to delete a task
  function deleteTask(task) {
    listContainer.removeChild(task);
  }
});

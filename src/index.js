document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      // Clear the input field
      form.reset();
    }
  });
});


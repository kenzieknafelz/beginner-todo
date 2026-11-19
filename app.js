const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

let tasks = [];

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  tasks.push({ text: input.value, done: false });
  input.value = "";
  render();
});

const taskList = document.querySelector(".task-list");
const addBtn = document.getElementById("add");

taskList.innerHTML = localStorage.getItem("data");
document.getElementById("user-input").focus();

function addTask() {
  const userInput = document.getElementById("user-input");

  if (!userInput.value) {
    alert("Please enter a valid task");
    return;
  }
  taskList.innerHTML += `<div class="task-item">
  <p class="task-text">${userInput.value}</p>
  <button id="del" class="btn btn-danger">Delete</button>
  </div>`;

  // userInput.value = "";

  localStorage.setItem("data", taskList.innerHTML);
}

const deleteBtn = document.querySelectorAll("#del");

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", (e) => {
    console.log(deleteBtn);
    console.log("delete");
    e.target.parentNode.remove();
    localStorage.setItem("data", taskList.innerHTML);
  });
  // localStorage.setItem("data", taskList.innerHTML);
}

addBtn.addEventListener("click", () => {
  addTask();
});

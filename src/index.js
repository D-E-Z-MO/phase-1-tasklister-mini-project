document.addEventListener("DOMContentLoaded", () => {
  //As a user, I should be able to type a task into the input field.
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo(e.target.new_task_description.value);
    form.reset();
  });
  function createToDo(todo) {
    //As a user, I expect to see the task string that I provided appear
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.addEventListener("click", handleDeleteTask);
    btn.textContent = " X";

    p.textContent = `${todo} `;
    //Input to DOM after the submit button has been activated.*/
    document.querySelector("#tasks").appendChild(p);
    //adding a delete button to task
    p.appendChild(btn);
  }
});
function handleDeleteTask(e) {
  e.target.parentNode.remove();
}

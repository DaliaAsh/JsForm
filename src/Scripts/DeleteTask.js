function deleteTask(id) {
  let tasks = localStorage.getItem("Tasks_Arr"); 
  if(tasks === null){
    return ; 
  }
  let tasksArray = JSON.parse(tasks); 
  let taskIndex = tasksArray.findIndex((task)=>{
    return task.id.toString() === id ; 
  });
  tasksArray.splice(taskIndex,1); 
  localStorage.setItem("Tasks_Arr", JSON.stringify(tasksArray));
  showTasks("Tasks_Arr");
}
let deleteButton = document.getElementById("Button--Delete");
deleteButton.addEventListener("click", function (event) {
  confirmDelete();
});
let cancleButton = document.getElementById("Button--Cancle");
cancleButton.addEventListener("click", function (event) {
  closeForm();
});

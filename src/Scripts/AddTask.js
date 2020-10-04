function appendItem() {
  let taskName = document.getElementById("task").value;
  let taskAssignee = document.getElementById("assignee").value;
  if (taskName.length === 0 || taskAssignee.length === 0) {
    $("#error__BOX").text("*Please Enter all fields");
    return;
  }
  $("#error__BOX").text("");
  let currentTasks;
  currentTasks = localStorage.getItem("Tasks_Arr");
  let taskId = Math.floor(Math.random() * 100000) ; 
  if (currentTasks === null) {
    let initialTask = { name: taskName, assignee: taskAssignee, id:'0'};
    let tasksArr = [];
    tasksArr.push(initialTask);
    localStorage.setItem("Tasks_Arr", JSON.stringify(tasksArr));
  } else {
    let currentTasksArr = JSON.parse(localStorage.getItem("Tasks_Arr"));
    let newTask = {
      name: taskName,
      assignee: taskAssignee,
      id: taskId,
    };
    currentTasksArr.push(newTask);
    localStorage.setItem("Tasks_Arr", JSON.stringify(currentTasksArr));
  }
  showTasks("Tasks_Arr");
}

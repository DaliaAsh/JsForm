function showTasks(tasks) {
  if (tasks === "Tasks_Arr") {
    let tasksString = localStorage.getItem("Tasks_Arr");
    if (tasksString === null) {
      return;
    }
    let tasksArr = JSON.parse(tasksString);
    let tasksHtml = "";
    tasksArr.map((task) => {
      tasksHtml += `<div class='tasks__task'>
     <div class='tasks__delete'>
     <input class='tasks__TaskSize' id='input${task.id}' oninput='editInline("${task.id}")' value = '${task.name}'>
    <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox("${task.id}")'></i>
    </div>
    <div class='tasks__assign'><input class='tasks__TaskSize' id='assignSpan${task.id}' oninput='editInline("${task.id}")'
     value = '${task.assignee}'>
   <i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick="done('${task.id}')" id='tick${task.id}'></i></div></div>`;
    });
    document.getElementById("tasks").innerHTML = tasksHtml;
  } else if (tasks === "Tasks_Search") {
    let foundTasks = localStorage.getItem("foundTasks");
    if (foundTasks === null) {
      return;
    }
    let foundTasksArr = JSON.parse(foundTasks);
    let foundTasksHtml = "";
    foundTasksArr.map((task) => {
      foundTasksHtml += `<div class='tasks__task'>
      <div class='tasks__delete'>
     <input class='tasks__TaskSize' id='input${task.id}' oninput='editInline("${task.id}")' value = '${task.name}'>
      <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox("${task.id}")'></i>
        </div><div class='tasks__assign'><input class='tasks__TaskSize' id='assignSpan${task.id}' oninput='editInline("${task.id}")'
         value = '${task.assignee}'>
      <i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick="done('${task.id}')" id='tick${task.id}'></i></div></div>`;
    });
    document.getElementById("tasks").innerHTML = foundTasksHtml;
  } else if (tasks === "Tasks_Done_Arr") {
    let doneTasks = localStorage.getItem("Tasks_Done_Arr");
    if (doneTasks === null) {
      document.getElementById("footer__doneTasks").innerHTML=""; 
      return;
    }
    let doneTasksArr = JSON.parse(doneTasks);
    let str = ""; 
    doneTasksArr.map((doneTask) => {
      str += `<div class='footer__task--done'>
      <div class='footer__firstRow'>
      <span class='footer__span footer__label'>Task:</span><span> 
        ${doneTask.name}
        </span></div><div> <span class='footer__span footer__label'>Assignee:</span><span>${
         doneTask.assignee
        }</span></div></div>`;
    });
    document.getElementById("footer__doneTasks").innerHTML = str;
  }
}
function preventDefault(event) {
  event.preventDefault();
}

$(document).ready(function () {
  $("#error__BOX").text("");
});

function showAll() {
  showTasks("Tasks_Arr");
  showTasks("Tasks_Done_Arr");
}

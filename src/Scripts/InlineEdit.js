function editInline(id) {
  let oldTasksArr = localStorage.getItem("Tasks_Arr");
  let json = JSON.parse(oldTasksArr);
  json[id].name = document.getElementById("input" + id).value;
  json[id].assignee = document.getElementById("assignSpan" + id).value;
  let newStr = JSON.stringify(json);
  localStorage.setItem("Tasks_Arr", newStr);
}
function closeEditMsg() {
  document.getElementById("Edit-Box-Success").style.display = "none";
  document.getElementById("tasks").style.opacity = "1";
  document.getElementById("search-bar").style.opacity = "1";
  document.getElementById("up-section").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";
}

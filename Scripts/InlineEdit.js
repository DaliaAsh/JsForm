function editInline(id) {
  let old_tasks_arr = localStorage.getItem("Tasks_Arr");
  let arr = old_tasks_arr.split(",");
  arr[id] = document.getElementById("input" + id).value;
  let next_id = Number(id) + 1;
  arr[next_id] = document.getElementById("assignSpan" + id).value;
  let newStr = arr.toString();
  localStorage.setItem("Tasks_Arr", newStr);
}
function closeEditMsg() {
  document.getElementById("Edit-Box-Success").style.display = "none";
  document.getElementById("Tasks").style.opacity = "1";
  document.getElementById("SearchBar").style.opacity = "1";
  document.getElementById("UpSection").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";
}

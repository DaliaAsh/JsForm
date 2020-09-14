function editInline(id) {
  let old_tasks_arr = localStorage.getItem("Tasks_Arr");
  let arr = old_tasks_arr.split(",");
  arr[id] = document.getElementById("span" + id).innerText;
  let next_id = Number(id) + 1;
  arr[next_id] = document.getElementById("assignSpan" + id).innerText;
  let newStr = arr.toString();
  localStorage.setItem("Tasks_Arr", newStr);
  showSuccessEdit();
}

function showSuccessEdit() {
  document.getElementById("Edit-Box-Success").style.display = "inline";
  document.getElementById("Tasks").style.opacity = "0.3";
  document.getElementById("SearchBar").style.opacity = "0.3";
  document.getElementById("UpSection").style.opacity = "0.3";
  document.getElementById("footer").style.opacity = "0.3";
}

function closeEditMsg() {
  document.getElementById("Edit-Box-Success").style.display = "none";
  document.getElementById("Tasks").style.opacity = "1";
  document.getElementById("SearchBar").style.opacity = "1";
  document.getElementById("UpSection").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";
}

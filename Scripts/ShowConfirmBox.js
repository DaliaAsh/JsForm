function showBox(task_name) {
  localStorage.setItem("item_to_delete", task_name);
  document.getElementById("Confirm-Box").style.display = "inline";
  document.getElementById("Confirm-Box").style.position = "fixed";
  document.getElementById("Confirm-Box").style.top = "20em";
  document.getElementById("Tasks").style.opacity = "0.3";
  document.getElementById("SearchBar").style.opacity = "0.3";
  document.getElementById("UpSection").style.opacity = "0.3";
  document.getElementById("footer").style.opacity = "0.3";
}
function closeForm() {
  document.getElementById("Confirm-Box").style.display = "none";
  document.getElementById("Tasks").style.opacity = "1";
  document.getElementById("SearchBar").style.opacity = "1";
  document.getElementById("UpSection").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";
}
function confirm_delete() {
  let item = localStorage.getItem("item_to_delete");
  deleteTask(item);
  closeForm();
}

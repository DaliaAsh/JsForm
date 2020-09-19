function showBox(task_name) {
  localStorage.setItem("item_to_delete", task_name);
  document.getElementById("Confirm-Box").style.display = "inline";
  document.getElementById("Confirm-Box").style.position = "fixed";
  document.getElementById("Confirm-Box").style.top = "20em";
}
function closeForm() {
  document.getElementById("Confirm-Box").style.display = "none";
}
function confirm_delete() {
  let item = localStorage.getItem("item_to_delete");
  deleteTask(item);
  closeForm();
}

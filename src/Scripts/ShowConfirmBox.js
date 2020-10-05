function showBox(id) {
  localStorage.setItem("item_to_delete", id);
  document.getElementById("confirm-box").style.display = "inline";
  document.getElementById("confirm-box").style.position = "fixed";
  document.getElementById("confirm-box").style.top = "20em";
  document.getElementById("form").style.opacity = "0.3";
  document.getElementById("search-bar").style.opacity = "0.3";
  document.getElementById("tasks").style.opacity = "0.3";
  document.getElementById("footer").style.opacity = "0.3";
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}
function closeForm() {
  document.getElementById("confirm-box").style.display = "none";
  document.getElementById("form").style.opacity = "1";
  document.getElementById("search-bar").style.opacity = "1";
  document.getElementById("tasks").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }
}
function confirmDelete() {
  let item = localStorage.getItem("item_to_delete");
  deleteTask(item);
  closeForm();
}

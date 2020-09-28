function deleteTask(id) {
  let arrStr = JSON.parse(localStorage.getItem("Tasks_Arr"));
  let keys = Object.keys(arrStr);
  let length = keys.length;
  for (let i = 0; i < length; i++) {
    if (keys[i] == id) {
      delete arrStr[id];
    }
  }
  localStorage.setItem("Tasks_Arr", JSON.stringify(arrStr));
  showItems();
}
let deleteButton = document.getElementById("Button--Delete");
deleteButton.addEventListener("click", function (event) {
  confirmDelete();
});
let cancleButton = document.getElementById("Button--Cancle");
cancleButton.addEventListener("click", function (event) {
  closeForm();
});

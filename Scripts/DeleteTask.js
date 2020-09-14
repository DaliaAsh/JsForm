function deleteTask(task_name) {
  let arr_str = localStorage.getItem("Tasks_Arr");
  let arr = arr_str.split(",");
  let index = arr.findIndex((item) => item === task_name);
  arr.splice(index, 2);
  localStorage.setItem("Tasks_Arr", arr);
  showItems();
}

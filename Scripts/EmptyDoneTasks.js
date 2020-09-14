function emptyDoneTasks() {
  localStorage.removeItem("done_tasks_arr");
  showDoneTasks();
}

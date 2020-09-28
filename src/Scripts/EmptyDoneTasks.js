function emptyDoneTasks() {
  localStorage.removeItem("doneTasks");
  showDoneTasks();
}

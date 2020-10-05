function emptyDoneTasks() {
  localStorage.removeItem("Tasks_Done_Arr");
  showTasks("Tasks_Done_Arr"); 
}

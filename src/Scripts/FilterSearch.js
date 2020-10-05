function filterSearch() {
  let searchInput = document.getElementById("search").value;
  if (searchInput.length === 0) {
    document.getElementById("X-Icon").style.display = "none";
  } else {
    document.getElementById("X-Icon").style.display = "inline";
  }
  let availableTasks = localStorage.getItem("Tasks_Arr") ; 
  if (searchInput === "") {
   showTasks("Tasks_Arr"); 
  } else if(availableTasks === null){
  return ; 
  }
    let availableTasksArray = JSON.parse(availableTasks);
    let filteredTasks = availableTasksArray.filter((task)=>{
return task.name.startsWith(searchInput)|| task.assignee.startsWith(searchInput)
    })
    localStorage.setItem("foundTasks", JSON.stringify(filteredTasks));
    showTasks("Tasks_Search"); 
  
}
document.getElementById("X-Icon").onclick = function (event) {
  document.getElementById("search").value = "";
  document.getElementById("X-Icon").style.display = "none";
  showTasks("Tasks_Arr"); 
};

function done(key) {
  let doneTasks = localStorage.getItem("Tasks_Done_Arr"); 
  let availableTasks = localStorage.getItem("Tasks_Arr"); 
  if(availableTasks === null){
    return ;
  }
  let availableTasksArr = JSON.parse(availableTasks); 
  let task = availableTasksArr.find((task)=>{
    return task.id.toString() === key ; 
  }); 
  let doneTasksArr  = [] ;  
  if(doneTasks === null){
    doneTasksArr.push(task); 
  }else{
    doneTasksArr = JSON.parse(doneTasks); 
    doneTasksArr.push(task); 
  }
  localStorage.setItem("Tasks_Done_Arr", JSON.stringify(doneTasksArr)); 
  deleteTask(key); 
  showTasks("Tasks_Done_Arr"); 
  
}

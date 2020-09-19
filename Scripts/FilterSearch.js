function FilterSearch(count, result) {
  let resultArrString = [];
  let str_tasks = localStorage.getItem("Tasks_Arr");
  let tasks_Arr = str_tasks.split(",");
  result.map((item) => {
    if (item % 2 === 0) {
      resultArrString.push(
        "<p>The following task has been found : " +
          tasks_Arr[item] +
          "</p><p>It is the number " +
          Number(item + 1) +
          " in the task's list</p>The Assignee for " +
          tasks_Arr[item] +
          " is : " +
          tasks_Arr[item + 1]
      );
    } else {
      resultArrString.push(
        "<p>The following Assignee has been found : " +
          tasks_Arr[item] +
          "</p><p>It is the number " +
          Number(item + 1) +
          " in the task's list</p>The task for " +
          item +
          " is :" +
          tasks_Arr[item - 1]
      );
    }
  });
  return resultArrString;
}

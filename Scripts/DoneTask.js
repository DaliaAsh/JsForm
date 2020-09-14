function done(task_name, tick_id) {
  let str = "";
  let arr_str = localStorage.getItem("Tasks_Arr");
  let arr = arr_str.split(",");
  let index = arr.indexOf(task_name);
  let asignee = arr[index + 1];
  appendToDoneTasks(task_name, asignee);
  arr.splice(index, 2);
  localStorage.setItem("Tasks_Arr", arr);
  showItems();
}
function appendToDoneTasks(task_name, Assignee) {
  let str = localStorage.getItem("done_tasks_arr");
  if (str != null && str.length !== 0) {
    let done_arr = str.split(",");
    done_arr.push(task_name, Assignee);
    localStorage.setItem("done_tasks_arr", done_arr);
  } else {
    let initialArr = [];
    initialArr.push(task_name, Assignee);
    localStorage.setItem("done_tasks_arr", initialArr);
  }
}
function showDoneTasks() {
  let done_arr = [];
  let done_str = localStorage.getItem("done_tasks_arr");
  if (done_str != null && done_str.length !== 0) {
    done_arr = done_str.split(",");
    done_arr.map((item) => {
      item === "" ? arr.splice(arr.indexOf(item), 1) : false;
    });
    let str = "";

    for (let i = 0; i < done_arr.length; i += 2) {
      str += "<div class='footer__task--done'>";
      str += "<div class='footer__firstRow'>";
      str +=
        " <span class='footer__span footer__label'>Task:</span><span>" +
        done_arr[i] +
        "</span>";
      str +=
        "</div><div> <span class='footer__span footer__label'>Assignee:</span><span>" +
        done_arr[i + 1] +
        "</span></div></div>";
    }

    document.getElementById("footer__doneTasks").innerHTML = str;
  } else {
    document.getElementById("footer__doneTasks").innerHTML = "";
  }
}

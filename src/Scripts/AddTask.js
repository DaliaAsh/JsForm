function appendItem() {
  let taskName = document.getElementById("task").value;
  let taskAssignee = document.getElementById("assignee").value;
  let keys;
  let newKey;
  let newObject;
  let arrStr;
  let str;
  if (taskName.length !== 0 && taskAssignee.length !== 0) {
    $("#error__BOX").text("");
    str = localStorage.getItem("Tasks_Arr");
    if (str !== null && str.length !== 0) {
      arrStr = JSON.parse(str);
      keys = Object.keys(arrStr);
      newKey = keys.length;
      newObject = { name: taskName, assignee: taskAssignee };
      arrStr[newKey] = newObject;
      localStorage.setItem("Tasks_Arr", JSON.stringify(arrStr));
      showItems();
    } else {
      let initial = {};
      initial[0] = { name: taskName, assignee: taskAssignee };
      localStorage.setItem("Tasks_Arr", JSON.stringify(initial));
      showItems();
      console.table(initial);
    }
  } else {
    $("#error__BOX").text("*Please Enter all fields");
  }
}
function showItems() {
  let arrStr = localStorage.getItem("Tasks_Arr");
  if (arrStr != null && arrStr.length !== 0) {
    let json = JSON.parse(arrStr);
    let keys = Object.keys(json);
    let length = Object.keys(json).length;
    let str = "";
    for (let i = 0; i < length; i++) {
      str += `<div class='tasks__task'>`;
      str += `<div class='tasks__delete'>`;
      str += `  <input class='tasks__TaskSize' id='input${
        keys[i]
      }' oninput='editInline("${keys[i]}")' value = '${json[keys[i]].name}'>`;
      str += `  <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox("${keys[i]}")'></i>`;
      str += `  </div><div class='tasks__assign'><input class='tasks__TaskSize' id='assignSpan${
        keys[i]
      }' oninput='editInline("${keys[i]}")'
         value = '${json[keys[i]].assignee}'>`;
      str += `<i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick="done('${
        keys[i]
      }','${json[keys[i]].name}','${json[keys[i]].assignee}')" id='tick${
        keys[i]
      }'></i></div></div>`;
    }
    document.getElementById("tasks").innerHTML = str;
  } else {
    document.getElementById("tasks").innerHTML = "";
  }
  showDoneTasks();
}
function preventDefault(event) {
  event.preventDefault();
}
$(document).ready(function () {
  $("#error__BOX").text("");
});

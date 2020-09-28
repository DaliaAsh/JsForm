function done(key, taskName, taskAssignee) {
  let json;
  let keys;
  let length;
  let newItem = {};
  let str = localStorage.getItem("doneTasks");
  if (str != null && str.length !== 0) {
    json = JSON.parse(localStorage.getItem("doneTasks"));
    keys = Object.keys(json);
    length = keys.length;
    newItem = { name: taskName, assignee: taskAssignee };
    json[length] = newItem;
    localStorage.setItem("doneTasks", JSON.stringify(json));
    deleteTask(key);
  } else {
    let initial = {};
    initial[0] = { name: taskName, assignee: taskAssignee };
    localStorage.setItem("doneTasks", JSON.stringify(initial));
    deleteTask(key);
  }
  showDoneTasks();
}
function showDoneTasks() {
  let doneStr;
  let json;
  let keys;
  doneStr = localStorage.getItem("doneTasks");
  if (doneStr != null && doneStr.length !== 0) {
    json = JSON.parse(doneStr);
    keys = Object.keys(json);
    let str = "";
    for (let i = 0; i < keys.length; i++) {
      str += `<div class='footer__task--done'>`;
      str += `<div class='footer__firstRow'>`;
      str += `<span class='footer__span footer__label'>Task:</span><span> 
        ${json[keys[i]].name}
        </span>`;
      str += `</div><div> <span class='footer__span footer__label'>Assignee:</span><span>${
        json[keys[i]].assignee
      }</span></div></div>`;
    }

    document.getElementById("footer__doneTasks").innerHTML = str;
  } else {
    document.getElementById("footer__doneTasks").innerHTML = "";
  }
}

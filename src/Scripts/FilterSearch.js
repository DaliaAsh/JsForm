function filterSearch() {
  let value = document.getElementById("search").value;
  if (value.length !== 0) {
    document.getElementById("X-Icon").style.display = "inline";
  } else {
    document.getElementById("X-Icon").style.display = "none";
  }
  let toBeFound = document.getElementById("search").value;
  let json;
  let keys;
  let length;
  let foundObjects = {};
  let arrStr = localStorage.getItem("Tasks_Arr");
  let found = false;
  if (toBeFound === "") {
    showItems();
  } else if (arrStr != null && arrStr.length !== 0) {
    let regularExpression;
    let regularExpressionAssignee;
    json = JSON.parse(arrStr);
    keys = Object.keys(json);
    length = keys.length;
    for (let i = 0; i < length; i++) {
      regularExpression = new RegExp("^" + toBeFound);
      regularExpressionAssignee = new RegExp("^" + toBeFound);
      if (
        json[keys[i]].name === toBeFound ||
        json[keys[i]].assignee === toBeFound ||
        regularExpression.test(json[keys[i]].name) ||
        regularExpressionAssignee.test(json[keys[i]].assignee)
      ) {
        found = true;
        foundObjects[keys[i]] = {
          name: json[keys[i]].name,
          assignee: json[keys[i]].assignee,
        };
        localStorage.setItem("foundObjects", JSON.stringify(foundObjects));
        showFoundObjects();
      }
    }
    if (!found) {
      document.getElementById("tasks").innerHTML = "";
    }
  }
}
function showFoundObjects() {
  let foundObjects = localStorage.getItem("foundObjects");
  let json;
  if (foundObjects != null) {
    json = JSON.parse(foundObjects);
    let keys = Object.keys(json);
    let length = keys.length;
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
  }
}
document.getElementById("X-Icon").onclick = function (event) {
  document.getElementById("search").value = "";
  document.getElementById("X-Icon").style.display = "none";
  showItems();
};

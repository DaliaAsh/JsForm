function Add(task_name, task_Assignee, document) {
  appendItem(task_name, task_Assignee);
  showItems();
}

function appendItem(task_name, task_Assignee) {
  if (task_name.length === 0 || task_Assignee.length === 0) {
    showErrorBox();
  } else {
    let str = localStorage.getItem("Tasks_Arr");
    if (str !== null && str.length !== 0) {
      let arr = str.split(",");
      console.log(arr);
      arr.map((item) => {
        item === "" ? arr.splice(arr.indexOf(item), 1) : false;
      });
      arr.push(task_name, task_Assignee);
      localStorage.setItem("Tasks_Arr", arr);
    } else {
      let initial = [task_name, task_Assignee];
      localStorage.setItem("Tasks_Arr", initial);
    }
  }
}

function showItems() {
  let arr_str = localStorage.getItem("Tasks_Arr");
  if (arr_str != null && arr_str.length !== 0) {
    let arr = arr_str.split(",");
    let str = "";

    for (let i = 0; i < arr.length; i += 2) {
      str += "<div class='Tasks__task'>";
      str +=
        "<div class='Tasks__Edit'><i class='fa fa-pencil-square-o fa-2x edit-icon' aria-hidden='true' onclick='editInline(\"" +
        i +
        '"' +
        ")'></i><span class='Tasks__submitEdit'>Submit the edit</span></div>";
      str += "<div class='Tasks__delete'>";
      str +=
        " <span class='Tasks__TaskSize' contenteditable id='span" +
        i +
        "'>" +
        arr[i] +
        "</span>";
      str +=
        " <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox(" +
        '"' +
        arr[i] +
        '"' +
        ")'></i>";
      str +=
        "</div><div class='Tasks__assign'><span class='Tasks__TaskSize' contenteditable id='assignSpan" +
        i +
        "'>";
      str +=
        arr[i + 1] +
        "</span><i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick='done(" +
        '"' +
        arr[i] +
        '"' +
        ',"tick' +
        i +
        "\")' id='tick" +
        i +
        "'></i></div></div>";
    }
    console.log(str);
    document.getElementById("Tasks").innerHTML = str;
  } else {
    document.getElementById("Tasks").innerHTML = "";
  }
  showDoneTasks();
}

function showErrorBox() {
  document.getElementById("Error-Box").style.display = "inline";
  document.getElementById("Error-Box").style.position = "fixed";
  document.getElementById("Error-Box").style.top = "40%";
  document.getElementById("Tasks").style.opacity = "0.3";
  document.getElementById("SearchBar").style.opacity = "0.3";
  document.getElementById("UpSection").style.opacity = "0.3";
  document.getElementById("footer").style.opacity = "0.3";
}
function closeErrorBox() {
  document.getElementById("Error-Box").style.display = "none";
  document.getElementById("Tasks").style.opacity = "1";
  document.getElementById("SearchBar").style.opacity = "1";
  document.getElementById("UpSection").style.opacity = "1";
  document.getElementById("footer").style.opacity = "1";
}

function appendItem() {
  let task_name = document.getElementById("task").value;
  let task_Assignee = document.getElementById("assignee").value;
  if (task_name.length !== 0 && task_Assignee.length !== 0) {
    $("#Error__BOX").text("");
    let str = localStorage.getItem("Tasks_Arr");
    if (str !== null && str.length !== 0) {
      let arr = str.split(",");
      console.log(arr);
      arr.map((item) => {
        item === "" ? arr.splice(arr.indexOf(item), 1) : false;
      });
      arr.push(task_name, task_Assignee);
      localStorage.setItem("Tasks_Arr", arr);
      showItems();
    } else {
      let initial = [task_name, task_Assignee];
      localStorage.setItem("Tasks_Arr", initial);
      showItems();
    }
  } else {
    $("#Error__BOX").text("*Please Enter all fields");
  }
}
function showItems() {
  let arr_str = localStorage.getItem("Tasks_Arr");
  if (arr_str != null && arr_str.length !== 0) {
    let arr = arr_str.split(",");
    let str = "";

    for (let i = 0; i < arr.length; i += 2) {
      str += "<div class='Tasks__task'>";
      str += "<div class='Tasks__delete'>";
      str +=
        " <input class='Tasks__TaskSize' id='input" +
        i +
        "' oninput='editInline(`" +
        i +
        "`)'" +
        " value = '" +
        arr[i] +
        "'>";
      str +=
        " <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox(" +
        '"' +
        arr[i] +
        '"' +
        ")'></i>";
      str +=
        "</div><div class='Tasks__assign'><input class='Tasks__TaskSize' id='assignSpan" +
        i +
        "' oninput='editInline(`" +
        i +
        "`)'" +
        " value = '" +
        arr[i + 1] +
        "'>";
      str +=
        "<i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick='done(" +
        '"' +
        arr[i] +
        '"' +
        ',"tick' +
        i +
        "\")' id='tick" +
        i +
        "'></i></div></div>";
    }
    document.getElementById("Tasks").innerHTML = str;
  } else {
    document.getElementById("Tasks").innerHTML = "";
  }
  showDoneTasks();
}
$(document).raedy(function () {
  $("#Error__BOX").text("");
});

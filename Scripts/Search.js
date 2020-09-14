function serach(item) {
  let str = localStorage.getItem("Tasks_Arr");
  let arr = str.split(",");
  let count = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      result.push(i);
      count++;
    }
  }

  showBox__Search(count, result);
}
function showBox__Search(numOfItems, result) {
  let arr = [];
  arr = result;
  let tasks_assignees = [];
  let tasks_str = localStorage.getItem("Tasks_Arr");
  let tasks_Arr = tasks_str.split(",");
  arr.map((item) => {
    tasks_assignees.push(
      tasks_Arr[parseInt(item)],
      tasks_Arr[parseInt(item) + 1]
    );
  });
  document.getElementById("Search-Box").style.display = "inline";
  document.getElementById("Search-Box").style.position = "fixed";
  document.getElementById("Search-Box").style.top = "15em";
  document.getElementById("Tasks").style.opacity = "0.3";
  document.getElementById("SearchBar").style.opacity = "0.3";
  document.getElementById("UpSection").style.opacity = "0.3";
  document.getElementById("Search-Box__statment").innerText =
    "Your search is done\n\nNumber of items found: " + numOfItems;
}
function closeSearchBox() {
  document.getElementById("Search-Box").style.display = "none";
  document.getElementById("Tasks").style.opacity = "1";
  document.getElementById("SearchBar").style.opacity = "1";
  document.getElementById("UpSection").style.opacity = "1";
}
function emptySearchField() {
  document.getElementById("Search").value = "";
}

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
  let SearchArr = FilterSearch(count, result);
  showBox__Search(SearchArr);
}
function showBox__Search(SearchResult) {
  let str_Search =
    "<div class='Search-Box__UpBox'><h1 class='Search-Box__header'>Your Search is Done</h1><i class='fa fa-times fa-3x Search-Box--close' aria-hidden='true' onclick='closeSearchBox()'></i></div>";
  document.getElementById("Search-Box").style.display = "inline";
  SearchResult.map((str) => {
    str_Search += "<div class='Search-Box__style'>" + str + "</div>";
  });
  if (SearchResult.length > 0) {
    document.getElementById("Search-Box").style.width = "44em";
    document.getElementById("Search-Box").style.height = "20em";
    document.getElementById("Search-Box__statment").innerHTML = str_Search;
  } else {
    document.getElementById("Search-Box").style.width = "25em";
    document.getElementById("Search-Box").style.height = "15em";
    document.getElementById("Search-Box__statment").innerHTML =
      str_Search + "<p class='no-result'><b>Their is no matching items.<b></p>";
  }
}
function closeSearchBox() {
  document.getElementById("Search-Box").style.display = "none";
  document.getElementById("Tasks").style.opacity = "1";
  document.getElementById("SearchBar").style.opacity = "1";
  document.getElementById("UpSection").style.opacity = "1";
}

$(document).ready(function () {
  $("#X-Icon").click(function () {
    $("#Search").val("");
    $("#X-Icon").css("display", "none");
  });

  $("#Search").focus(function () {
    $("#X-Icon").css("display", "inline");
  });
  $("#X-Icon").css("display", "none");
});

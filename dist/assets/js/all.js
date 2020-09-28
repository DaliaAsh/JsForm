function appendItem() {
  let e,
    t,
    n,
    s,
    l,
    a = document.getElementById("task").value,
    o = document.getElementById("assignee").value;
  if (0 !== a.length && 0 !== o.length)
    if (
      ($("#error__BOX").text(""),
      (l = localStorage.getItem("Tasks_Arr")),
      null !== l && 0 !== l.length)
    )
      (s = JSON.parse(l)),
        (e = Object.keys(s)),
        (t = e.length),
        (n = { name: a, assignee: o }),
        (s[t] = n),
        localStorage.setItem("Tasks_Arr", JSON.stringify(s)),
        showItems();
    else {
      let e = {};
      (e[0] = { name: a, assignee: o }),
        localStorage.setItem("Tasks_Arr", JSON.stringify(e)),
        showItems(),
        console.table(e);
    }
  else $("#error__BOX").text("*Please Enter all fields");
}
function showItems() {
  let e = localStorage.getItem("Tasks_Arr");
  if (null != e && 0 !== e.length) {
    let t = JSON.parse(e),
      n = Object.keys(t),
      s = Object.keys(t).length,
      l = "";
    for (let e = 0; e < s; e++)
      (l += "<div class='tasks__task'>"),
        (l += "<div class='tasks__delete'>"),
        (l += `  <input class='tasks__TaskSize' id='input${
          n[e]
        }' oninput='editInline("${n[e]}")' value = '${t[n[e]].name}'>`),
        (l += `  <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox("${n[e]}")'></i>`),
        (l += `  </div><div class='tasks__assign'><input class='tasks__TaskSize' id='assignSpan${
          n[e]
        }' oninput='editInline("${n[e]}")'\n         value = '${
          t[n[e]].assignee
        }'>`),
        (l += `<i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick="done('${
          n[e]
        }','${t[n[e]].name}','${t[n[e]].assignee}')" id='tick${
          n[e]
        }'></i></div></div>`);
    document.getElementById("tasks").innerHTML = l;
  } else document.getElementById("tasks").innerHTML = "";
  showDoneTasks();
}
function preventDefault(e) {
  e.preventDefault();
}
function deleteTask(e) {
  let t = JSON.parse(localStorage.getItem("Tasks_Arr")),
    n = Object.keys(t),
    s = n.length;
  for (let l = 0; l < s; l++) n[l] == e && delete t[e];
  localStorage.setItem("Tasks_Arr", JSON.stringify(t)), showItems();
}
$(document).ready(function () {
  $("#error__BOX").text("");
});
let deleteButton = document.getElementById("Button--Delete");
deleteButton.addEventListener("click", function (e) {
  confirmDelete();
});
let cancleButton = document.getElementById("Button--Cancle");
function done(e, t, n) {
  let s,
    l,
    a,
    o = {},
    i = localStorage.getItem("doneTasks");
  if (null != i && 0 !== i.length)
    (s = JSON.parse(localStorage.getItem("doneTasks"))),
      (l = Object.keys(s)),
      (a = l.length),
      (o = { name: t, assignee: n }),
      (s[a] = o),
      localStorage.setItem("doneTasks", JSON.stringify(s)),
      deleteTask(e);
  else {
    let s = {};
    (s[0] = { name: t, assignee: n }),
      localStorage.setItem("doneTasks", JSON.stringify(s)),
      deleteTask(e);
  }
  showDoneTasks();
}
function showDoneTasks() {
  let e, t, n;
  if (((e = localStorage.getItem("doneTasks")), null != e && 0 !== e.length)) {
    (t = JSON.parse(e)), (n = Object.keys(t));
    let s = "";
    for (let e = 0; e < n.length; e++)
      (s += "<div class='footer__task--done'>"),
        (s += "<div class='footer__firstRow'>"),
        (s += `<span class='footer__span footer__label'>Task:</span><span> \n        ${
          t[n[e]].name
        }\n        </span>`),
        (s += `</div><div> <span class='footer__span footer__label'>Assignee:</span><span>${
          t[n[e]].assignee
        }</span></div></div>`);
    document.getElementById("footer__doneTasks").innerHTML = s;
  } else document.getElementById("footer__doneTasks").innerHTML = "";
}
function emptyDoneTasks() {
  localStorage.removeItem("doneTasks"), showDoneTasks();
}
function filterSearch() {
  0 !== document.getElementById("search").value.length
    ? (document.getElementById("X-Icon").style.display = "inline")
    : (document.getElementById("X-Icon").style.display = "none");
  let e,
    t,
    n,
    s = document.getElementById("search").value,
    l = {},
    a = localStorage.getItem("Tasks_Arr"),
    o = !1;
  if ("" === s) showItems();
  else if (null != a && 0 !== a.length) {
    let i, c;
    (e = JSON.parse(a)), (t = Object.keys(e)), (n = t.length);
    for (let a = 0; a < n; a++)
      (i = new RegExp("^" + s)),
        (c = new RegExp("^" + s)),
        (e[t[a]].name === s ||
          e[t[a]].assignee === s ||
          i.test(e[t[a]].name) ||
          c.test(e[t[a]].assignee)) &&
          ((o = !0),
          (l[t[a]] = { name: e[t[a]].name, assignee: e[t[a]].assignee }),
          localStorage.setItem("foundObjects", JSON.stringify(l)),
          showFoundObjects());
    o || (document.getElementById("tasks").innerHTML = "");
  }
}
function showFoundObjects() {
  let e,
    t = localStorage.getItem("foundObjects");
  if (null != t) {
    e = JSON.parse(t);
    let n = Object.keys(e),
      s = n.length,
      l = "";
    for (let t = 0; t < s; t++)
      (l += "<div class='tasks__task'>"),
        (l += "<div class='tasks__delete'>"),
        (l += `  <input class='tasks__TaskSize' id='input${
          n[t]
        }' oninput='editInline("${n[t]}")' value = '${e[n[t]].name}'>`),
        (l += `  <i class='fa fa-trash fa-2x trash-icon' aria-hidden='true' onclick='showBox("${n[t]}")'></i>`),
        (l += `  </div><div class='tasks__assign'><input class='tasks__TaskSize' id='assignSpan${
          n[t]
        }' oninput='editInline("${n[t]}")'\n         value = '${
          e[n[t]].assignee
        }'>`),
        (l += `<i class='fa fa-check-circle fa-2x tick-icon' aria-hidden='true' onclick="done('${
          n[t]
        }','${e[n[t]].name}','${e[n[t]].assignee}')" id='tick${
          n[t]
        }'></i></div></div>`);
    document.getElementById("tasks").innerHTML = l;
  }
}
function editInline(e) {
  let t = localStorage.getItem("Tasks_Arr"),
    n = JSON.parse(t);
  (n[e].name = document.getElementById("input" + e).value),
    (n[e].assignee = document.getElementById("assignSpan" + e).value);
  let s = JSON.stringify(n);
  localStorage.setItem("Tasks_Arr", s);
}
function closeEditMsg() {
  (document.getElementById("Edit-Box-Success").style.display = "none"),
    (document.getElementById("tasks").style.opacity = "1"),
    (document.getElementById("search-bar").style.opacity = "1"),
    (document.getElementById("up-section").style.opacity = "1"),
    (document.getElementById("footer").style.opacity = "1");
}
function showBox(e) {
  localStorage.setItem("item_to_delete", e),
    (document.getElementById("confirm-box").style.display = "inline"),
    (document.getElementById("confirm-box").style.position = "fixed"),
    (document.getElementById("confirm-box").style.top = "20em"),
    (document.getElementById("form").style.opacity = "0.3"),
    (document.getElementById("search-bar").style.opacity = "0.3"),
    (document.getElementById("tasks").style.opacity = "0.3"),
    (document.getElementById("footer").style.opacity = "0.3");
  let t = document.querySelectorAll("input");
  for (let e = 0; e < t.length; e++) t[e].disabled = !0;
}
function closeForm() {
  (document.getElementById("confirm-box").style.display = "none"),
    (document.getElementById("form").style.opacity = "1"),
    (document.getElementById("search-bar").style.opacity = "1"),
    (document.getElementById("tasks").style.opacity = "1"),
    (document.getElementById("footer").style.opacity = "1");
  let e = document.querySelectorAll("input");
  for (let t = 0; t < e.length; t++) e[t].disabled = !1;
}
function confirmDelete() {
  deleteTask(localStorage.getItem("item_to_delete")), closeForm();
}
cancleButton.addEventListener("click", function (e) {
  closeForm();
}),
  (document.getElementById("X-Icon").onclick = function (e) {
    (document.getElementById("search").value = ""),
      (document.getElementById("X-Icon").style.display = "none"),
      showItems();
  });
//# sourceMappingURL=all.js.map

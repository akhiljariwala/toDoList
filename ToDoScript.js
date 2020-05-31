var toDoForm = document.querySelector("form");
var toDoList = document.getElementById("toDoList");
var clearButton = document.getElementById("clearButton");
var input = document.getElementById("user-to-do");
var toDosStorageKey = "todos";

var toDosArray = localStorage.getItem(toDosStorageKey) ? JSON.parse(localStorage.getItem(toDosStorageKey)) : [];

var toDoMaker = function(text) {
    var toDo = document.createElement("li");
    toDo.textContent = text;
    toDoList.appendChild(toDo);
}

var clearAll = function() {
    while(toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    toDosArray = [];
    localStorage.clear();
}

toDoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    toDoMaker(input.value);
    toDosArray.push(input.value);
    localStorage.setItem(toDosStorageKey, JSON.stringify(toDosArray));
    input.value = '';
});

clearButton.addEventListener("click", function(c) {
    c.preventDefault();
    clearAll();
});

for (var i = 0; i < toDosArray.length; i++) {
    toDoMaker(toDosArray[i]);
}
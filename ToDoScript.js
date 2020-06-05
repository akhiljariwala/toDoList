// Grabs important document objects
var toDoForm = document.querySelector("form");
var toDoList = document.getElementById("toDoList");
var clearButton = document.getElementById("clearButton");
var input = document.getElementById("user-to-do");
var toDosStorageKey = "todos";

// Fetches the to do list from local storage.
// If there are items, parse them from browser in JSON. If not, create a new list.
var toDosArray = localStorage.getItem(toDosStorageKey) ? JSON.parse(localStorage.getItem(toDosStorageKey)) : [];

// This function creates a new to do item using provided text
var toDoMaker = function(text) {
    var toDo = document.createElement("li");
    toDo.textContent = text;
    toDoList.appendChild(toDo);
}

// Clears all the to dos in local storage and in the toDosArray
var clearAll = function() {
    while(toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    toDosArray = [];
    localStorage.clear();
}

// Creates a fun new background color each time a to do is submitted
var newBackground = function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

// Updates the webpage with the new added to do item
toDoForm.addEventListener("submit", function(e) {
    // Ensure form doesn't refresh each time the submit button is clicked
    e.preventDefault();
    // Converts input text into a to do list item
    toDoMaker(input.value);
    // Generates a new background
    newBackground();
    // Updates to do array with new text item
    toDosArray.push(input.value);
    // Updates new to do array item into local storage
    localStorage.setItem(toDosStorageKey, JSON.stringify(toDosArray));
    // Clears to do input text
    input.value = '';
});

// Clears the list of to dos when the clear button is clicked
clearButton.addEventListener("click", function(c) {
    c.preventDefault();
    clearAll();
});

// Populates the webpage with the list of to dos on load and refresh
for (var i = 0; i < toDosArray.length; i++) {
    toDoMaker(toDosArray[i]);
}
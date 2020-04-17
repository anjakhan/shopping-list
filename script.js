var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	delButton.textContent = "x";
	delButton.setAttribute("class", "delete");
	
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delButton);
	ul.appendChild(li);
	input.value = "";

	li.addEventListener("click", function() {
		if (li.classList) {
			li.classList.toggle("done");
		}
	});

	delButton.addEventListener("click", function() {
		li.parentNode.removeChild(li);
	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for (var i=0; i<item.length;i++) {
	item[i].addEventListener("click", toggleListItem);
}

function toggleListItem() {
	this.classList.toggle("done");
}

for (var i=0; i<deleteButton.length;i++) {
	deleteButton[i].addEventListener("click", deleteItem);
}

function deleteItem() {
	this.parentNode.parentNode.removeChild(this.parentNode);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

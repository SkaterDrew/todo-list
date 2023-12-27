var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var i = 0;

function inputLength() {
	return input.value.length;
}


//this function return the image file that is not already there
function imgToggle(element) {
	let initialImg = element.children[0].src;
	let srcTest = initialImg.includes("img/not_done.png");
	let newImg = {
		"true":"img/done.png",
		"false":"img/not_done.png"
	}[srcTest];
	return newImg;
}

function createEventToggle(a) {
	var item = document.getElementById("item-index-"+a);

	//toggle the strikethrough and checkmark
	item.addEventListener("click", function () {
			this.classList.toggle("done");
			this.children[0].src = imgToggle(this);
		}
	);
}

function createEventDelete(a) {
	let deleteButton = document.getElementsByClassName("list-item")[a].children[1];
	deleteButton.addEventListener("click", function () {
		this.parentElement.remove();
	});
}


function createListElement() {
	//add list element
	var li = document.createElement("li");
	li.classList.add("list-item", "txt");

	//add item with empty circle
	var newItem = document.createElement("button");
	newItem.classList.add("item-text", "txt")
	newItem.setAttribute("id","item-index-"+i);
	var img = document.createElement("img");
	img.src = "img/not_done.png";
	img.classList.add("item-circle");
	newItem.appendChild(img);
	newItem.appendChild(document.createTextNode(" " + input.value));
	li.appendChild(newItem);

	//add delete button
	var del = document.createElement("button");
	del.classList.add("delete", "txt");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);

	//add list element to list
	ul.appendChild(li);

	createEventToggle(i);
	createEventDelete(i);

	//reset input field
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		i++;
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		i++;
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



var boxes = [];
var counter = 0;



function init() {
	var generateButton = document.getElementById("generateButton");
	generateButton.onclick = generate;

	var clearButton = document.getElementById("clearButton");
	clearButton.onclick = clear;
}

function Box(name, color, x, y) {
	this.id = counter;
	this.name = name;
	this.color = color;
	this.x = x;
	this.y = y;
}

function generate() {
	var num = 0;
	var numInput = document.getElementsByName("amount");
	
	if(numInput[0].checked){
		num = 5;
		console.log("5 selected");
	}
	else if(numInput[1].checked){
		num = 10;
		console.log("10 selected");

	}
	else if(numInput[2].checked){
		num = 15;
		console.log("15 selected");

	}
	else {
		alert("Please choose how many boxes to generate!");
		return false;
	}

	var nameInput = document.getElementById("name");
	var name = nameInput.value;
	console.log(name);

	var colorInput = document.getElementById("color");
	var colorOption = colorInput.options[colorInput.selectedIndex];
	var color = colorOption.value;
	console.log(color);

	
	for(var i = 0; i < num; i++){
		var sceneDiv = document.getElementById("scene");

		var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));;
		var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));

		var box = new Box(name, color, x, y);

		boxes[counter] = box;
		addBox(box);

		counter++;
		

	}
	var form  = document.getElementById("data");
	form.reset();

	
}
function addBox(box) {
	console.log("Adding box #" + box.id + ". Name: " + box.name + ", Color: " + box.color + ", Pos: (" + box.x + "," + box.y + ")"); 


	var sceneDiv = document.getElementById("scene");

	var div = document.createElement("div");
	div.setAttribute("class", "box");
	div.id = box.id;
	div.style.backgroundColor = box.color;
	div.style.left = box.x+"px";
	div.style.top = box.y+"px";
	div.innerHTML = box.name;
	
	div.onclick = display;

	sceneDiv.appendChild(div);
}


function clear() {
	var sceneDiv = document.getElementById("scene");
	while(sceneDiv.firstChild){
		sceneDiv.removeChild(sceneDiv.firstChild);
	}
	counter = 0;
}

function display(e) {
	var clicked = e.target;
	var id = parseInt(clicked.id);
	var box = boxes[id];
	var message = "";
	message += "You clicked on box #" + box.id + ".\n";
	message += "Name: " + box.name + "\n";
	message += "Color: " + box.color + "\n";
	message += "Position: (" + box.x + ", " + box.y + ")";
	alert(message);
}

window.onload = init;

document.addEventListener("DOMContentLoaded", function() {
	var start_button = document.getElementById('start_button');
	start_button.addEventListener('click', function() {
		start_session();
	});
	var add_button = document.getElementById('add_button');
	add_button.addEventListener('click', function() {
		add_input();
	});
});

function start_session() {
	//window.alert("Get studying!");
	//window.close();
	chrome.runtime.sendMessage({time: "hi"});
}

function add_input() {
	var input = document.createElement("input");
	input.type="text";
	var container = document.getElementById("container");
	container.appendChild(input);  
	container.appendChild(document.createElement("br"));
}
// Event listeners for clicking the two buttons
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

// Starts the session (close prompt window, start timer,
// tells background to initialize blocked sites)
function start_session() {
	window.alert("Get studying!");
	window.close();
	var list = []
	document.getElementsByName('site').forEach(function (site) {
		if (site.value.localeCompare("") != 0) {
			url_1 = "https://www." + site.value;
			url_2 = "https://" + site.value;
			url_3 = site.value;
			list.push(url_1);
			list.push(url_2);
			list.push(url_3);
		}
	});
	chrome.runtime.sendMessage({message: "start session",
		time: document.getElementById('time').value, 
		sites: list});
}

// Create new blank for website input
function add_input() {
	var input = document.createElement("input");
	input.type="text";
	input.name="site"
	var container = document.getElementById("container");
	container.appendChild(document.createElement("br"));
	container.appendChild(input);  
	container.appendChild(document.createElement("br"));
}
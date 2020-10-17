document.addEventListener("DOMContentLoaded", function() {
	var Button = document.getElementById('button');
	Button.addEventListener('click', function() {
		onClick();
	});
});

function onClick() {
	//var time = window.prompt("Length of Session (in minutes): ");
	window.open("inputs.html")
}
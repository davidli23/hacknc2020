document.addEventListener("DOMContentLoaded", function() {
	var Button = document.getElementById('button');
	Button.addEventListener('click', function() {
		onClick();
	});
});

function onClick() {
	window.open("inputs.html");
}
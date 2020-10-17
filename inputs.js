document.addEventListener("DOMContentLoaded", function() {
	var Button = document.getElementById('input_button');
	Button.addEventListener('click', function() {
		start_session();
	});
});

function start_session() {
	window.alert("hello");
}
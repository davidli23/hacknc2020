document.addEventListener('DOMCOntentLoaded', function () {
	document.querySelector('button').addEventListener('click', onclick, false)

	function onclick() {
		var input = window.prompt("Enter name: ");
		alert(input);
	}
}, false)

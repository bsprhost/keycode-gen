
const mainPanel = document.getElementById("main-panel");
const kCode = document.getElementById("k-code");
const kKey = document.getElementById("k-key");
const kWhich = document.getElementById("k-which");

document.addEventListener("keydown", (event) => {
	let keyDown = event.key;
	let keyCode = event.code;
	let keyWhich = event.which;

	mainPanel.innerText = ` ${keyDown} was pressed.`.toUpperCase();
	kKey.innerText = ` ${keyDown} was pressed.`;
	kCode.innerText = ` ${keyCode} was pressed.`;
	kWhich.innerText = ` ${keyWhich} was pressed.`;
});
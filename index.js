const labels = document.getElementsByClassName('label');

for (const label of labels) {
	label.addEventListener('click', e => {
		console.log(label.parentElement.classList.toggle('active'));
	});
}

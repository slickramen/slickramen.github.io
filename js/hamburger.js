/**
 * Handle hamburger menu
 * @param {} event
 */
function showHamburger(event) {
	const links = document.getElementById("navbar-links");
	const hamburger = event.target;

	if (links.classList.contains("show")) {
		links.classList.remove("show");
		hamburger.classList.remove("show");
	} else {
		links.classList.add("show");
		hamburger.classList.add("show");
	}
}

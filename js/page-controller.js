const windowSize = 800;
let selectedIndex = 0;

let pages = document.querySelectorAll(".page");

/**
 * Setup all pages
 */
pages.forEach((page, index) => {
	page.style.zIndex = pages.length - index; // Higher index for pages in the front

	const offset = index * 50; // Offset increases for farther pages
	const scale = 0.5;
	page.dataset.initialTransform = `translateX(${offset}px) translateY(${-0.2 * offset}px) skewY(20deg)
    scale(${scale})`;
	page.dataset.currentTransform = page.dataset.initialTransform;
	page.style.transform = page.dataset.currentTransform;

	page.addEventListener("click", () => {
		updateSelectedIndex(index);
	});

	page.addEventListener("mouseenter", () => {
		if (selectedIndex != index) {
			const currentTransform =
				page.style.transform || page.dataset.initialTransform;
			page.style.transform = `${page.dataset.currentTransform} scale(1.1) translateX(5px) translateY(-15px) skewY(-5deg)`;
		}
		// page.style.boxShadow = '0 30px 30px rgba(0, 0, 0, 0.5)';
	});

	page.addEventListener("mouseleave", () => {
		page.style.transform = page.dataset.currentTransform; // Restore the original transform
		// page.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
	});
});

/**
 * Function to update the "selected" page
 */
function updateSelectedIndex(newIndex) {
	// Ensure the newIndex is within valid bounds
	if (newIndex < 0 || newIndex >= pages.length) return;

	const mediaQuery = window.matchMedia(`(max-width: ${windowSize}px)`);

	selectedIndex = newIndex;

	// Unset all pages
	pages.forEach((page, index) => {
		pages[index].classList.remove("selected");

		// Only update if necessary
		if (!mediaQuery.matches) {
			const distance = Math.min(Math.max(index - selectedIndex, -1), 1); // Distance from the selected index
			const offsetPush = 500 * distance - selectedIndex * 100; // Push effect diminishes with distance
			const offset = offsetPush; // Offset increases for farther pages
			let scale = 0;
			if (selectedIndex === index) {
				scale = 1;
			}

			const currentTransform = page.dataset.initialTransform;
			page.style.transform = `${currentTransform} translateX(${offset}px) translateY(${-0.565 * offset}px) scale(${
				1 + scale
			}) skewY(${-20 * scale}deg)`;

			page.dataset.currentTransform = page.style.transform;
		}
	});

	pages[selectedIndex].classList.add("selected");
}

/**
 * Find page index
 * @param id id to search for
 * @returns page index
 */
function findPageIndex(id) {
	for (let i = 0; i < pages.length; i++) {
		if (pages[i].id === id) {
			return i;
		}
	}
	return -1; // Return -1 if not found
}

updateSelectedIndex(selectedIndex);

/**
 * Mouse scroll event listener
 */
window.addEventListener("wheel", (event) => {
	const mediaQuery = window.matchMedia(`(max-width: ${windowSize}px)`);

	if (mediaQuery.matches) {
		return;
	}

	if (event.deltaY > 0) {
		// Scroll down
		selectedIndex++;
	} else {
		// Scroll up
		selectedIndex--;
	}

	selectedIndex = Math.min(Math.max(selectedIndex, 0), pages.length - 1);

	// Update the selected index
	updateSelectedIndex(selectedIndex);
});

/**
 * Function to handle hash navigation
 */
function handleHashNavigation() {
	const hash = window.location.hash.substring(1); // Remove the '#' from hash
	if (hash) {
		const index = findPageIndex(hash); // Find index based on ID
		if (index !== -1) {
			updateSelectedIndex(index);
		}
	}
}

// Run hash navigation check when the page loads
window.addEventListener("DOMContentLoaded", handleHashNavigation);

// Run hash navigation check when the hash changes (for when users click a link)
window.addEventListener("hashchange", handleHashNavigation);

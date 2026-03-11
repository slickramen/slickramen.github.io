const iframe = document.querySelector("#game-holder iframe");
const gameHolder = document.querySelector("#game-holder");

function scaleIframe() {
	const gameWidth = gameHolder.dataset.width;
	const gameHeight = gameHolder.dataset.height;

	iframe.style.width = `${gameWidth}px`;
	iframe.style.height = `${gameHeight}px`;

	const holderWidth = gameHolder.offsetWidth;
	const holderHeight = gameHolder.offsetHeight;

	const scale = holderWidth / gameWidth;

	iframe.style.transform = `scale(${scale})`;
	gameHolder.style.height = `${gameHeight * scale}px`;
}

window.addEventListener("resize", scaleIframe);
scaleIframe();

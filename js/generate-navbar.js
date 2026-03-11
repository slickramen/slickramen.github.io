document.addEventListener("DOMContentLoaded", () => {
	const header = document.getElementById("navbar");
	const footer = document.getElementById("footer");
	const footerLinks = document.getElementById("footer-links");

	if (header) {
		header.innerHTML = `
        <a href="/" class="logo">
        <svg id="icon" width="100%" height="100%" viewBox="0 0 467 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M198.368 2.90022C197.475 1.35309 195.824 0.400002 194.038 0.400002H119.812C118.025 0.400002 116.375 1.353 115.481 2.9L78.3682 67.182C77.475 68.729 77.475 70.635 78.3682 72.182L109.868 126.741C111.792 130.074 109.387 134.241 105.538 134.241H43.0116C41.2252 134.241 39.5746 135.194 38.6814 136.741L1.56819 201.023C0.675023 202.57 0.675025 204.476 1.56819 206.023L38.6814 270.305C39.5746 271.852 41.2253 272.805 43.0116 272.805L117.235 272.803C119.021 272.803 120.671 271.85 121.565 270.303L152.431 216.841C154.355 213.508 159.167 213.508 161.091 216.841L192.281 270.864C193.175 272.411 194.825 273.364 196.612 273.364L270.835 273.362C272.621 273.362 274.271 272.409 275.165 270.862L306.192 217.121C308.117 213.787 312.928 213.787 314.853 217.121L345.881 270.864C346.774 272.411 348.425 273.364 350.211 273.364L424.434 273.362C426.221 273.362 427.871 272.409 428.764 270.862L465.877 206.582C466.77 205.035 466.77 203.129 465.877 201.582L428.768 137.3C427.875 135.753 426.224 134.8 424.438 134.8H361.584C357.735 134.8 355.33 130.633 357.254 127.3L389.077 72.1819C389.97 70.635 389.97 68.7291 389.077 67.1821L351.968 2.90022C351.075 1.35309 349.424 0.400002 347.638 0.400002H273.412C271.625 0.400002 269.975 1.353 269.081 2.9L238.053 56.6428C236.128 59.9762 231.317 59.9761 229.393 56.6426L198.368 2.90022ZM238.053 82.7205C236.128 79.3871 231.317 79.3871 229.392 82.7205L203.654 127.3C201.73 130.633 204.135 134.8 207.984 134.8H259.46C263.309 134.8 265.715 130.633 263.791 127.3L238.053 82.7205ZM284.788 138.964C280.939 138.964 278.534 143.13 280.458 146.463L306.193 191.042C308.117 194.376 312.928 194.376 314.853 191.043L340.591 146.462C342.516 143.129 340.11 138.962 336.261 138.962L284.788 138.964ZM161.414 190.763C159.49 194.097 154.678 194.097 152.754 190.763L127.181 146.463C125.256 143.13 127.662 138.964 131.511 138.964L182.661 138.962C186.51 138.962 188.916 143.129 186.992 146.462L161.414 190.763Z" fill="currentColor"/>
        </svg>
        </a>
        <div class="links float-left" id="navbar-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
        <span id="hamburger" class="hamburger" onclick="showHamburger(event)"></span>
        `;
	}

	let links = `<a href="/">Back to home</a>`;
	if (footerLinks) {
		links = footerLinks.innerHTML;
	}

	if (footer) {
		footer.innerHTML = `
        <div class="links">
            <a class="optional" href="https://github.com/slickramen"><i class="icon-github" style="margin-right: 5px;"></i>GitHub</a>
            <a class="optional" href="https://www.linkedin.com/in/martyn-gascoigne/"><i class="icon-linkedin" style="margin-right: 5px;"></i>LinkedIn</a>
            <a class="optional" href="#"><i class="icon-email" style="margin-right: 5px;"></i>Email</a>
            <span class="optional">|</span>
            ${links}
        </div>
        <div class="copyright optional">
            designed and constructed by martyn gascoigne [2026]
        </div>
        `;
	} // first published 2025
});

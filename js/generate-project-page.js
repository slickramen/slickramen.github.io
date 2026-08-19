/**
 * Helper function to generate a page layout.
 *
 * @param {*} title page title
 * @param {*} subtitle page subtitle
 * @param {*} listOfLinks page links list
 * @param {*} image page cover image
 * @param {*} content page content as HTML
 */
function generateProjectPageLayout(
	title,
	subtitle,
	listOfLinks,
	image,
	content,
) {
	const holder = document.getElementById("content-holder");
	const container = document.createElement("div");
	container.classList = "col";

	const links = (listOfLinks ?? [])
		.map(
			(link) =>
				`<li class="link"><i class="icon-${link.type ?? "link"} use-line-height"></i><a href="${link.url}" target="_blank">${link.text}</a></li>`,
		)
		.join("");

	container.innerHTML = `
    <img class="project-cover" src="${image ?? ""}" loading="lazy">

    <span class="page-title">${title}</span>
    <span class="page-subtitle">${subtitle}</span>

    <span class="page-header" id="background">Links</span>
    <ul style="margin-top: 0">
        ${links}
    </ul>

    ${content}`;

	holder.appendChild(container);
}

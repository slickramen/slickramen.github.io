/**
 * Deal with loading the projects
 */
function loadProjects(projects) {
    const projectHolder = document.getElementById("portfolio-container");

    projects.forEach( function(project) {
        const newProject = document.createElement("div");
        newProject.classList = "page";

        if (project.divider) {
            // Divider
            newProject.classList.add("filter-pane");
            newProject.setAttribute("id", project.divider_id);
            newProject.innerHTML = `
                <div class="info always-on">
                    <h2 class="title">${project.name ?? ""}</h2>
                    <sub class="subtitle">${project.subtitle ?? ""}</sub>
                </div>
            `
        } else {
            // Regular Project
            const links = (project.links ?? [])
                .map(link => `<li class="link"><i class="icon-${link.type ?? 'link'} use-line-height"></i><a href="${link.url}">${link.text}</a></li>`)
                .join(""); // Convert array to a string

            const skillChips = (project.skillChips ? `<div class="project-skill-chips"> - ${project.skillChips}</div>` : "")

            newProject.innerHTML = `
                <span class="page-date">${project.year ?? ""}${skillChips}</span>

                <div class="info">
                    <h2 class="title">${project.name ?? ""}</h2>
                    <sub class="subtitle">${project.subtitle ?? ""}</sub>
                    <ul class="link-list">
                        ${links}
                    </ul>
                </div>
            `
            
            const img = document.createElement("img");
            img.classList = "page-image";
            img.setAttribute("loading", "lazy");
            img.src = `../img/${project.image ?? "default-profile.png"}`;
            newProject.appendChild(img);
        }

        projectHolder.appendChild(newProject);
    });
}

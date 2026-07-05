export class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const heading = this.getAttribute("heading");
        const subheading = this.getAttribute("subheading");
        const tech = this.getAttribute("tech").split(",");
        const gitHub = this.getAttribute("git_hub");

        this.innerHTML = `
        <div class="card flex flex-col gap-2">
            <header>
                <h3 class="card-title">${heading}</h3>  
                <p>${subheading}</p>
            </header>
            <main>
                <h4>Tecnologias</h4>
                <div class="flex gap-2 flex-wrap">
                    ${tech.map((t) => `<p>${t}</p>`).join("")}
                </div>
            </main>
            <footer>
                <h4>Links</h4>
                <a class="flex flex-row gap-1 items-center" href="${gitHub}"><i class="fa-brands fa-github"></i>Github</a>
            </footer>
        </div>
        `;
    }
}
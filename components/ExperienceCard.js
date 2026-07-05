export class ExperienceCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const job = this.getAttribute("job");
        const company = this.getAttribute("company");
        const start_date = this.getAttribute("start_date");
        const end_date = this.getAttribute("end_date");
        const activities = this.getAttribute("activities").split(",");
        const gitHub = this.getAttribute("git_hub");

        this.innerHTML = `
        <div class="card flex flex-col gap-2">
            <header>
                <h3 class="card-title">${job}</h3>  
                <p>${company} | ${start_date} a ${end_date} </p>
            </header>
            <main>
                <h4>Atividades</h4>
                <ul>
                    ${activities.map((activity) => `<li>${activity}</li>`).join("")}
                </ul>
            </main>
        </div>
        `;
    }
}
export class Badge extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon_class = this.getAttribute("icon_class");
        const text = this.getAttribute("text");

        this.innerHTML = `
        <div class="text-center">
            <i class="${icon_class} text-4xl"></i>
            <p class="text-[0.6rem]">${text}</p>
        </div>
        `;
    }
}
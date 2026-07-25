export class Badge extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon_class = this.getAttribute("icon_class");
        const icon_url = this.getAttribute("icon_url");
        const text = this.getAttribute("text");

        this.innerHTML = `
        <div class="flex flex-col justify-between items-center h-full">
            ${icon_class ? 
                `<i class="${icon_class} text-4xl"></i>` :
                `<img src="${icon_url}" alt="Supabase" width="36" class="select-none" disabled>`}
            <p class="text-[0.6rem]">${text}</p>
        </div>
        `;
    }
}
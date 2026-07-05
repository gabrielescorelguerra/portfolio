import { Badge } from "./components/Badge.js";
import { ProjectCard } from "./components/ProjectCard.js";
import { ExperienceCard } from "./components/ExperienceCard.js";
import { initActiveNav } from "./navbar.js";

customElements.define("custom-badge", Badge);
customElements.define("custom-project-card", ProjectCard);
customElements.define("custom-experience-card", ExperienceCard);

initActiveNav();
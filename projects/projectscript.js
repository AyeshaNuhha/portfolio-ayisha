const techTags = [
  "All", "Java", "Android Studio", "Figma", "C++", "Bcrypt", "Angular", "Spring-boot", "Canva", 
  "Firebase", "CSS", "Javascript", "JWT", "MongoDB", "Postman", "MySQL", "H2", "OpenAI", "Git",
  "Flutter", "Dart", "TailwindCSS", "TypeScript", "C", "Python", "Html", "GitHub", "Eclipse", "Visual Studio Code", "Jira", "Notion", "Confluence", "Bootstrap",
  "Adobe XD", "Node.js", "AWS", "REST APIs", "OOP", "State Management (Bloc, Provider)", "CI/CD", "MVC/MVVM",
];

const projects = [
  {
    title: "Resumify-Resume Parser",
    description: "A Resume Parser Website that extracts key information from resumes and table that can be used for job applications filtering and sorting.",
    tags: ["Spring-boot", "Angular", "Java", "PDF Box","Figma","MySQL","Jira","Notion","GitHub"],
    features: [
      "You can upload a resume in PDF format and it will extract the key information from it.",
      "The extracted information is displayed in a table format for easy viewing and sorting.",
      "The website is built using Spring Boot for the backend and Angular for the frontend.",
      "Uses MySQL for data storage and retrieval.",
      "Implemented with Figma for design and Jira/Notion for project management.",
    ],
    image: "../assets/images/resumify.png"
  },
  {
    title: "Innospace",
    description: "A technology Community Hub for Developers,Designers,Business Development Executives, Fashion Designers, Startup Enthusiastors etc.",
    tags: ["HTML", "CSS", "JS", "UI &UX", "Figma", "GitHub"],
    features: [
      "A community hub for developers, designers, and business enthusiasts.",
      "Showcases various projects and events organized by the community.",
      "Built with HTML, CSS, and JavaScript for a responsive design.",
      "Designed using Figma and version controlled with GitHub."
    ],
    image: "../assets/images/innospace.png"
  },
  {
    title: "Libraria",
    description: "A Library Management System that allows users to manage books, members, and transactions efficiently.",
    tags: ["Java", "Spring boot", "Angular", "TypeScript", "MySQL", "Figma", "GitHub"],
    features: [
      "Allows users to manage books, members, and transactions efficiently.",
      "Built with Java Spring Boot for the backend and Angular for the frontend.",
      "Uses MySQL for data storage and retrieval.",
      "Designed using Figma and version controlled with GitHub."
    ],
   
    image: "../assets/images/libraria.png"
  }
];

function renderTags() {
  const container = document.getElementById("tech-tags");
  container.innerHTML = techTags.map(tag => `<span data-tag="${tag}">${tag}</span>`).join("");

  // Add click event listeners
  document.querySelectorAll("#tech-tags span").forEach(el => {
    el.addEventListener("click", () => {
      const selectedTag = el.getAttribute("data-tag");
      document.querySelectorAll("#tech-tags span").forEach(tag => tag.classList.remove("active-tag"));
      el.classList.add("active-tag");
      filterProjects(selectedTag);
    });
  });
}

function renderProjects(filteredProjects) {
  const container = document.getElementById("projects-container");
  if (filteredProjects.length === 0) {
    container.innerHTML = `<p>No projects found for this technology.</p>`;
    return;
  }
  container.innerHTML = filteredProjects.map(p => `
    <div class="project-card">
      <img src="${p.image}" alt="${p.title}">
      <div class="project-content">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-tech">
          ${p.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
        <ul class="project-features">
          ${p.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
      <div class="project-actions">
        <button>View Details →</button>
      </div>
    </div>
  `).join("");
}

function filterProjects(tag) {
  if (tag === "All") {
    renderProjects(projects);
  } else {
    const filtered = projects.filter(p => p.tags.includes(tag));
    renderProjects(filtered);
  }
}

// Initial render
renderTags();
renderProjects(projects);

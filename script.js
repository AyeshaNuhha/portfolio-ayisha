//--------------------------------------------------Hero section --------------------------------------------------//
const roles = [
  "Software Developer",
  "Frontend Developer",
  "Flutter Developer",
  "Creative Developer",
  "UI/UX Designer",
  "Full Stack Developer",
];

const textElement = document.getElementById("changing-text");

let roleIndex = 0;

function typeText(text, callback) {
  let i = 0;
  textElement.style.width = "0"; // Reset width
  textElement.textContent = "";

  const typingInterval = setInterval(() => {
    textElement.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      setTimeout(callback, 1500); // Pause before deleting/next
    }
  }, 100);
}

function loopRoles() {
  typeText(roles[roleIndex], () => {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(loopRoles, 100);
  });
}

loopRoles();


  const scrollBtn = document.getElementById('scrollTopBtn');
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


//--------------------------------------------------Skills section --------------------------------------------------//
// Skills Section
const skillsData = {
  skills: [
    { name: "Flutter Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "UI & UX Designing", icon: "https://img.icons8.com/fluency/48/design.png" },
    { name: "Full Stack Development", icon: "https://img.icons8.com/fluency/48/full-stack.png" },
    { name: "Frontend Development", icon: "https://img.icons8.com/color/48/source-code.png" },
    { name: "Backend Development", icon: "https://img.icons8.com/color/48/database.png" },
    { name: "Social Media Management", icon: "https://img.icons8.com/fluency/48/share.png" },
    { name: "Branding", icon: "https://img.icons8.com/color/48/branding.png" },
    { name: "Poster, Ad Designing", icon: "https://img.icons8.com/fluency/48/adobe-photoshop.png" },
    { name: "Content Writing", icon: "https://img.icons8.com/fluency/48/writing.png" },
    { name: "SEO", icon: "https://img.icons8.com/color/48/seo.png" },
    { name: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "App Development", icon: "https://img.icons8.com/color/48/android-os.png" },
  ],

  languages: [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  ],

  frameworks: [
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ],
tools: [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
  { name: "Notion", icon: "https://img.icons8.com/ios-filled/50/notion.png" },
  { name: "Jira", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/jira.png" },
  { name: "Confluence", icon: "https://img.icons8.com/ios-filled/50/confluence.png" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
  { name: "Canva", icon: "https://img.icons8.com/color/48/canva-logo.png" }


],
  cloud: [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ],

  concepts: [
    { name: "OOP", icon: "https://img.icons8.com/color/48/class.png" },
    { name: "State Management (Bloc, Provider)", icon: "https://img.icons8.com/color/48/synchronize.png" },
    { name: "REST APIs", icon: "https://img.icons8.com/fluency/48/api.png" },
    { name: "CI/CD", icon: "https://img.icons8.com/fluency/48/deployment.png" },
    { name: "MVC/MVVM", icon: "https://img.icons8.com/fluency/48/split-view.png" },
    { name: "JWT", icon: "https://img.icons8.com/fluency/48/lock-2.png" },
  ]
};
  const grid = document.getElementById("skills-grid");
  const tabs = document.querySelectorAll(".tab");

  function renderSkills(category) {
    grid.innerHTML = "";
    skillsData[category].forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = skill.icon
        ? `<img src="${skill.icon}" alt="${skill.name}"/><span>${skill.name}</span>`
        : `<span>${skill.name}</span>`;
      grid.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderSkills(tab.dataset.category);
    });
  });

  // Initial render
  renderSkills("languages");
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


//--------------------------------------------------Skills section --------------------------------------------------//
// Skills Section
  const skillsData = {
    languages: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }
    ],
    frameworks: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
    ml: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
    ],
    blockchain: [
      { name: "Solidity", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
      { name: "Polygon", icon: "https://cryptologos.cc/logos/polygon-matic-logo.png" },
      { name: "Aptos", icon: "https://cryptologos.cc/logos/aptos-apt-logo.png" },
    ],
    cloud: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ],
    concepts: [
      { name: "OOP", icon: "" },
      { name: "Data Structures", icon: "" },
      { name: "System Design", icon: "" },
      { name: "REST APIs", icon: "" },
      { name: "CI/CD", icon: "" }
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
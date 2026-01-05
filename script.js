// JSON Data
const portfolioData = {
  "personalInfo": {
    "name": "Rambha Mehta",
    "role": "Web Developer",
    "description": "Student passionate about web development and programming.",
    "email": "rambha.mehta@rungta.org",
    "phone": "",
    "linkedin": "https://www.linkedin.com/in/your-linkedin",
    "theme": "dark",
    "animations": true
  },
  "skills": ["HTML", "CSS", "JavaScript", "Excel", "C", "Other"],
  "projects": [
    { "name": "Calculator", "description": "A simple calculator application built with HTML, CSS, and JS.", "link": "" },
    { "name": "Portfolio Website", "description": "My personal portfolio showcasing my skills and projects.", "link": "" },
    { "name": "To-Do App", "description": "A simple To-Do application using JavaScript for task management.", "link": "" },
    { "name": "Excel Project", "description": "Project created using Excel with various formulas and functions.", "link": "" },
    { "name": "College Mini Project", "description": "Mini project developed during B.Tech CSE first year.", "link": "" }
  ],
  "education": [
    { "degree": "B.Tech CSE 1st Year", "institution": "Rungta University" }
  ]
};

// Populate Personal Info
document.getElementById('name').innerText = portfolioData.personalInfo.name;
document.getElementById('role').innerText = portfolioData.personalInfo.role;
document.getElementById('description').innerText = portfolioData.personalInfo.description;
document.getElementById('email').innerText = portfolioData.personalInfo.email;
document.getElementById('phone').innerText = portfolioData.personalInfo.phone || "N/A";
document.getElementById('linkedin').href = portfolioData.personalInfo.linkedin;

// Populate Skills with animated bars
const skillsContainer = document.getElementById('skills-container');
portfolioData.skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'skill-bar';
  skillDiv.innerHTML = `
    <div class="skill-name">${skill}</div>
    <div class="skill-progress"><div style="width: ${Math.floor(Math.random() * 50 + 50)}%"></div></div>
  `;
  skillsContainer.appendChild(skillDiv);
});

// Populate Projects
const projectsContainer = document.getElementById('projects-container');
portfolioData.projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
  projectsContainer.appendChild(div);
});

// Populate Education
const educationList = document.getElementById('education-list');
portfolioData.education.forEach(edu => {
  const li = document.createElement('li');
  li.innerText = `${edu.degree} - ${edu.institution}`;
  educationList.appendChild(li);
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

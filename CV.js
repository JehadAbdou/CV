const Jobs = document.getElementById("erfarenhet");
const experience = document.getElementById("experience");
const home = document.getElementById("home");
const homeContent = document.getElementById("home-content");
const experienceContent = document.getElementById("experience-section");
const about = document.getElementById("about");
const aboutContent = document.getElementById("about-section");
const projects = document.getElementById("projects");
const projectsContent = document.getElementById("projects-section");
const jobs = document.getElementById("jobs");
const repos = document.getElementById("cards");
let n = 1;
experience.addEventListener("click", () => {
  experienceContent.scrollIntoView();
  n -= -1;
  console.log(n);
});
home.addEventListener("click", () => {
  homeContent.scrollIntoView();
});
about.addEventListener("click", () => {
  aboutContent.scrollIntoView();
});
projects.addEventListener("click", () => {
  projectsContent.scrollIntoView();
});

// Fetch jobs.json
fetch("./newData/Jobs.json")
  .then((resp) => {
    if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
    return resp.json();
  })
  .then((data) => {
    data.map((job) => {
      const li = document.createElement("li");
      li.innerText = job.position + " " + job.employer;
      jobs.appendChild(li);
    });
  })
  .catch((error) => console.error("Error fetching jobs.json:", error));

// Fetch GitHub repositories
fetch("https://api.github.com/users/JehadAbdou/repos")
  .then((resp) => resp.json())
  .then((data) =>
    data.map((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class=" card ">
            <div class="innre-card">
              <h2>${repo.name}</h2>
              <a href="${repo.html_url}"><i class="bx bxl-github"></i></a>
            </div>
          </div>`;
      repos.appendChild(li);
      VanillaTilt.init(document.querySelectorAll(".card"), {
        glare: true,
        reverse: true,
        reset: true,
        scale: 1.2,
        "max-glare": 0.7,
        max: 60,
      });
    })
  );

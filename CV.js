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
// Initially hide the jobs section
experience.addEventListener("click", () => {
  experienceContent.scrollIntoView();
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

fetch("jobs.json")
  .then((resp) => resp.json())
  .then((data) => {
    data.map((job) => {
      const li = document.createElement("li");
      li.innerText = job.position + " " + job.employer;
      jobs.appendChild(li);
    });
  });

fetch("https://api.github.com/users/JehadAbdou/repos")
  .then((resp) => resp.json())
  .then((data) =>
    data.map((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class="rgp card ">
            <div class="innre-card">
              
              <h2>${repo.name}</h2>
              <a href="${repo.url}"
              ><i class="bx bxl-github"></i
                ></a>
                
              </div>
            </div>`;

      repos.appendChild(li);
      VanillaTilt.init(document.querySelectorAll(".card"), {
        glare: true,
        reverse: true,
        scale: 1.2,
        "max-glare": 0.7,
        max: 60,
      });
    })
  );

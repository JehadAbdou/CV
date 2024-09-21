const Jobs = document.getElementById("erfarenhet");
const experience = document.getElementById("experience");
const home = document.getElementById("home");
const homeContent = document.getElementById("home-content");
const experienceContent = document.getElementById("experience-section");
const about = document.getElementById("about");
const aboutContent = document.getElementById("about-section");
const projects = document.getElementById("projects");
const projectsContent = document.getElementById("projects-section");
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

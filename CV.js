const Jobs = document.getElementById("erfarenhet");
const experience = document.getElementById("experience");
const home = document.getElementById("home");
const homeContent = document.getElementById("home-content");
const experienceContent = document.getElementById("experience-section");
const about = document.getElementById("about");
const aboutContent = document.getElementById("about-section");

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

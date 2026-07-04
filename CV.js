const jobsList = document.getElementById("jobs-list");
const projectsList = document.getElementById("projects-list");

function initTilt() {
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 14,
      speed: 400,
      glare: true,
      "max-glare": 0.16,
      scale: 1.02,
      reverse: true,
    });
  }
}

const curatedProjects = [
  {
    name: "Automatisering av feature flag-hantering",
    description: "Internt projekt hos Visma/Spiris där jag byggde en lösning för att identifiera inaktuella feature flags, skapa Jira-ärenden och generera förbättringsförslag med GitHub Copilot.",
    url: null,
    linkLabel: "Internt projekt",
    tags: ["n8n", "Jira", "GitHub Copilot", "Visma/Spiris"]
  },
  {
    name: "Game Store",
    description: "Byggde en e-handelsapplikation för spel med sökning, varukorg, köp och ett admingränssnitt med CRUD-stöd i .NET och React.",
    url: "https://github.com/JehadAbdou",
    linkLabel: "GitHub",
    tags: [".NET", "React", "MySQL", "Fullstack"]
  },
  {
    name: "Säkerhetsarbete i faktureringssystem",
    description: "Arbetade med att identifiera och åtgärda säkerhetsbrister i ett faktureringssystem, med fokus på robusthet, testning och säkra applikationsflöden.",
    url: null,
    linkLabel: "Internt arbete",
    tags: ["Säkerhet", "Burp Suite", "ASP.NET Core"]
  }
];

const jobData = [
  {
    position: "Utvecklare, LIA – Visma/Spiris",
    employer: "Visma/Spiris",
    responsibilities: [
      "Migrerade delar av systemet till .NET 8 och ersatte AutoMapper med statiska mappers för bättre prestanda och spårbarhet.",
      "Identifierade och åtgärdade en säkerhetsbrist i faktureringssystemet med hjälp av Burp Suite.",
      "Felsökte och rättade buggar rapporterade av kunder samt konfigurerade Scalar för API-dokumentation.",
      "Arbetade i hela stacken med ASP.NET Core, React och Knockout.js samt i agila arbetsflöden med GitHub Actions, Playwright, MediatR och Clean Architecture."
    ],
    start_date: "Nov 2025",
    end_date: "Jun 2026"
  },
  {
    position: "Köksbiträde, brickdukning",
    employer: "Region Kronoberg",
    responsibilities: [
      "Koordinerade och kvalitetssäkrade portioneringsprocessen för upp till 1 000 patientmåltider dagligen.",
      "Ansvarade för måltidssammansättning enligt individuella kostrestriktioner och näringsbehov.",
      "Säkerställde att måltidsservicen följde sjukhusets kvalitets- och hygienstandarder genom systematisk egenkontroll."
    ],
    start_date: "Maj 2023",
    end_date: "Nov 2025"
  },
  {
    position: "Arbetsledare",
    employer: "KFC",
    responsibilities: [
      "Personalansvar, schemaläggning och medarbetarsamtal.",
      "Budget- och kostnadskontroll samt löpande rapportering.",
      "Ansvar för säkerhet, hälsa och drift i den dagliga verksamheten."
    ],
    start_date: "Jun 2020",
    end_date: "Maj 2023"
  }
];

function renderJobs(data) {
  jobsList.innerHTML = "";

  data.forEach((job) => {
    const article = document.createElement("article");
    article.className = "timeline-item tilt-card";
    article.innerHTML = `
      <div class="timeline-meta">${job.start_date} – ${job.end_date}</div>
      <div class="timeline-content">
        <h3>${job.position}</h3>
        <p class="timeline-company">${job.employer}</p>
        <ul>
          ${job.responsibilities.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
    jobsList.appendChild(article);
  });
}

function renderProjects(data) {
  projectsList.innerHTML = "";

  data.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card tilt-card";
    article.innerHTML = `
      <div class="project-top">
        <h3>${project.name}</h3>
        ${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer">${project.linkLabel}</a>` : `<span class="project-muted">${project.linkLabel}</span>`}
      </div>
      <p>${project.description}</p>
      <div>${project.tags.map((tag) => `<span class="skill-badge">${tag}</span>`).join("")}</div>
    `;
    projectsList.appendChild(article);
  });
}

fetch("./newData/Jobs.json")
  .then((response) => {
    if (!response.ok) throw new Error("Could not load jobs data");
    return response.json();
  })
  .then((data) => {
    if (Array.isArray(data) && data.length) {
      renderJobs(data);
    } else {
      renderJobs(jobData);
    }
    initTilt();
  })
  .catch(() => {
    renderJobs(jobData);
    initTilt();
  });

renderProjects(curatedProjects);
initTilt();

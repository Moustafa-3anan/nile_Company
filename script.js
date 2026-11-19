const projects = [
  {
    arTitle: "أعمال بياض — الإسكان الاجتماعي",
    enTitle: "Plastering — Social Housing",
    arPlace: "تنفيذ أعمال البياض لـ 15 عمارة بمدينة 6 أكتوبر.",
    enPlace: "Plastering works for 15 buildings in 6th of October City.",
    arTag: "أعمال بياض",
    enTag: "Plastering"
  },
  {
    arTitle: "رخام — مشروع القرنفل",
    enTitle: "Marble — Al Qarnfel Project",
    arPlace: "توريد وتركيب الرخام لـ 11 عمارة بمدينة بدر، لصالح الشركة المصرية الوطنية.",
    enPlace: "Supply and installation of marble for 11 buildings in Badr City for Egyptian National Company.",
    arTag: "رخام",
    enTag: "Marble"
  },
  {
    arTitle: "تشطيبات — حي المجد",
    enTitle: "Finishing — Al Majd District",
    arPlace: "بياض ودهانات وسيراميك ورخام لـ 12 عمارة بالعبور الجديدة، لصالح الشركة المصرية الوطنية.",
    enPlace: "Plastering, painting, ceramic, and marble works for 12 buildings in New Obour for Egyptian National Company.",
    arTag: "تشطيبات",
    enTag: "Finishing"
  },
  {
    arTitle: "أعمال خرسانات — فيلا 38",
    enTitle: "Concrete Works — Villa 38",
    arPlace: "تنفيذ أعمال خرسانات بالحي المتميز في مدينة بدر.",
    enPlace: "Concrete works in the Distinguished District, Badr City.",
    arTag: "خرسانات",
    enTag: "Concrete"
  },
  {
    arTitle: "حضانة النور — 1185 عمارة",
    enTitle: "Al Nour Nursery — 1185 Buildings",
    arPlace: "تنفيذ أعمال خرسانات بمشروع 1185 عمارة بمدينة 6 أكتوبر.",
    enPlace: "Concrete works at the 1185 Buildings project in 6th of October City.",
    arTag: "خرسانات",
    enTag: "Concrete"
  },
  {
    arTitle: "مصنع الجارحي للصلب",
    enTitle: "El Garhy Steel Factory",
    arPlace: "أعمال تشطيبات داخلية وخارجية بمصنع العبوات الدوائية في العبور.",
    enPlace: "Interior and exterior finishing at the pharmaceutical packaging factory in Obour.",
    arTag: "تشطيبات",
    enTag: "Finishing"
  },
  {
    arTitle: "مستشفى عين شمس العام",
    enTitle: "Ain Shams General Hospital",
    arPlace: "أعمال تطوير قسم الأشعة بالمستشفى.",
    enPlace: "Development works for the hospital's radiology department.",
    arTag: "تطوير",
    enTag: "Renovation"
  },
  {
    arTitle: "قصر حاتم خليفة",
    enTitle: "Hatem Khalifa Palace",
    arPlace: "توريد وتركيب الرخام بجمعية أحمد عرابي.",
    enPlace: "Supply and installation of marble at Ahmed Orabi Association.",
    arTag: "رخام",
    enTag: "Marble"
  },
  {
    arTitle: "عمارة بيت الوطن",
    enTitle: "Beit Al Watan Residential Building",
    arPlace: "إنشاء وتشطيب عمارة سكنية بالتجمع الخامس.",
    enPlace: "Construction and finishing of a residential building in New Cairo's Fifth Settlement.",
    arTag: "إنشاء وتشطيب",
    enTag: "Construction"
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let currentLanguage = "ar";

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project) => `
    <article class="project-card">
      <span class="project-tag">${currentLanguage === "ar" ? project.arTag : project.enTag}</span>
      <h3>${currentLanguage === "ar" ? project.arTitle : project.enTitle}</h3>
      <p>${currentLanguage === "ar" ? project.arPlace : project.enPlace}</p>
    </article>
  `).join("");
}

function setLanguage(language) {
  currentLanguage = language;
  const isArabic = language === "ar";

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.lang = language;

  document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
    element.innerHTML = isArabic ? element.dataset.ar : element.dataset.en;
  });

  languageToggle.textContent = isArabic ? "English" : "العربية";
  renderProjects();
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "ar" ? "en" : "ar");
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// غيّر الرقم إلى رقم واتساب الشركة بصيغة دولية، من غير + أو مسافات.
const whatsappNumber = "201070071097";
const whatsappMessage = encodeURIComponent(
  "مرحبًا، أود الاستفسار عن خدمات شركة النيل للمقاولات."
);

document.getElementById("whatsappLink").href =
  `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

renderProjects();

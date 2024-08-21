const listLi = document.querySelectorAll(".nav__item");

listLi.forEach((li) => {
  li.addEventListener("click", () => {
    const link = li.querySelector("a");
    if (link) {
      window.location.href = link.href; 
    }

    highlightNavItem(li.id);
  });
});

function highlightNavItem(sectionId) {
  document.querySelectorAll(".nav__item").forEach((li) => {
    li.classList.remove("li_active");
  });

  const activeLink = document.querySelector(
    `.nav__item > a[href="#${sectionId}"]`
  );

  let activeLi;
  if (activeLink) {
    activeLi = activeLink.closest(".nav__item");
  }

  if (activeLi) {
    activeLi.classList.add("li_active");
  }
}

// Setting IntersectionObserver
const observerOptions = {
  root: null, // Window browser as root element
  rootMargin: "0px",
  threshold: 0.5, // 50% section must have been view for event
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeId = entry.target.id;
      highlightNavItem(activeId);
    }
  });
}, observerOptions);

// Choice all section, adding to viewer
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  observer.observe(section);
});

const list = document.querySelector(".projects__list");
const names = [
  "landing-partnero",
  "InfinityScroll",
  "ControlDB",
  "GProject",
  "MiniOnlineShop",
  "WebSiteCMS",
];
function showProjects(data) {
  data.forEach((repo) => {
    if (names.includes(repo.name)) {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const chartContainer = document.createElement("div");
      const chart = document.createElement("div");
      const a = document.createElement("a");

      li.className = "projects__item";
      h2.className = "name";
      h3.className = "date";
      p.className = "desc";
      chartContainer.className = "chart-container";
      chart.className = "chart";
      a.className = "link";

      h2.textContent = repo.name;
      h3.textContent = repo.created_at.split("T")[0];
      p.textContent = repo.description;
      a.textContent = "Go To Project";
      a.href = repo.html_url;
      fetch(`https://api.github.com/repos/DmytrODemoN/${repo.name}/languages`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // data.forEach((project) => {
          //   project.forEach((lang) => {
          //     const chartBar = document.createElement("div");
          //     chartBar.className = `chart-bar ${lang}`;
          //     chartBar.textContent = lang;
          //     chart.appendChild(chartBar);
          //   });
          // });
        });

      chartContainer.append(chart);
      li.append(h2, h3, p, chartContainer, a);
      list.appendChild(li);
    }
  });
}

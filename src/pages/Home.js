import '../styles/app.scss'

window.addEventListener("load", () => {
  const div = document.createElement("div");
  div.innerHTML = "Home";
  document.body.appendChild(div);
  if (window.location.pathname.includes("Home")) {
    const header = document.createElement("h1");
    header.innerHTML = "HomePage";
    document.body.appendChild(header);
  }
});


import '../styles/app.scss'

  const div = document.createElement("div");
  div.innerHTML = 'hey';
  document.body.appendChild(div);
if(module.hot) {
  module.hot.accept()
}
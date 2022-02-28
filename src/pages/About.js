
import '../styles/app.scss'
  const div = document.createElement("div");

  div.innerHTML = 'hi';
  document.body.appendChild(div);
if(module.hot) {
  module.hot.accept()
}

import Home from './pages/Home';
const total = sum(10, 5);

window.addEventListener('load', ()=> {
  const div = document.createElement("div");
  console.log(div);
  div.innerHTML = total;
  document.body.appendChild(div);
})

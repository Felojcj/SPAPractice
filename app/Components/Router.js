import { Home } from "./Home.js";

export function Router() {
  const $main = document.querySelector('main'),
    { hash } = location

  $main.innerHTML = null

  if (!hash || hash === '#/') {
    let html = ''
    
    html += Home()
    $main.innerHTML = html
  }

}
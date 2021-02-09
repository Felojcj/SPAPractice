import { App } from "./App.js";

document.addEventListener('DOMContentLoaded', App)
document.addEventListener('submit', e => {
  if (!e.target.matches('.search-form')) return false

  e.preventDefault()
})
window.addEventListener('hashchange', App)
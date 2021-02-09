import { Header } from "./Components/Header.js";
import { Main } from "./Components/Main.js";
import { Router } from "./Components/Router.js";

export function App () {
  const $root = document.getElementById('root')

  $root.innerHTML = null
  $root.appendChild(Header())
  $root.appendChild(Main())

  Router()
}
import { Header } from "./Components/Header.js";

export function App () {
  const $root = document.getElementById('root')

  $root.appendChild(Header())
}
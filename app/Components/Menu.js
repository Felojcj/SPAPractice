export function Menu() {
  const $menu = document.createElement('nav')

  $menu.classList.add('menu')

  $menu.innerHTML = `
    <a href="#/nosotros">Sobre Mi</a> 
    <a href="#/productos">CV</a>
    <a href="#/blog">Blog</a>
    <a href="#/contacto">Contacto</a>
  `

  return $menu
}
import info from '../helpers/owner-info.js'

export function Title () {
  const $title = document.createElement('span')

  $title.classList.add('main-title')
  $title.textContent = info.NAME

  return $title
}
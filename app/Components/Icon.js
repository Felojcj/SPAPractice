import info from '../helpers/owner-info.js'

export function Icon () {
  const $icon = document.createElement('img')

  $icon.classList.add('main-icon')
  $icon.src = info.LOGO

  return $icon
}
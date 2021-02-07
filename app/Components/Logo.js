import { Icon } from './Icon.js'
import { Title } from './Title.js'

export function Logo () {
  const $logo = document.createElement('a')

  $logo.href = '#/'
  $logo.classList.add('main-logo')

  $logo.appendChild(Icon())
  $logo.appendChild(Title())

  return $logo
}
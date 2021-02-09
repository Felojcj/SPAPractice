export function SearchForm () {
  const $form = document.createElement('form'),
    $input = document.createElement('input')

    $form.classList.add('search-form')
    $input.classList.add('search-box')

    $input.name = 'search'
    $input.type = 'search'
    $input.placeholder = 'Search...'
    $input.autocomplete = 'off'

    $form.appendChild($input)

    return $form
}
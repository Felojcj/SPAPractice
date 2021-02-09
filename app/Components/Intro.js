import homeContent from '../helpers/home-text.js'

export function Intro() {

  return `
  <section class="main-intro">
    <article>
    <p>${homeContent.INTRO}</p>
    <p>${homeContent.PRESENTATION}</p>
    </article>
  </section>
  `
}
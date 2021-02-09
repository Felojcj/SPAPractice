import info from '../helpers/owner-info.js'

export function Banner() {

  return `
    <section class="main-banner">
      <h2>${info.SLOGAN}</h2>
      <h1>${info.NAME}</h1>
      <img src="/app/assets/profile.jpg" alt="Profile">
    </section>
  `
}
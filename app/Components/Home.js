import { Banner } from "./Banner.js";
import { Intro } from "./Intro.js";

export function Home() {
  let homeHtml = ''

  homeHtml += Banner()
  homeHtml += Intro()

  return homeHtml
}
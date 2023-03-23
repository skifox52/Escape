import anime from "animejs"
import data from "../data/destinations.json"

const destinations = document.querySelector<HTMLDivElement>(".destinations")

data.forEach((el) => {
  destinations!.innerHTML += `
  <div class="dest__card">
    <img src="${el.photo}" alt="${el.title}"/>
    <h2>${el.title}</h2>
    <h3>${el.provider}</h3>
    <h2>${el.prix}</h2>
  </div>
  `
})
anime({
  targets: ".dest__card",
  scale: [0, 1],
  duration: 1500,
  delay: 500,
  easing: "linear",
})
anime({
  targets: "nav",
  translateY: [-100, 0],
  duration: 500,
  easing: "linear",
})
anime({
  targets: ".footer__container",
  opacity: [0, 1],
  duration: 500,
  delay: 2000,
  easing: "linear",
})

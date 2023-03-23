import anime from "animejs"

anime({
  targets: "nav",
  translateY: [-100, 0],
  duration: 400,
  delay: 1000,
  easing: "linear",
})
anime({
  targets: ".hero__section",
  height: [0, "100vh"],
  duration: 1000,
  loop: false,
  easing: "linear",
})
anime({
  targets: "h1",
  translateX: ["-150%", 0],
  duration: 500,
  delay: 2000,
  easing: "linear",
})
anime({
  targets: "h4",
  opacity: [0, 1],
  duration: 750,
  delay: 2500,
  easing: "linear",
})
anime({
  targets: ".footer__container",
  translateY: ["100%", 0],
  opacity: [0, 1],
  duration: 500,
  delay: 3250,
  easing: "linear",
})

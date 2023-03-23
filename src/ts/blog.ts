import blogs from "../data/blogs.json"
import anime from "animejs"

const blog = document.querySelector<HTMLDivElement>(".blogs")!
blogs.forEach((bl) => {
  blog.innerHTML += `
    <div class="single__blog">
        <h1>${bl.title}</h1>
        <div class="content">
        <p>${bl.content}</p>
        <img src=${bl.image} alt="blog__image" />
        </div>
    </div>
    `
})
anime({
  targets: "nav",
  translateY: [-100, 0],
  duration: 500,
  easing: "linear",
})
anime({
  targets: ".single__blog",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  duration: 1000,
  delay: 500,
  easing: "linear",
})
anime({
  targets: ".single__blog h1",
  scale: [0, 1],
  duration: 1000,
  delay: 1500,
  easing: "linear",
})
anime({
  targets: ".single__blog p",
  opacity: [0, 1],
  duration: 400,
  delay: 2500,
  easing: "linear",
})
anime({
  targets: ".single__blog img",
  scale: [0, 1],
  duration: 700,
  delay: 2900,
  easing: "linear",
})

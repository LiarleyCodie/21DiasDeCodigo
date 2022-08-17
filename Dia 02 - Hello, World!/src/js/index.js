const title = document.querySelector("#title")
const container = document.querySelector("#container")
const text = Array.from(title.innerText)
title.innerText = ''

text.forEach((char, id) => {
  const letter = createLetter(char, id)

  letter.style.animationDelay = `${id * 150}ms` // proccedural delay
  title.appendChild(letter)
})

function createLetter(char, id) {
  const span = document.createElement("span")
  span.innerText = char
  span.classList.add("letter")
  span.setAttribute("data-letter-id", id)
  if (char === " ") span.setAttribute("data-letter-char", char)

  return span
}


// Animations
fallingCamera()
function fallingCamera () {
  const intervalTime = 2700 // 1000 = 1s
  let currentTime = 0

  const myInterval = setInterval(() => {
    currentTime++

    if (currentTime === 1) {
      container.style.animationName = "fallingCamera2"
    }

    if (currentTime === 2) {
      container.style.animation = "fallingCamera3 3s ease-out backwards"
    }
  }, intervalTime)
  container.addEventListener("animationend", ({ animationName }) => {
    if (animationName === 'fallingCamera3') clearInterval(myInterval)
  })
}

swapTitleColor()
function swapTitleColor () {
  title.addEventListener("animationend", ({ animationName }) => {
    if (animationName === "swapTitleColor") title.style.color = "#111"
  })
}

title.style.display = 'block'

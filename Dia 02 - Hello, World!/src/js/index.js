const title = document.querySelector("#title")
const text = Array.from(title.innerText)
title.innerText = ""

text.forEach((char, id) => {
  let letter = createLetter(char)

  applyDelay(id, letter)

  title.appendChild(letter)
})

function createLetter(char) {
  const span = document.createElement("span")
  span.innerText = char
  span.setAttribute("data-letter", char)
  span.classList.add("letter")

  return span
}

function currentAnimation(animation, letter) {
  const animations = ['slideLetter', 'backFlip']
  switch (animation) {
    case "slideLetter":
      letter.style.transformOrigin = 'bottom right'
      letter.style.animation = 'slideLetter 1s backwards'
      letter.style.animationTimingFunction = 'ease'
    case "backFlip":
      letter.style.transformOrigin = '0% 40%'
      letter.style.animation = "backFlip 2.5s backwards"
      letter.style.animationTimingFunction = 'cubic-bezier(0.83,-0.52,0.35,0.98)'
  }
}

function applyDelay(time, letter) {
  letter.addEventListener("animationstart", ({ animationName }) => {
    switch (animationName) {
      case "slideLetter":
        letter.style.animationDelay = `${time * 50}ms`
    }
  })
}

title.style.display = "block"

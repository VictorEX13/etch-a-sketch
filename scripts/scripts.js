const container = document.querySelector(".container");
const resize = document.querySelector(".resize");

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });

  container.appendChild(square);
}

function randomLightLevel() {
  return Math.floor(Math.random() * 255);
}

function deleteGrid(element) {
  element.replaceChildren();
}

function createNewGrid(size) {
  if (size > 0 && size <= 100) {
    deleteGrid(container);

    for (let i = 0; i < size; i++) {
      for (let x = 0; x < size; x++) {
        createSquare();
      }
    }

    container.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
    container.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
  } else {
    alert("Not a valid size!");
  }
}

resize.addEventListener("click", () => {
  createNewGrid(parseInt(prompt("Type the new grid's size (from 1 to 100): ")));
});

createNewGrid(16);

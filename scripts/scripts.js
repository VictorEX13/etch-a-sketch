const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let x = 0; x < 16; x++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

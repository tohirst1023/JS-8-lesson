let elNumber = document.querySelector("span");
let minusBtn = document.querySelector(".minus");
let plusBtn = document.querySelector(".plus");

 let counter = 0;

minusBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    elNumber.textContent = counter;
  }
});

plusBtn.addEventListener("click", () => {
  counter++;
  elNumber.textContent = counter;
});

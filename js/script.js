const btn = document.querySelector("button");
const text = document.querySelector(".result");
const percent = document.querySelector(".percent");

function calculate() {
  const fruits = document.querySelector(".fruits").value;
  const sugar = document.querySelector(".sugar").value;
  const vodka = document.querySelector(".vodka").value;
  const spirit = document.querySelector(".spirit").value;
  const trash = document.querySelector(".trash").value;
  let result =
    ((vodka * 0.93 + spirit * 0.79) /
      (vodka * 0.93 + spirit * 0.79 + fruits * 1 + sugar * 1 - trash * 1)) *
    100;
  text.style.opacity = 1;
  percent.innerHTML = `${Math.round(result)}%`;
}

btn.addEventListener("click", calculate);

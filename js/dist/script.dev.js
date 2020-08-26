"use strict";

var btn = document.querySelector("button");
var text = document.querySelector(".result");
var percent = document.querySelector(".percent");

function calculate() {
  var fruits = document.querySelector(".fruits").value;
  var sugar = document.querySelector(".sugar").value;
  var vodka = document.querySelector(".vodka").value;
  var spirit = document.querySelector(".spirit").value;
  var trash = document.querySelector(".trash").value;
  var result = (vodka * 0.93 + spirit * 0.79) / (vodka * 0.93 + spirit * 0.79 + fruits * 1 + sugar * 1 - trash * 1) * 100;
  text.style.opacity = 1;
  percent.innerHTML = "".concat(Math.round(result), "%");
}

btn.addEventListener("click", calculate);
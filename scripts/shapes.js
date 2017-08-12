"use strict"

let shape = document.getElementById('changeShape')

if (Math.random() <= 0.3) {
  shape.className = "circle";
} else if (Math.random() >= 0.6) {
  shape.className = "square";
} else {
  shape.className = "rectangle";
}

//Random number from 0-255;





let btn = document.querySelector("button");
let bodyColor = document.querySelector("body");
let colorText = document.querySelector("span");


btn.addEventListener("click", function() {
  let color1 = Math.floor(Math.random() * 255 + 1);
  let color2 = Math.floor(Math.random() * 255 + 1);
  let color3 = Math.floor(Math.random() * 255 + 1);
  let randomRGB = "rgb(" + color1 + "," + color2 + "," + color3 + ")";



  bodyColor.style.backgroundColor = randomRGB;
  colorText.style.color = randomRGB;
  colorText.innerHTML = randomRGB;

});

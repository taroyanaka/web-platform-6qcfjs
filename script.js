// document.querySelector(".input-0").value = "inputtext";

function init(){
  document.querySelector(".input-0").value = "r";
  document.querySelector(".input-1").value = "R";
  document.querySelector("h1.from").textContent = "result";
}

function exe(){
  document.querySelector("h1.to").textContent = 
document.querySelector("h1.from").textContent
.replace(
  document.querySelector(".input-0").value,
  document.querySelector(".input-1").value);
}


init();
exe();

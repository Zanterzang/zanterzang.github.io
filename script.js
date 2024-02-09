let btn = document.getElementById("Z");
let theme = "b";
let body = document.body;
btn.addEventListener("click", event);

function event() {
  if (theme=="b") {
     body.style.color = 'black';
     body.style.backgroundColor = 'white';
     btn.style.color = "white";
     btn.style.backgroundColor = "black";
     theme = "w";
   } else {
     body.style.color = 'white';
     body.style.backgroundColor = '#222';
     btn.style.color = "#222";
     btn.style.backgroundColor = "white";
     theme = "b";
   }
};

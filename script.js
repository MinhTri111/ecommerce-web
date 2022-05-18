var bar = document.getElementById("bar");
var nav = document.getElementById("navbar");
var close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
//sproduct
var mainimg = document.getElementById("main-img");
var smallimg = document.getElementsByClassName("small-img");
for (let i = 0; i < 4; i++) {
  smallimg[i].onclick = () => {
    mainimg.src = smallimg[i].src;
  };
}

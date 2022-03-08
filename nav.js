let burger = document.getElementById("nav-burger");
let nav = document.querySelector(".nav-bar");
let body = document.querySelector("body");

burger.onclick = () =>{
    nav.classList.toggle("open");
}
body.onscroll = () => {
    nav.classList.remove("open");
}
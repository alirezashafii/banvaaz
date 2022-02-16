const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click" , (e) => {
    navbar.classList.toggle("nav__expanded");
});

function myFunction(x) {
  x.classList.toggle("change");
}
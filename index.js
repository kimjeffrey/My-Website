window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  const navBar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const burger = document.querySelector(".burger");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.style.padding = "1.5rem 15%";
    navBar.style.backgroundColor = "#343a40";
    navLinks.forEach(navLink => {
      navLink.style.color = "white";
      navLink.style.fontSize = "25px"
    });
    burger.style.color = "white";
  } else {
    navBar.style.padding = "3rem 15%";
    navBar.style.backgroundColor = "transparent";
    navLinks.forEach(navLink => {
      navLink.style.color = "black";
      navLink.style.fontSize = "35px";
    });
    burger.style.color = "black";
  }
}

function expandNav(){
  let display = document.querySelector(".nav-expanded");
  display.classList.toggle('show');
}

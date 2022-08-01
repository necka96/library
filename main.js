const text = [
  "Harry Potter",
  "Forrest gump",
  "Anna Karenina",
  "Madame Bovary",
  "Don Quixote",
  "Moby Dick",
  "Hamlet",
  "In Search of Lost Time",
  "The Stories of Anton Chekhov",
  "The Adventures of Huckleberry Finn ",
  "Middlemarch",
  "Lolita",
  "The Great Gatsby",
  "War and Peace",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (currentText.length === letter.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 600);
})();

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    nav.classList.add("sticky-top", "p-3", "shadow");
  } else {
    nav.classList.remove("sticky-top", "p-3", "shadow");
  }
});

function collapse(media) {
  const navLinks = document.querySelectorAll(".nav-link");
  if (media.matches) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        var myCollapse = document.getElementById("main-nav");
        var bootstrep = new bootstrap.Collapse(myCollapse, {
          hide: true,
        });
      });
    });
  }
}
var media = window.matchMedia("(max-width:767px)");
collapse(media);
media.addListener(collapse);

window.onload = function () {
  document.querySelector(".preloader").classList.add("active");
};

let date = document.querySelector("#date");
let getDate = new Date().getFullYear();
date.textContent = getDate;

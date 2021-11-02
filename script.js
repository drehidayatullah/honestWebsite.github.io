"use stric";

const linkedin = document.querySelector(".btn1");
const github = document.querySelector(".btn2");
const resume = document.querySelector(".btn3");

////Button Function

// Go to linkedin
linkedin.addEventListener("click", function (e) {
  e.preventDefault();

  window.location = "https://www.linkedin.com/in/andre-hidayatullah/";
});

// Go to github
github.addEventListener("click", function (e) {
  e.preventDefault();

  window.location = "https://github.com/drehidayatullah";
});

// Download resume
resume.addEventListener("click", function (e) {
  e.preventDefault();

  window.location = "Resume/Andre's_CV.pdf";
});

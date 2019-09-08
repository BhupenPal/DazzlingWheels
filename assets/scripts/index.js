AOS.init();

function menuOpener(x) {
  x.classList.toggle("change");
  document.getElementById("repeatCross").classList.toggle("change");
  document.getElementById("sideNav").style.width = "25%";
  document.getElementById("sideNav").style.opacity = "1";
}

function menuCloser(x) {
  x.classList.toggle("change");
  document.getElementById("origCross").classList.toggle("change");
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("sideNav").style.opacity = "0";
}

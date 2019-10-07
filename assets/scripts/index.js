function menuOpener(e) {
  e.classList.toggle("change"),
    document.getElementById("repeatCross").classList.toggle("change"),
    (document.getElementById("sideNav").style.width = "40%"),
    (document.getElementById("sideNav").style.opacity = "1"),
    (document.getElementById("sbtn-home").disabled = false),
    (document.getElementById("sbtn-freetrial").disabled = false),
    (document.getElementById("sbtn-products").disabled = false),
    (document.getElementById("sbtn-offers").disabled = false),
    (document.getElementById("sbtn-contactus").disabled = false);
}
function menuCloser(e) {
  e.classList.toggle("change"),
    document.getElementById("origCross").classList.toggle("change"),
    (document.getElementById("sideNav").style.width = "0"),
    (document.getElementById("sideNav").style.opacity = "0"),
    (document.getElementById("sbtn-home").disabled = true),
    (document.getElementById("sbtn-freetrial").disabled = true),
    (document.getElementById("sbtn-products").disabled = true),
    (document.getElementById("sbtn-offers").disabled = true),
    (document.getElementById("sbtn-contactus").disabled = true);
}
AOS.init();

window.onscroll = function() {
  scrollFunction();
};

var x = 0;
function scrollFunction() {
  x++;
  if (x == 15) {
    document.getElementById("trialF").classList.toggle("trialFlipper");
    document.getElementById("prodF").classList.toggle("prodFlipper");
    document.getElementById("offerF").classList.toggle("offerFlipper");
  }
}

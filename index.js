var y = document.getElementById("bas");
var x = document.getElementById("bfh");
var z = document.getElementById("btn-container");

function bas() {
    x.style.left = "-800px"
    y.style.left = "130px"
    z.style.left = "0"
}
function bfh() {
    x.style.left = "130px"
    y.style.left = "850px"
    z.style.left = "0"
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("contents").style.right = "0";
  } else {
    document.getElementsByClassName("contents").style.right = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
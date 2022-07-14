var modal = document.getElementById("myModal");

var smServices = document.getElementsByClassName(
  "sm-services-overview"
)[0];

var btn = document.getElementById("ac-appliance-btn");

var span = document.getElementsByClassName("close")[0];

var hamburger = document.getElementsByClassName("fa-bars")[0];

var navModal = document.getElementById("myNavModal");
var navModalInner = document.getElementsByClassName("navModalContent")[0];
var navClose = document.getElementsByClassName("navClose")[0];

btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

hamburger.onclick = () => {
  navModal.style.display = "block";
};

navClose.onclick = () => {
  navModal.style.display = "none";
};

window.onclick = (event) => {
  console.log(event.target);
  if (
    event.target == modal ||
    event.target == smServices ||
    event.target == navModal || 
    event.target == navModalInner
  ) {
    modal.style.display = "none";
    navModal.style.display = "none";
  }
};
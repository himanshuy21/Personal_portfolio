var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tabs");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tabs");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

function openTab(evt, cityName) {
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSection() {
  var sectionNav = document.getElementsByClassName("sectionNav");
  for (var i = 0; i < sectionNav.length; i++) {
    sectionNav[i].className = sectionNav[i].className.replace("active");
  }
}

document.getElementById("defaultOpen").click();

var select = document.getElementById;

function section1(){
  //document.getElementById("").style = ;
  document.getElementById("section1").style.display = "block";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "none";
}

function section2(){
  //document.getElementById("").style = ;
  document.getElementById("section2").style.display = "block";
  document.getElementById("section1").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "none";
}

function section3(){
  //document.getElementById("").style = ;
  document.getElementById("section3").style.display = "block";
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "none";
}

function section4(){
  //document.getElementById("").style = ;
  document.getElementById("section4").style.display = "block";
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section5").style.display = "none";
}

function section5(){
  //document.getElementById("").style = ;
  document.getElementById("section5").style.display = "block";
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
}
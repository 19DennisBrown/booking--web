
// home scetion javascript

let contentPage1 = document.getElementById("page-content1");
let closeButton1 = document.getElementById("close-btn1");
let navLink1 = document.getElementById("page-link1");

navLink1.addEventListener('click', function(){
  contentPage1.style.width= '1100px';
  contentPage2.style.width= '0px';
  contentPage3.style.width= '0px';
  contentPage4.style.width= '0px';
})

closeButton1.addEventListener('click', function(){
  contentPage1.style.width= '0px';
});

// explore section javascripts
let contentPage2 = document.getElementById("page-content2");
let closeButton2 = document.getElementById("close-btn2");
let navLink2 = document.getElementById("page-link2");

navLink2.addEventListener('click', function(){
  contentPage2.style.width= '1100px';
  contentPage1.style.width = '0px';
  contentPage3.style.width= '0px';
  contentPage4.style.width= '0px';
})

closeButton2.addEventListener('click', function(){
  contentPage2.style.width= '0px';
})
// Visit section javascripts
let contentPage3 = document.getElementById("page-content3");
let closeButton3 = document.getElementById("close-btn3");
let navLink3 = document.getElementById("page-link3");

navLink3.addEventListener('click', function(){
  contentPage3.style.width= '1100px';
  contentPage1.style.width = '0px';
  contentPage4.style.width= '0px';
  contentPage2.style.width= '0px';
})

closeButton3.addEventListener('click', function(){
  contentPage3.style.width= '0px';
})
//Booking section javascripts
let contentPage4 = document.getElementById("page-content4");
let closeButton4 = document.getElementById("close-btn4");
let navLink4 = document.getElementById("page-link4");

navLink4.addEventListener('click', function(){
  contentPage4.style.width= '1100px';
  contentPage1.style.width = '0px';
  contentPage3.style.width= '0px';
  contentPage2.style.width= '0px';
})

closeButton4.addEventListener('click', function(){
  contentPage4.style.width= '0px';
})


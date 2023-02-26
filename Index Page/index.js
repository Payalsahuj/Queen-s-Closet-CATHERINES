
// slidshow starts here
let slideIndex = 0;
showSlides();

let CartData = JSON.parse(localStorage.getItem("CartData")) || []

let cardlength=document.getElementById("cardlength")


let username = localStorage.getItem("username")
if(username==null){
  userId.innerText = "SIGN IN";
}else{
  userId.innerText = username;
  cardlength.innerText=CartData.length
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  $(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });

// slidshow end here

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.backgroundColor = "#ddd";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

// search functionality starts here
function search(){
  let q = document.querySelector("#search-inp").value;
  console.log(q);
  let newData = globalData.filter((e)=>{
   return e.description.toLowerCase().includes(q.toLowerCase());
  })
 //  console.log(newData);
 menProducts(newData);
}
// search ends here


let CartData = JSON.parse(localStorage.getItem("CartData")) || []

let cardlength=document.getElementById("cardlength")


let username = localStorage.getItem("username")
if(username==null){
  userId.innerText = "SIGN IN";
}else{
  userId.innerText = username;
  cardlength.innerText=CartData.length
}

// slidshow starts here
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
//   $(document).ready(function() {
//     var btn = $(".button");
//     btn.click(function() {
//       btn.toggleClass("paused");
//       return false;
//     });
//   });

// slidshow end here









const showFormRadio = document.getElementById("show-form");
const hideFormRadio = document.getElementById("hide-form");
const formContainer = document.getElementById("form-container");

showFormRadio.addEventListener("click", () => {
  formContainer.style.display = "block";
});

hideFormRadio.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// formdata below

let Addform = document.getElementById("billForm");
let firstName = document.getElementById("Fname");
let lastname = document.getElementById("Lname");
let Email = document.getElementById("email");
let country = document.getElementById("country");
let Add = document.getElementById("Address");
let city = document.getElementById("city");
let pincode = document.getElementById("pincode");
let mobile = document.getElementById("mobile");

//event listner below =>

Addform.addEventListener("submit", (e) => {
  e.preventDefault();

  addressFormData();
});
let formDataArr = JSON.parse(localStorage.getItem("userform"))  || [];
//
//empty-Array

function addressFormData() {
  let formDataObj = {
    firstName: firstName.value,
    lastname: lastname.value,
    Email: Email.value,
    country: country.value,
    Address1: Add.value,
    city: city.value,
    pincode: pincode.value,
    mobile: mobile.value,
  };

  formDataArr.push(formDataObj);
  console.log(formDataArr)
  localStorage.setItem("userform", JSON.stringify(formDataArr));

  window.location.href = "./orderSuccessPage.html"
}













//console.log("hello")

// let redirect_Page = () => {
//   let clic = document.getElementById("loginbtn")

//   let tID = setTimeout(function () {
//       window.location.href = "C:\Users\shiva\OneDrive\Desktop\CheckOutPage\orderSuccessPage.html";
//       window.clearTimeout(tID);		// clear time out.
//   }, 2000);
// }



//console.log("hello")

// let redirect_Page = () => {
//   let clic = document.getElementById("loginbtn")

//   let tID = setTimeout(function () {
//       window.location.href = "C:\Users\shiva\OneDrive\Desktop\CheckOutPage\orderSuccessPage.html";
//       window.clearTimeout(tID);		// clear time out.
//   }, 2000);
// }

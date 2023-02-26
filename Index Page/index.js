
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

// slideshow here
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

let globalData = [];

let getData = async(pageNumber=1)=>{
  try {
      let res = await fetch(`https://63f1ba774f17278c9a18b9b9.mockapi.io/product?limit=12&page=${pageNumber}`,{
          headers: {
              'X-Total-Count' : 100
          }
      });
  let totalItems = res.headers.get("X-Total-Count");
  let totalPage = Math.ceil(totalItems/12);
  showPagination(totalItems,12)
  let data = await res.json();
  console.log(globalData);
  console.log(totalPage);
  globalData = data;
  renderData(globalData);
  } catch (error) {
      console.log("err");
  }
}


getData();


let renderData = (data)=>{
let productEl = document.getElementById("product-container");
productEl.innerHTML = `
${data.map((item)=>(
  `
  <div data-id="${item.id}" class="products">
          <img src="${item.image1}" alt="err")>
          <img class="hover-img" src="${item.image3}">
          <div class="rating">${item.rating}</div>
          <h4 class="top">${item.top}</h4>
          <span class="price">${"From"}</span><h3 class="price">  ₹ ${item.price}</h3> <span class="price">${item.category}</span>
          <h4 class="title">${item.title}</h4>
          <p class="desc">${item.description1}</p>
      </div>
  `
)).join("")}
`
let products = document.querySelectorAll(".products");
for(let pro of products){
  pro.addEventListener("click", (e)=> {
      e.preventDefault();
    
   fetch(`https://63f1ba774f17278c9a18b9b9.mockapi.io/product`)
  .then((res)=>{
  return res.json()
  }).then((data)=>{
      data.map((item)=>{
          if(item.id==pro.getAttribute("data-id")){
          localStorage.setItem("product-id",item.id);
          location.href= "/Product_Description/Product.html"
      }

      })
})
  })
}
}




// search functionality starts here
function search(){
  let q = document.querySelector("#search-inp").value;
  console.log(q);
  let newData = globalData.filter((e)=>{
   return e.description1.toLowerCase().includes(q.toLowerCase()) || e.title.toLowerCase().includes(q.toLowerCase());
  })
 //  console.log(newData);
 renderData(newData);
}
// search ends here




let CartData = JSON.parse(localStorage.getItem("CartData"))||[]
let MainContainer = document.getElementById("MainContainer")

    let cardList = `
    

    <div id="MainContainer">
         ${CartData.map((element)=>  getCard(element.productType,element.size,element.quantity,element.Stock,element.id,element.image1,element.image2,element.image3,element.image4,element.title,element.price,element.color,element.category,element.rating,element.description1)).join("")}
      </div>
    `
   MainContainer.innerHTML = cardList




//  rendering the data whic we are getting from add to cart

function getCard(productType,size,quantity,Stock,id,image1,image2,image3,image4,title,price,color,category,rating,description1){
  
   
    let card = `
    <div id="displayCart">
    <div class="productLeft">
    <div class="imgdiv"><img src=${image1} alt=""></div>
    <div class="productdetailsdiv">
      <p>QUEENS CLOEST</p>
      <p class="title">${title}</p>

      <p class="code">${description1}</p>

      <p class="color">Color: <b>${color}</b> </p>
      
      <p class="sizeFamily">ProductType: <b>${productType}</b> </p>

      <p class="size">Size: <b>${size}</b></p>

      <p class="available"> Availability: <b>${Stock}</b> </p>

      <p class="price">Price: <s> ₹ 4,750.00</s> <b>₹ ${price}</b> </p>
    </div>
  </div>

  

  <!-- producs for right blog -->
  <div class="productRight">
    <!-- quantity -->
    <div class="quantity">
       <div>
        <div   data-id=${id} class="dicrement" id="dicrement">-</div>
         <div  data-id=${id} id="Quant">${quantity}</div>
          <div data-id=${id} class="increment" id="increment">+</div>
          
       </div>
    </div>

    <!--  -->
    <div class="subtotal">
    <b>₹</b> <p id="ndprice"> ${price}</p>
    </div>
    <!--  -->
    <div class="crud">
      <a href="">EDIT</a>
      <br>
      <a href="">ADD TO </a>
      <br>
      <a href="">WISHLIST</a>
      <br>
      <a id="remove" data-id=${id} class="remove" href="">REMOVE</a>
    </div>
  </div>
  </div>
  `   
 
    return card
    
   
}

// let ndprice = document.querySelectorAll(".ndprice")
let TotalBill = document.getElementById("TotalBill")
let totalsaving =document.getElementById("totalsaving")
let totalProduct = document.getElementById("totalProduct")
// sum 
let discount = 0
let sum = 0
for (let i = 0 ; i< CartData.length ; i++){
    sum+= +CartData[i].price * CartData[i].quantity
    discount += +CartData[i].price * CartData[i].quantity/12
}

//  increment


// let 
let PRICE = document.getElementById("ndprice")
totalProduct.innerText = CartData.length
TotalBill.innerText = sum
totalsaving.innerText = Math.floor(discount)
let Quant = document.getElementById("Quant")

let increment = document.querySelectorAll(".increment")
for (let inc of increment){
   inc.addEventListener("click",(e)=> {
   Quant.innerText++
   totalProduct.innerText++
   TotalBill.innerText = sum+ (+PRICE.innerText*Quant.innerText)
   discount = TotalBill.innerText /12
   totalsaving.innerText = Math.floor(discount)
   
  })
}

let dicrement = document.querySelectorAll(".dicrement")
for (let inc of dicrement){
   inc.addEventListener("click",(e)=> {
   Quant.innerText--
   totalProduct.innerText--
   TotalBill.innerText = sum+ (+PRICE.innerText*Quant.innerText)
   discount = TotalBill.innerText /12
   totalsaving.innerText = Math.floor(discount)
 })
}

// checkout btn 
let checkoutBtn = document.getElementById("checkoutBtn")
  checkoutBtn.addEventListener("click",(e)=>{
   localStorage.setItem("CheckoutData",JSON.stringify(CartData))
  //  location.href = "CheckoutPage.html"
})


// remove Btn

let removeBtn = document.querySelectorAll(".remove")
for (let remove of removeBtn) {
  remove.addEventListener("click",(e)=>{
    e.preventDefault()
    CartData.forEach(element => {
     if(CartData.id == element.id){
      log
     }
    });
  })
}
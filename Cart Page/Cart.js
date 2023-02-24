
let CartData = JSON.parse(localStorage.getItem("CartData"))
let MainContainer = document.getElementById("MainContainer")
console.log(CartData);

let TotalBill = document.getElementById("TotalBill")
let totalsaving =document.getElementById("totalsaving")
// sum 
let discount = 0
let sum = 0
for (let i = 0 ; i< CartData.length ; i++){
    sum+= +CartData[i].price
    discount += +CartData[i].price/12
}

// let 
TotalBill.innerText = sum
totalsaving.innerText = Math.floor(discount)

    let cardList = `
    

    <div id="displayCart">
         ${CartData.map((element)=>  getCard(element.Stock,element.id,element.image1,element.image2,element.image3,element.image4,element.title,element.price,element.color,element.category,element.rating,element.description1)).join("")}
      </div>
    `
   MainContainer.innerHTML = cardList




//  rendering the data whic we are getting from add to cart

function getCard(Stock,id,image1,image2,image3,image4,title,price,color,category,rating,description1){
    let card = `
    <div class="productLeft">
    <div class="imgdiv"><img src=${image1} alt=""></div>
    <div class="productdetailsdiv">
      <p>CATHERINES</p>
      <p class="title">${title}</p>

      <p class="code">${description1}</p>

      <p class="color">Color: <b>${color}</b> </p>
      
      <p class="sizeFamily">Size Family: <b>Women's</b> </p>

      <p class="size">Size: <b>${id}x</b>  / L</p>

      <p class="available"> Availability: <b>${Stock}</b> </p>

      <p class="price">Price: <s> ₹ 4,750.00</s> <b>₹ ${price}</b> </p>
    </div>
  </div>

  

  <!-- producs for right blog -->
  <div class="productRight">
    <!-- quantity -->
    <div class="quantity">
       <div>
        <div>-</div>
         <div>1</div>
          <div>+</div>
       </div>
    </div>

    <!--  -->
    <div class="subtotal">
      <p> <b>₹</b>  <br> 8,800.00</p>
    </div>
    <!--  -->
    <div class="crud">
      <a href="">EDIT</a>
      <br>
      <a href="">ADD TO </a>
      <br>
      <a href="">WISHLIST</a>
      <br>
      <a href="">REMOVE</a>
    </div>
  </div>
    `
    return card
}
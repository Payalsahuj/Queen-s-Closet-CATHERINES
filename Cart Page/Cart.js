let CartData = JSON.parse(localStorage.getItem("CartData")) || [];
let displayCart = document.getElementById("displayCart");

function renderData() {
  displayCart.innerHTML = null;
  let cardList = `
       ${CartData.map((element) =>
         getCard(
           element.productType,
           element.size,
           element.quantity,
           element.Stock,
           element.id,
           element.image1,
           element.image2,
           element.image3,
           element.image4,
           element.title,
           element.price,
           element.color,
           element.category,
           element.rating,
           element.description1
         )
       ).join("")}
  `;
  displayCart.innerHTML = cardList;

  let TotalBill = document.getElementById("TotalBill");
  let totalsaving = document.getElementById("totalsaving");
  let totalProduct = document.getElementById("totalProduct");

  totalProduct.innerText = CartData.length;

  let sum = 0;
  let discount = 0;
  for (let i = 0; i < CartData.length; i++) {
    sum += CartData[i].price * CartData[i].quantity;
    discount += (CartData[i].price * CartData[i].quantity) / 12;
  }

  TotalBill.innerText = sum;
  totalsaving.innerText = Math.floor(discount);

  // increment btn

  let increment = document.getElementsByClassName("increment");
  for (let inc of increment) {
    inc.addEventListener("click", (e) => {
      for (let key of CartData) {
        if (key.id === e.target.dataset.id) {
          key.quantity = key.quantity + 1;
        }
      }
      localStorage.setItem("CartData", JSON.stringify(CartData));
      renderData();
    });
  }

  //  decrement button
  let dicrement = document.getElementsByClassName("dicrement");
  for (let inc of dicrement) {
    inc.addEventListener("click", (e) => {
      e.preventDefault();
      for (let key of CartData) {
        if (key.id === e.target.dataset.id) {
          let value = key.quantity;
          if (value <= 1) {
            value = 1;
            key.quantity = value;
          } else {
            value--;
            key.quantity = value;
          }
        }
      }
      localStorage.setItem("CartData", JSON.stringify(CartData));
      renderData();
    });
  }

  //  for delete
  let deleteBtn = document.getElementsByClassName("remove")
 for(btn of deleteBtn){
  btn.addEventListener("click",(e)=> {
    e.preventDefault()
    CartData.forEach((element,index)=> {
      if(element.id === e.target.dataset.id){
        CartData.splice(index,1)
        localStorage.setItem("CartData", JSON.stringify(CartData));
        renderData();
      }
    })
  })
 }
 
}
renderData();

//  rendering the data whic we are getting from add to cart

function getCard(
  productType,
  size,
  quantity,
  Stock,
  id,
  image1,
  image2,
  image3,
  image4,
  title,
  price,
  color,
  category,
  rating,
  description1
) {
  let card = `
  <div>
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
        <div   data-id=${id}  class="dicrement" id="dicrement">-</div>
         <div  data-id=${id}  class="Quant" id="Quant">${quantity}</div>
          <div data-id=${id}  class="increment" id="increment">+</div>
          
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
  `;

  return card;
}


let checkoutBtn = document.getElementById("checkoutBtn")
checkoutBtn.addEventListener("click",()=> {
  location.href="/CheckoutPage/checkoutPage.html"
})
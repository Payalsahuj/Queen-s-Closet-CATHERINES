let container = document.getElementById("container")
let ratings= document.getElementById("ratings")

let key = localStorage.getItem("product-id")
console.log(key);



fetch(`https://63f1ba774f17278c9a18b9b9.mockapi.io/product`).then((res)=>{
    return res.json()
})
.then((data)=>{
  // console.log(data);
    displayData(data)
})

function displayData(data){
  data.forEach(element => {
     container.innerHTML = `
      
     <!-- for small images -->
      <div class="smallImgs">
         <div><img id="img1" src=${element.image4}alt=""></div>
         <div><img id="img2" src=${element.image3} alt=""></div>
         <div><img id="img3" src=${element.image2}alt=""></div>
         
      </div>


      <!-- for big image -->
      <div class="mainImg"><div><img src=${element.image1} alt=""></div></div>


      <!-- for All details -->
      <div class="Specification">
        <div>
          <p class="title">${element.title}</p>
          <p> <s> ₹ 5,200.00</s></p>
          <p class="price">₹ ${element.price}</p>
          
       </div> 
       
       <div class="Xaz">
         <img src="images/ca-plcc-platinum-icon.svg" alt="">
         <p> <b> Save $20 </b>  on your first purchase of $25+ when you open and use a Catherines Platinum Credit Card!1, * <a href="">
         <br>  Learn More</a>  </p>
      </div>

      <!-- color -->
      <p class="col2"><b class="col">Color :</b>${element.color}</p>
      <div id="colorOpt">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p class="save">${element.category}</p>

      <p class="slsize"><b>Size :</b>Please Select </p>

      <div class="SizeSelect">
        <div class="mm">
         <div class="m">
           <a>T</a>
              Whats My Size?
           </div>
        </div>

        <div class="gift">Get fitted in 60 seconds.</div>
      </div>
<!-- Size Boxea -->
      <div id="sizeBoxes">
        <div>OX/L</div>
        <div>1X</div>
        <div>2X</div>
        <div>3X</div>
        <div>4X</div>
        <div>5X</div>
        <div>6X</div>
      </div>
        
<!-- review -->
<div class="reveiw"> True To Size Based On <b> CUSTOMER REVIEWS</b> </div>
<div class="Ssl">  
<div class="filter">
 <label for="">Qty</label>
   <select name="Select" id="SizeSelect">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
   </select>
</div>

<div class="sbn"> <span id="SelectBtn">Add To Bag</span> </div>


</div> 

<div class="desc">
<p>Description & Details</p>
<select name="" id=""></select>
</div>

<div class="retun">
<p>Shipping & Returns </p>
<select name="" id=""></select>
</div>

<!-- specific -->
      </div>



 
     `

     ratings.innerHTML = `
     <div class="lblog">
     <div>${element.rating}</div>
     <p>Out Of 5 Stars</p>
     <div>WRITE  A  REVIEW </div>
   </div>


   <div>
     <img src="images/Screenshot (292).png" alt="">
   </div>
     `
  });
}



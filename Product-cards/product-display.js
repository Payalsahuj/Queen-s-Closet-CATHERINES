
let globalData = [];


let checkbox = document.querySelectorAll(".selectbtn-color input");
let checkbox2 = document.querySelectorAll(".selectbtn-stock input");
let checkbox3 = document.querySelectorAll(".selectbtn-brand input")
let checkbox4 = document.querySelectorAll(".selectbtn-size input")
let checkbox5 = document.querySelectorAll(".selectbtn-productType input")
let pagination = document.getElementById("pagination-wrapper");


// let totalItems = 0;
// let dataAll = fetch(`https://63f1ba774f17278c9a18b9b9.mockapi.io/product`)
// .then((res)=>{
//     return res.json()
// }).then((globalData)=>{
//     totalItems = globalData.length;
//     console.log(totalItems);
//     check(totalItems)
// })

// function check(totalItems){
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


let descriptionPage = localStorage.getItem("product-id");


let renderData = (data)=>{
    let productEl = document.getElementById("product-container");
    productEl.innerHTML = `
    ${data.map((item)=>(
        `
        <div data-id="${item.id}" class="products">
                <img src="${item.image1}" alt="err")>
                <img class="hover-img" src="${item.image5}">
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


// id="setImage" class="setimage" onmouseover="setNewImage()" onmouseout="setOldImage()"

// function setNewImage(){
// document.querySelector(".setimage").src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/3e4618c0f3a6013917457e3461d3e37f.yottaa.net/v~4b.34a/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_JessicaLondon/default/dwaa980c07/images/on-hover/2324_11512_ma_0001.jpg?sw=240&sh=346&sm=fit&yocs=j_m_";
// }

// function setOldImage(){
//     document.querySelector(".setimage").src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/3e4618c0f3a6013917457e3461d3e37f.yottaa.net/v~4b.34a/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_JessicaLondon/default/dwcbc58e4c/images/hi-res/2324_11512_mc_0092.jpg?colorid=4221755&sw=240&sh=346&sm=fit&yocs=j_m_";
// }


    


//<---- Filtration Code Color ---->

let black = document.getElementById("black");
let red = document.getElementById("red");
let pink = document.getElementById("pink");
let green = document.getElementById("green");
let white = document.getElementById("white");
let blue = document.getElementById("blue");
let grey = document.getElementById("grey");

let filterData = (e) =>{
    let arr = []

    checkbox.forEach((input)=>{
        if(input.checked){
            arr.push(input.name);
        }else 
        if(black.checked == false  && pink.checked==false  &&  blue.checked==false && red.checked==false && green.checked==false && white.checked==false && grey.checked==false ){
            getData();
        }
    })
      

    let filteredArray = globalData.filter((item)=>{
        let colorCheck = item.color;
        let flag = false;
        for(let col of arr){
            if(col == colorCheck){
                flag = true;
                break;
            }
        }
        if(flag == true){
            return true
        }
        return false
        
    })
    // console.log(arr);
    console.log(filteredArray);
    renderData(filteredArray);
}
console.log(checkbox);


// filter code by brand


let JessicaLondon = document.getElementById("by-Jessica-London");
let Romans = document.getElementById("by-Roman's");
let Ellos = document.getElementById("by-Ellos");
let Liz_Me = document.getElementById("by-Liz&Me");



let filterData3 = (e) =>{
    let arr = []

    checkbox3.forEach((input)=>{
        if(input.checked){
            arr.push(input.name);
        }
        else if(JessicaLondon.checked == false && Romans.checked==false && Ellos.checked==false && Liz_Me.checked==false){
            getData();
        }
    })

    let filteredArray3 = globalData.filter((item)=>{
        let brandCheck = item.description1;
        let flag = false;
        for(let brnd of arr){
            if(brnd == brandCheck){
                flag = true;
                break;
            }
        }
        if(flag == true){
            return true
        }
        return false
        
    })
    console.log(arr);
    console.log(filteredArray3);
    renderData(filteredArray3);
}
console.log(checkbox3);




// Filtration Code Stock ----->

let inStock = document.getElementById("in-stock");
let outofStock = document.getElementById("out-of-stock");

let filterData2 = (e) =>{
    let arr = []

    checkbox2.forEach((input)=>{
        if(input.checked){
            arr.push(input.name);
        }else if(inStock.checked == false && outofStock.checked == false){
            getData();
        }
    })
    console.log(globalData);

    
    let filteredArray2 = globalData.filter((item)=>{
        let stockCheck = item.Stock;
        let flag = false;

        // globalData.forEach((i,index)=>{
        //     if(index === 1){
        //         return
        //     }
        // })

        for(let stk of arr){
            if(stk == stockCheck){
                flag = true;
                break;
            }
        }
        if(flag == true){
            return true
        }
        return false
    })
    // console.log(arr);
    console.log(filteredArray2);
    renderData(filteredArray2);
    // console.log(e.target);


}
console.log(checkbox2);


// Filter Size

let sizeS = document.getElementById("size-S");
let sizeM = document.getElementById("size-M");
let sizeL = document.getElementById("size-L");
let sizeXL = document.getElementById("size-Xl");

let filterData4 = (e) =>{
    let arr = []

    checkbox4.forEach((input)=>{
        if(input.checked){
            arr.push(input.name);
        }else if(sizeS.checked == false && sizeM.checked == false && sizeL.checked == false && sizeXL.checked == false){
            getData();
        }
    })
    console.log(globalData);

    
    let filteredArray4 = globalData.filter((item)=>{
        let sizeCheck = item.size;
        let flag = false;

        // globalData.forEach((i,index)=>{
        //     if(index === 1){
        //         return
        //     }
        // })

        for(let size of arr){
            if(size == sizeCheck){
                flag = true;
                break;
            }
        }
        if(flag == true){
            return true
        }
        return false
    })
    // console.log(arr);
    console.log(filteredArray4);
    renderData(filteredArray4);
    // console.log(e.target);


}
console.log(checkbox4);

// Filter Product Type

let Jackets = document.getElementById("jacket");
let Coats = document.getElementById("coat");
let Hoodies = document.getElementById("hoodie");

let filterData5 = (e) =>{
    let arr = []

    checkbox5.forEach((input)=>{
        if(input.checked){
            arr.push(input.name);
        }else if(Jackets.checked == false && Coats.checked == false && Hoodies.checked == false){
            getData();
        }
    })
    console.log(globalData);

    
    let filteredArray5 = globalData.filter((item)=>{
        let typeCheck = item.productType;
        let flag = false;

        // globalData.forEach((i,index)=>{
        //     if(index === 1){
        //         return
        //     }
        // })

        for(let type of arr){
            if(type == typeCheck){
                flag = true;
                break;
            }
        }
        if(flag == true){
            return true
        }
        return false
    })
    // console.log(arr);
    console.log(filteredArray5);
    renderData(filteredArray5);
    // console.log(e.target);


}
console.log(checkbox5);



checkbox.forEach((input)=>{
    input.addEventListener("change",filterData)
})

checkbox2.forEach((input)=>{
    input.addEventListener("change",filterData2)
})

checkbox3.forEach((input)=>{
    input.addEventListener("change",filterData3)
})

checkbox4.forEach((input)=>{
    input.addEventListener("change",filterData4)
})

checkbox5.forEach((input)=>{
    input.addEventListener("change",filterData5)
})



//  <----- Pagination Code ------->


function showPagination(totalItems,limit){
    let numofButtons = Math.ceil(totalItems/limit);
    pagination.innerHTML = `
    ${getaButton(1,1)}
    ${getaButton(2,2)}
    ${getaButton(3,3)}
    ${getaButton(4,4)}
    `

    let paginationButtons = document.querySelectorAll(".pagination-btn");
    // console.log(paginationButtons);

    for(let btn of paginationButtons){
        btn.addEventListener("click",function(e){
            let page_Number = e.target.dataset["pageNumber"];

            console.log(page_Number);
            // check(page_Number);
            getData(page_Number)
        })
    }

}

function getaButton(text,pageNumber){
return `
<button class="pagination-btn" data-page-number="${pageNumber}">${text}</button>
`
}



// <----- Sorting ------>


let ourtag = document.getElementById("sort-products");
ourtag.addEventListener("change",sorting);
function sorting(){
    if(ourtag.value == "featured"){
        getData();
    }
     else if(ourtag.value == "desc"){
        let sorted = globalData.sort(function(a,b){
            return a.price - b.price;
        })
        console.log(sorted);
        renderData(sorted);
    }else if(ourtag.value == "asc"){
        let sorted = globalData.sort(function(a,b){
            return b.price - a.price;
        })
        console.log(sorted);
        renderData(sorted);
    }
}






document.querySelector(".select-field").addEventListener("click", ()=>{
    document.querySelector(".selectbtn-color").classList.toggle("show");
    document.querySelector(".down-arrow1").classList.toggle("rotate180");
})

document.querySelector(".select-field-brand").addEventListener("click", ()=>{
    document.querySelector(".selectbtn-brand").classList.toggle("show");
    document.querySelector(".down-arrow2").classList.toggle("rotate180");
})

document.querySelector(".select-field-stock").addEventListener("click", ()=>{
    document.querySelector(".selectbtn-stock").classList.toggle("show");
    document.querySelector(".down-arrow3").classList.toggle("rotate180");
})

document.querySelector(".select-field-size").addEventListener("click", ()=>{
    document.querySelector(".selectbtn-size").classList.toggle("show");
    document.querySelector(".down-arrow4").classList.toggle("rotate180");
})

document.querySelector(".select-field-productType").addEventListener("click", ()=>{
    document.querySelector(".selectbtn-productType").classList.toggle("show");
    document.querySelector(".down-arrow5").classList.toggle("rotate180");
})


document.getElementById("jacket-btn").addEventListener("click", ()=>{
    window.location.href = "product-catagory-Jacket.html"
})
document.getElementById("coat-btn").addEventListener("click", ()=>{
    window.location.href = "product-catagory-coat.html"
})
document.getElementById("hoodie-btn").addEventListener("click", ()=>{
    window.location.href = "product-catagory-hoodie.html"
})


function show(){
    document.getElementById("side-container").classList.toggle("active");
}



// headers


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
   return e.title.toLowerCase().includes(q.toLowerCase()) || e.description1.toLowerCase().includes(q.toLowerCase());
  })
 //  console.log(newData);
 renderData(newData);
}
// search ends here






// document.getElementById("sort-products").addEventListener("change",function(e){
//     let sortby = e.target.value;
//     console.log(sortby);
//     if(sortby==="asc"){
//         getData("https://63f1ba774f17278c9a18b9b9.mockapi.io/product?sort=price&order=asc");
//         // let sorted = globalData.sort((a,b)=>{
//         //     return a.price-b.price;
//         // })
//         // console.log(sorted);
//     }else if(sortby === "desc"){
//         getData("https://63f1ba774f17278c9a18b9b9.mockapi.io/product?sort=price&&order=desc")
//     }
// })















// Previous code

// let productEl = document.getElementById("product-container");


// const myapi = "https://63f1ba774f17278c9a18b9b9.mockapi.io/product";

// async function fetchData(){
//     try {
//         let response = await fetch(myapi);
//         response = await response.json();
//         console.log(response);
//         displayProductData(response)
//     } catch (error) {
//         console.log("err");
//     }
// }

// fetchData()


// let productArr = JSON.parse(localStorage.getItem("products")) || [];

// function displayProductData(data){
    
//     productEl.innerHTML = "";

// data.forEach((element,ind)=>{

// let card = document.createElement("div");
// card.setAttribute("class","prod-card");

// let image1 = document.createElement("img");
// image1.setAttribute("src",element.image1);

// let rating = document.createElement("div");
// rating.innerHTML = element.rating;
// rating.setAttribute("class","prod-rating");

// let top = document.createElement("p");
// top.innerText = element.top;
// top.setAttribute("class","top");

// let text = document.createElement("span");
// text.innerText = `${"From"} `;
// text.setAttribute("class","price");

// let price = document.createElement("h3");
// price.innerText = `₹${element.price}`;
// price.setAttribute("class","price");

// let category = document.createElement("span");
// category.innerText = `  ${element.category}`;
// category.setAttribute("class","price");

// let title = document.createElement("h4");
// title.innerText = element.title;
// title.setAttribute("class","title");

// let desc = document.createElement("p");
// desc.innerText = element.description1;
// desc.setAttribute("class","desc");

// let colorpallate = document.createElement("div");
// colorpallate.setAttribute("class", "colorpallate")

// card.append(image1,rating, top, text, price, category,title,desc,colorpallate);
// productEl.append(card);

// })


// }
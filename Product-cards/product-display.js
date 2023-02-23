
let globalData = [];


let checkbox = document.querySelectorAll(".selectbtn-color input");
let checkbox2 = document.querySelectorAll(".selectbtn-stock input");
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
        console.log(data);
        console.log(totalPage);
        globalData = data;
        renderData(globalData);
        } catch (error) {
            console.log("err");
        }
    }
    getData();
// }

let descriptionPage = localStorage.getItem("product-id");


let renderData = (data)=>{
    let productEl = document.getElementById("product-container");
    productEl.innerHTML = `
    ${data.map((item)=>(
        `
        <div data-id="${item.id}" class="products">
                <img src="${item.image1}" alt="err">
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
        }else if(black.checked == false && red.checked==false && pink.checked==false && green.checked==false && white.checked==false && blue.checked==false && grey.checked==false){
            getData();
        }
    })
    // console.log(globalData);
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
    // console.log(e.target);
}
console.log(checkbox);


// Filtration Code Stock ----->

let filterData2 = (e) =>{
    let arr = []

    checkbox2.forEach((input)=>{
        if(input.checked){
            arr.push(input.name);
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

checkbox.forEach((input)=>{
    input.addEventListener("change",filterData)
})

checkbox2.forEach((input)=>{
    input.addEventListener("change",filterData2)
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
<button class="pagination-btn" data-page-number="${pageNumber}">${text}<button>
`
}


// <----- Sorting ------>


let ourtag = document.getElementById("sort-products");
ourtag.addEventListener("change",sorting);
function sorting(){
    if(ourtag.value == "desc"){
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
    }else {
        renderData(globalData);
    }
}




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
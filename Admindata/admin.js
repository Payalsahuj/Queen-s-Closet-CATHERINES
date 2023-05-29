
let producturl = "https://63f1ba774f17278c9a18b9b9.mockapi.io/product"
let loginurl = "https://63f1ba774f17278c9a18b9b9.mockapi.io/login"

let mainSection = document.getElementById("mainsection")
let Dashboard = document.getElementById("Dashboard")
let Product = document.getElementById("Product")
let adminprofile = document.getElementById("adminprofile")
let order = document.getElementById("order")
let create = document.getElementById("create")
let noofbestseller = document.getElementById("noofbestseller")
let noofstock = document.getElementById("noofstock")
let noofproduct = document.getElementById("noofproduct")
let localstorageurl = localStorage.getItem("location")

function fetchurl() {
    fetch(`${producturl}`).then((res) => {
        return res.json()
    })
        .then((data) => {
            console.log(data)
            render(data)
        })
}
fetchurl()




//----------------------------------------Donut Chart-----------------------------------------------------


let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0;
function render(data) {
    noofproduct.innerHTML = data.length;

    for (let x = 0; x <= data.length - 1; x++) {
        if (data[x].Stock == "In Stock") {
            count2++
        }
        if (data[x].rating.length == 5) {
            count5++
        }
        if (data[x].Stock == "Out of Stock") {
            count3++
        }
    }
    noofstock.innerText = count2;
    noofbestseller.innerText = count5;
    count4 = data.length;

    let obj = {}
    for (let x = 0; x <= data.length - 1; x++) {
        if (obj[data[x].color] == undefined) {
            obj[data[x].color] = 1
        }
        else {
            obj[data[x].color]++
        }
    }
    for (let key in obj) {
        count1++
    }


    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Colours', count1],
            ['In Stock', count2],
            ['Out of Stock', count3],
            ['Products', count4],
            ['Best sales', count5]
        ]);

        var options = {
            title: 'All Coats & Jackets details',
            pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }

    //-------------------------------------Dashboard-------------------------------------------------------------------

    Dashboard.addEventListener("click", () => {
        mainSection.innerHTML = "";
        mainSection.innerHTML = `<h2 style="font-size: 25px; color:white;">Dashboard</h2>
                <div id="dash">

                <!-- No of product -->
                <div id="firstbox">
                    <h3 style="text-align: center; font-size: 25px; color: rgb(128, 130, 132);">Number of
                        Products <br><span id="noofproduct">${data.length}</span> </h3>
                    <img src="./image/icons8-open-box-50.png" style="width: 32%; display: block;" alt="">
                </div>
                <!-- variety -->
                <div id="secondbox">
                    <h3 style="text-align: center;font-size: 25px; color: rgb(128, 130, 132);">Total Stock
                        <br><span id="noofstock">${count2}</span>
                    </h3>
                    <img src="./image/icons8-successful-delivery-50.png" style="width: 32%;" alt="">
                </div>
                <!-- Best sellers  -->
                <div id="thirdbox">
                    <h3 style="text-align: center; font-size: 25px; color: rgb(128, 130, 132);">Best Sellers
                        <br><span id="noofbestseller">${count5}</span>
                    </h3><img src="./image/icons8-best-seller-80.png" style="width: 32%;" alt="">
                </div>


                    
                </div>
                <div id="chart">
                    <img style="display: block; width: 100%; margin-top: 30px;" src="./image/Slide72.jpeg" alt="">

                    <div id="donutchart" style="width: 100%; height: 500px; padding-bottom: 30px;  "></div>

                </div>`


        let donutchart = document.getElementById("donutchart")
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Colours', count1],
                ['In Stock', count2],
                ['Out of Stock', count3],
                ['Products', count4],
                ['Best sales', count5]
            ]);

            var options = {
                title: 'All Coats & Jackets details',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);

        }
    })

}



//-----------------------------------------products-----------------------------------------------------

Product.addEventListener("click", () => {
    mainSection.innerHTML = "";
    fetchurlofproduct()

})


function fetchurlofproduct() {
    fetch(`${producturl}`).then((res) => {
        return res.json()
    })
        .then((data) => {
            renderproduct(data)
        })
}

function renderproduct(data) {
    mainSection.innerHTML = `<div>
        <h2 style="font-size: 25px; margin-bottom: 30px; color:white;">Product list</h2>
        <div id="crud" style="font-size:18px; margin-bottom: 10px;  display:flex; justify-content: space-around; background-color:white; padding: 10px;">
                    <h3 id="addbtn">Add Product</h3>
                    <h3 id="removebtn">Remove Product</h3>
                    <h3 id="updateallitem">Update Data</h3>
                    <h3 id="updatekey">Update key value</h3>
                </div>

                
                <div id="mainsectionofcrud">
                    <div id="add">
                        <div>
                            <p><b>Title of product</b></p>
                            <input id="addtitleinput" type="text" placeholder="Name of product">
                        </div>
                        <div>
                            <p><b>First Image</b></p>
                            <input id="addfimageinput" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Second Image</b></p>
                            <input id="addsimageinput" type="text" placeholder="Image url">
                        </div>
                        
                        <div>
                            <p><b>Third Image</b></p>
                            <input id="addtimageinput" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Fourth Image</b></p>
                            <input id="addfoimageinput" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Fifth Image</b></p>
                            <input id="addfivimage" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Description</b></p>
                            <input id="adddescriptioninput" type="text" placeholder="Brand">
                        </div>
                        <div>
                            <p><b>Price</b></p>
                            <input id="addpriceinput" type="number" placeholder="Price">
                        </div>
                        <div>
                            <p><b>Set Discount</b></p>
                            <input id="adddiscountinput" type="text" placeholder="Set discount">
                        </div>
                        <div>
                            <p><b>Color of Product</b></p>
                            <input id="addcolorinput" type="text" placeholder="Color of product">
                        </div>
                        <div>
                            <p><b>Set Size</b></p>
                            <input id="addsize" type="text" placeholder="Set size of product">
                        </div>
                        <div>
                            <p><b>Set Product Type</b></p>
                            <input id="addproducttype" type="text" placeholder="Type of product">
                        </div>
                        
                        
                    </div>
                    <div style="display: flex; justify-content:center; aling-item:center; margin-top:20px; ">
                            <button id="addingbtn" >Add</button>
                        </div>

                </div>

                <div id="mainsectionofremove">
                    <div id="removeproduct">
                        <div>
                            <p><b>ID of product</b></p>
                            <input id="removeid" type="text" placeholder="Product ID">
                        </div>
                        <div>
                            <p><b>Remove Items</b></p>
                            <button id="removebttn" >
                                Remove Product
                            </button>
                        </div>
                        
                        
                    </div>

                </div>

                <div id="mainsectionupdateall">
                    <div id="updateall">
                        <div>
                            <h4>Working on ID number<h4>
                            <h1 style="text-align:center; margin-top:10px;" id="putid"><h1>
                        </div>
                        <div>
                            <p><b>Title of product</b></p>
                            <input id="puttitle" type="text" placeholder="Name of product">
                        </div>
                        <div>
                            <p><b>First Image</b></p>
                            <input id="putfimage" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Second Image</b></p>
                            <input id="putsimage" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Third Image</b></p>
                            <input id="puttimage" type="text" placeholder="Image url">
                        </div>
                        
                        <div>
                            <p><b>Fourth Image</b></p>
                            <input id="putfoimage" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Fifth Image</b></p>
                            <input id="putfivimage" type="text" placeholder="Image url">
                        </div>
                        <div>
                            <p><b>Description</b></p>
                            <input id="putdescription" type="text" placeholder="Brand">
                        </div>
                        <div>
                            <p><b>Price</b></p>
                            <input id="putprice" type="number" placeholder="Price">
                        </div>
                        <div>
                            <p><b>Set Discount</b></p>
                            <input id="putdiscount" type="text" placeholder="Set discount">
                        </div>
                        <div>
                            <p><b>Color of Product</b></p>
                            <input id="putcolor" type="text" placeholder="Color of product">
                        </div>
                        <div>
                            <p><b>Set Stock</b></p>
                            <input id="putstock" type="text" placeholder="Set stock">
                        </div>
                        <div>
                            <p><b>Size of Product</b></p>
                            <input id="putsize" type="text" placeholder="Set product size">
                        </div>
                        <div>
                            <p><b>Type of product</b></p>
                            <input id="puttype" type="text" placeholder="Set product type">
                        </div>
                        
                        
                    </div>
                    <div style="display: flex; justify-content:center; aling-item:center; margin-top:20px; ">
                            <button id="updattingallbtn" >Update All</button>
                        </div>

                </div>

                <div id="mainsectionupdatesingle">
                    <div id="updatesingle">
                        <div id="updatesinglepro">
                        <div>
                            <p><b>ID of product</b></p>
                            <input id="patchid" type="number" placeholder="Product ID">
                        </div>
                        
                        <div>
                            <p><b>Product price</b></p>
                            <input id="patchprice" type="number" placeholder="Product price">
                        </div>
                        </div>
                        <div style="display: flex; justify-content:center; align-item:center; padding-right:10px; margin-top:20px; margin-bottom: 20px;">
                            
                            <button id="updatesinglebtn" >
                                Update price
                            </button>
                        </div>
                        
                    </div>

                </div>

        
        <div id="dashtwo">
        
        ${data.map((item) => getdata(item.id, item.image1, item.title, item.Stock, item.price, item.description1)).join("")}
        </div>
        </div>`

    function getdata(id, img, title, stock, price, desc) {
        let card = `<div data-id=${id} class="eachdiv" id="productdiv">
                <div>
                <img id="productimg" src="${img}" alt="">
                </div>
                <div style="padding: 10px 10px;">
                <h3>${title}</h3>
                <p>Stock:- ${stock}</p>
                <p>Price:- ${price}</p>
                <p>${desc}</p>
                <p style="color: rgb(78, 172, 239);" class="edit" data-id=${id}>EDIT</p>
                </div>
            </div>
         `
        return card

    }




    // ----------------------------------CRUD operation buttons working----------------------------------------------

    let mainsectionofcrud = document.getElementById("mainsectionofcrud")

    // ============================Add Button===========================
    let addbtn = document.getElementById("addbtn")
    let xa = false;
    addbtn.addEventListener("click", () => {
        mainsectionofremove.style.display = "none";
        mainsectionupdateall.style.display = "none";
        mainsectionupdatesingle.style.display = "none";
        xa = !xa;
        if (xa == true) {
            mainsectionofcrud.style.display = "block";
        }
        else {
            mainsectionofcrud.style.display = "none";
        }
    })

    // ====================Remove button=========================
    let xb = false;
    let removebtn = document.getElementById("removebtn")
    removebtn.addEventListener("click", () => {
        mainsectionofcrud.style.display = "none";
        mainsectionupdateall.style.display = "none";
        mainsectionupdatesingle.style.display = "none";
        xb = !xb;
        if (xb == true) {
            mainsectionofremove.style.display = "block";
        }
        else {
            mainsectionofremove.style.display = "none";
        }
    })


    //===================Update All button========================
    let xc = false;
    let updateallitem = document.getElementById("updateallitem")
    updateallitem.addEventListener("click", () => {
        mainsectionofcrud.style.display = "none";
        mainsectionofremove.style.display = "none";
        mainsectionupdatesingle.style.display = "none";
        xc = !xc;
        if (xc == true) {
            mainsectionupdateall.style.display = "block";
        }
        else {
            mainsectionupdateall.style.display = "none";
        }
    })


    // ===================Update key Button======================
    let xd = false;
    let updatekey = document.getElementById("updatekey")
    updatekey.addEventListener("click", () => {
        mainsectionofcrud.style.display = "none";
        mainsectionofremove.style.display = "none";
        mainsectionupdateall.style.display = "none";
        xd = !xd;
        if (xd == true) {
            mainsectionupdatesingle.style.display = "block";
        }
        else {
            mainsectionupdatesingle.style.display = "none";
        }
    })




    // -----------------------------------------------------crud operations--------------------------------------
    let eachdiv = document.querySelectorAll(".eachdiv")
    // ======================add input tags===================
    let addtitleinput = document.getElementById("addtitleinput")
    let addfimageinput = document.getElementById("addfimageinput")
    let addsimageinput = document.getElementById("addsimageinput")
    let addtimageinput = document.getElementById("addtimageinput")
    let addfoimageinput = document.getElementById("addfoimageinput")
    let addfivimage = document.getElementById("addfivimage")
    let adddescriptioninput = document.getElementById("adddescriptioninput")
    let addpriceinput = document.getElementById("addpriceinput")
    let adddiscountinput = document.getElementById("adddiscountinput")
    let addcolorinput = document.getElementById("addcolorinput")
    let addsize=document.getElementById("addsize")
    let addproducttype=document.getElementById("addproducttype")
    let addingbtn = document.getElementById("addingbtn")
    // ====================Remove Product====================
    let removeid = document.getElementById("removeid")
    let removebttn = document.getElementById("removebttn")
    // ====================Update all========================
    let puttitle = document.getElementById("puttitle")
    let putfimage = document.getElementById("putfimage")
    let putsimage = document.getElementById("putsimage")
    let puttimage = document.getElementById("puttimage")
    let putfoimage = document.getElementById("putfoimage")
    let putfivimage = document.getElementById("putfivimage")
    let putdescription = document.getElementById("putdescription")
    let putprice = document.getElementById("putprice")
    let putdiscount = document.getElementById("putdiscount")
    let putcolor = document.getElementById("putcolor")
    let putstock = document.getElementById("putstock")
    let putid = document.getElementById("putid")
    let putsize=document.getElementById("putsize")
    let puttype=document.getElementById("puttype")
    let updattingallbtn = document.getElementById("updattingallbtn")
   
    // ====================Update single( PATCH )===================
    let patchid = document.getElementById("patchid")
    let patchprice = document.getElementById("patchprice")
    let updatesinglebtn = document.getElementById("updatesinglebtn")



    // ===============Auto set the value of input box================
    for (let each of eachdiv) {
        each.addEventListener("click", (e) => {
            e.preventDefault()
            let idofproduct = each.getAttribute("data-id")
            fetch(`${producturl}/${idofproduct}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    putid.innerText = data.id;
                    puttitle.value = data.title;
                    putfimage.value = data.image1;
                    putsimage.value = data.image2;
                    puttimage.value = data.image3;
                    putfoimage.value = data.image4;
                    putfivimage.value = data.image5;
                    putdescription.value = data.description1;
                    putprice.value = data.price;
                    putdiscount.value = data.category;
                    putcolor.value = data.color;
                    putstock.value = data.Stock;
                    putsize.value=data.size;
                    puttype.value=data.productType;
                    removeid.value = data.id;
                    patchid.value = data.id;
                    patchprice.value = data.price;

                })
        })
    }




    // =================================== (POST) operation ==========================
    addingbtn.addEventListener("click", () => {
        let flag=false;
       if(adddiscountinput.value!="" && addcolorinput.value!="" && adddescriptioninput.value!="" && addfimageinput.value!="" && addsimageinput.value!="" && addtimageinput.value!="" && addfoimageinput.value!="" && addpriceinput.value!="" && addtitleinput.value!="" && addsize.value!="" && addproducttype.value!=""){
        flag=true;
        }
        
        if(flag==true){
        let obj = {
            "Stock": "In Stock",
            "category": `${adddiscountinput.value}`,
            "color": `${addcolorinput.value}`,
            "description1": `${adddescriptioninput.value}`,
            "image1": `${addfimageinput.value}`,
            "image2": `${addsimageinput.value}`,
            "image3": `${addtimageinput.value}`,
            "image4": `${addfoimageinput.value}`,
            "image5": `${addfivimage.value}`,
            "price": `${addpriceinput.value}`,
            "rating": "⭐⭐⭐⭐⭐",
            "title": `${addtitleinput.value}`,
            "top": "Limited Time price!",
            "size":`${addsize.value}`,
            "productType":`${addproducttype.value}`
        }

        fetch(`${producturl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(obj)
        }).then((res) => {
            return res.json()
        })
            .then((data) => {
                console.log(data)
                fetchurlofproduct()
            })
        }
        else{
            alert("You have to fill all of the details")
        }
        
       

    })

    // =================================== (DELETE) operation ==========================
    removebttn.addEventListener("click", () => {
        let deleteid = removeid.value;
        fetch(`${producturl}/${deleteid}`, {
            method: "DELETE",

        }).then((res) => {
            return res.json()
        }).then((data) => {
            fetchurlofproduct()
        })
    })


    // =================================== (PUT) operation ==========================
    updattingallbtn.addEventListener("click", () => {
        let idwewant = putid.innerText;
        
        let obj = {
            "Stock": `${putstock.value}`,
            "category": `${putdiscount.value}`,
            "color": `${putcolor.value}`,
            "description1": `${putdescription.value}`,
            "image1": `${putfimage.value}`,
            "image2": `${putsimage.value}`,
            "image3": `${puttimage.value}`,
            "image4": `${putfoimage.value}`,
            "image5": `${putfivimage.value}`,
            "price": `${putprice.value}`,
            "rating": "⭐⭐⭐⭐⭐",
            "title": `${puttitle.value}`,
            "top": "Limited Time price!",
            "size":`${putsize.value}`,
            "productType":`${puttype.value}`
        }

        fetch(`${producturl}/${idwewant}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                fetchurlofproduct()
            })


    })


    // =================================== (PATCH) operation ==========================
    updatesinglebtn.addEventListener('click',()=>{
    
        console.log(patchid.value,patchprice.value)
        
        fetch(`${producturl}/${patchid.value}`,{
            method:"PUT",
            headers:{
                "Content-type": "application/json" 
            },
            body: JSON.stringify({
                "price":`${patchprice.value}`
            })
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            fetchurlofproduct()
        })

    })


}








// ------------------------------------------profile Section-------------------------------------------------------
adminprofile.addEventListener("click", () => {
    mainSection.innerHTML = "";

    fetch(`${loginurl}`).then((res) => {
        return res.json()
    })
        .then((data) => {

            createprofile(data)
        })

    function createprofile(data) {
        mainSection.innerHTML = `
<h1 id="profilehead">Profile details</h1>
<div id="mainofprofile">
  ${data.map((item) => getcardthree(item.id, item.image, item.firstname, item.surname, item.mobile, item.email, item.description)).join("")}  
</div>
`

        let locationpage = document.querySelectorAll(".location")
        for (let loc of locationpage) {
            loc.addEventListener("click", (e) => {
                e.preventDefault()
                console.log(e.target.dataset.id)
                fetch(`${loginurl}/${e.target.dataset.id}`)
                    .then((res) => {
                        return res.json()
                    })
                    .then((data) => {
                        console.log(data)
                        localStorage.setItem("location", data.location)
                        window.location.href = "location.html"
                    })
            })
        }
    }

    function getcardthree(id, image, fname, lname, mob, email, desc) {
        let cardthree = `
    <div id="carddiv">
            <div id="proimgdiv">
                <div id="firstpro">
                <img id="profileimg" src=${image} alt="">
                </div>
                <div id="secondpro">
                <p style="padding: 5px;">"${desc}"</p>
                </div>
            </div>
            <div id="detailsection">
                <div id="location">
                    <div>
                       <img data-id=${id} class="location" src="./image/icons8-user-location-30.png" alt="">
                    </div>
                    <div>
                    <p>Location</p>
                    </div>
                </div>
                <div id="userdata">
                <h3>Full Stack Web Developer</h3>
                <p id="name">Name:- ${fname} ${lname}</p>
                <p id="mobile">Mob:- ${mob}</p>
                <p id="email">Email:- ${email}</p>
                    
                </div>
            </div>
        </div>
    `
        return cardthree;
    }

})



// ------------------------------------------Create Account Section---------------------------------------

let createaccount = document.getElementById("create")
createaccount.addEventListener("click", () => {
    mainSection.innerHTML = "";
    mainSection.innerHTML = `
                    <div id="createparentdivv">
                        <h2 style="margin-bottom: 30px; color:white;">Create Admin Account</h2>
                        <div style="width:100%;">
                            <form action="">
                                <div id="createmain">
                                <div>
                                <h3>Firstname</h3>
                                <input id="createfirstname" placeholder="Firstname" type="text">
                                </div>
                                <div>
                                <h3>Lastname</h3>
                                <input id="createlastname" placeholder="Lastname" type="text">
                                </div>
                                <div>
                                <h3>Phone number</h3>
                                <input id="createphonenumber" placeholder="Phone number" type="number">
                                </div>
                                <div>
                                <h3>Description</h3>
                                <input id="createdescription" placeholder="Description" type="text">
                                </div>
                                <div>
                                <h3>Location url</h3>
                                <input id="createlocationurl" placeholder="Location url" type="text">
                                </div>
                                <div>
                                <h3>Imageurl</h3>
                                <input id="createimageurl" placeholder="Image url" type="text">
                                </div>
                                <div>
                                <h3>Email</h3>
                                <input id="createemail" placeholder="Email" type="email">
                                </div>
                                <div>
                                <h3>Password</h3>
                                <input id="createpassword" placeholder="Set password" type="password">
                                </div>
                                </div>
                                <div style="display: flex; justify-content:center;  text-align:center; padding-right:80px; margin-top: 40px; ">
                                <input id="addmember"  type="submit">
                                </div>
                                <div style="height: 400px; ">
                                </div>
                            </form>
                        </div>
                    </div>`


    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let obj = {
            "image": form.createimageurl.value,
            "firstname": form.createfirstname.value,
            "surname": form.createlastname.value,
            "mobile": form.createphonenumber.value,
            "email": form.createemail.value,
            "description": form.createdescription.value,
            "location": form.createlocationurl.value,
            "password": form.createpassword.value
        }

        fetch(`${loginurl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(obj)
        }).then((res) => {
            return res.json()
        })
            .then((data) => {
                console.log(data)
                window.location.href = "admin.html"

            })

    })


})




// -----------------------------------------------Order List Section--------------------------------------------
let formDataArr = JSON.parse(localStorage.getItem("userform")) || [];

let orderlist = document.getElementById("order")
orderlist.addEventListener("click", () => {
    mainSection.innerHTML = "";
    mainSection.innerHTML = `
    
    <h2 style="margin-bottom:30px; color:white">Network of System</h2>
    <div id="network" style="height:380px; margin-bottom: 20px;">
        <div style=" padding-top: 150px; display:flex; justify-content:center; align-item:center;">
            <div id="containClickbtn" >
    <h1 style= "border:2px solid white; padding: 5px 10px; color: white; "><a style="color:white; text-decoration: none;" href="network.html">Click to check the network of product<a></h1>
    </div>
    </div>
    </div>
    <h2 style="margin-bottom:30px; color:white">Order Details</h2>
    <div id="alltable">
    <table style="color: white; width: 100%; border: 2px solid white; text-align: left; padding-left: 10px;">
    <thead >
        <tr>
            <th>User Name</th>
            <th>User Email ID</th>
            <th>User pincode</th>
            <th>User Contact</th>
            <th>User Location</th>
        </tr> 
    </thead>
    <tbody >
        ${formDataArr.map((item) => getdatatable(item.firstName, item.lastname, item.Email, item.pincode, item.mobile, item.Address1, item.city, item.country)).join(" ")}
    </tbody>
</table>
<div style="height:400px;"></div>
</div>
    `



})

function getdatatable(firstname, lastname, email, pincode, mobile, address, city, country) {
    let name = `${firstname} ${lastname}`;
    let properAddress = `${address},${city},${country}`
    let card = `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${pincode}</td>
            <td>${mobile}</td>
            <td>${properAddress}</td>
        </tr>

    `
    return card
}
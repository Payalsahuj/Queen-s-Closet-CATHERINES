

const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');
//forms
let form1 = document.getElementById("btn1");
let form2 = document.getElementById("form2")
//signup inputs
let s_name = document.getElementById("name1");
let s_email = document.getElementById("email1");
let s_pass = document.getElementById("pass1");

//signin inputs
let l_name = document.getElementById("email2");
let l_pass = document.getElementById("pass2")


//form animation(rotate)
signUpLink.addEventListener('click', () => {

  wrapper.classList.add('animate-signIn');
  wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signUp');
  wrapper.classList.remove('animate-signIn');
});

//sign-up
   let  userName = document.getElementById("name1")
   let  email=  document.getElementById("email1")
   let  password= document.getElementById("pass1")
   let  cpassword= document.getElementById("pass12")

let LSdata = JSON.parse(localStorage.getItem("UserData"))||[]
form1.addEventListener("click", (e) => {
  e.preventDefault()
  let obj = {
    username: userName.value,
    email: email.value,
    password: password.value,
    cpassword: cpassword.value
  }

  if (obj.password !== obj.cpassword) {
    swal("Oops!", "Password Mismatch", "error");
   // alert("Password Mismatch")
  } else {
    LSdata.push(obj)
    localStorage.setItem("UserData", JSON.stringify(LSdata))
    
    setTimeout(() => {
         wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn'); 
    },2000);
  
    swal("", "Sign Up Successfull", "success");
  }

})

//sign-in
let username = localStorage.getItem("username")


form2.addEventListener("submit", (e) => {
  let LoginData = JSON.parse(localStorage.getItem("UserData")) || []
  console.log("working");
  e.preventDefault();
  LoginData.forEach((element, index) => {
    if (form2.email2.value == element.email && form2.pass2.value == element.password) {
          
        localStorage.setItem("username",element.username)
        swal("", "Login succesful", "success");
        setTimeout(() => {
        }, 1000)

        setTimeout(()=>{
           location.href="/Index Page/index.html"
        },2000)
 
    } else {
      swal("Wrong Credantials", " Please Enter Valid Email & Password", "error");
      //alert("email & password did not match")
    }
  })

})

// eyeicons work
let eyeIcons = document.querySelectorAll(".fa-eye-slash")
eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input")
    if (pInput.type === "password") {
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
      return pInput.type = "text"
    }
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
    pInput.type = "password"
  })
})
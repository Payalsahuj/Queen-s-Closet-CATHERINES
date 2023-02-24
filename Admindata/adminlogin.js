let loginbtn=document.getElementById("loginbtn")
    let email=document.getElementById("emailvalue");
    let password=document.getElementById("passwordvalue");
    
    let loginurl = "https://63f1ba774f17278c9a18b9b9.mockapi.io/login"
    fetch(`${loginurl}`).then((res)=>{
        return res.json()
    })
    .then((data)=>{
        checkdata(data)
    })

    function checkdata(data){
        loginbtn.addEventListener("click",()=>{
            
            data.map((item)=>{
                
            if(item.email==email.value && item.password==password.value){
                document.getElementById("emailmsg").style.color="white";
                document.getElementById("passwordmsg").style.color="white";
                window.location.href="admin.html"
            }
            
            else if(item.email!=email.value && item.password!=password.value){
                document.getElementById("emailmsg").style.color="red";
                document.getElementById("passwordmsg").style.color="red";
            }
        })
        })
        
    }
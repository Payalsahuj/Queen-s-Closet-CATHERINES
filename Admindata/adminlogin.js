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
            let flag=true;
            data.map((item)=>{
                
            if(item.email==email.value && item.password==password.value){
                flag=false
                document.getElementById("emailmsg").style.color="black";
                document.getElementById("passwordmsg").style.color="black";
                window.location.href="admin.html"
            }
            
        })
        
        if(flag==true){
            document.getElementById("emailmsg").style.color="red";
            document.getElementById("passwordmsg").style.color="red";
        }
        })
        
    }

    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let btn1 = document.getElementById("btn1");

btn1.addEventListener('click', ()=>{
  if (name.value.trim() == ''){
    alert("Name can't be empty");
  } else if (password.value.trim() == ''){
    alert("Password can't be empty");
  } else if (password.value.trim().length<8){
    alert("Password should contain minimum of 8 characters");
  } else {
    alert("Successfully logged in"); 
  }
})

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

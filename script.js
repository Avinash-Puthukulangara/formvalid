function formvalid(){
    let name = document.form.nm.value;
    let password = document.form.password.value;

if(name == null || name == ""){
    alert("Name can't be empty");
    return false;
} else if (password == null || password == ""){
    alert("Password can't be empty");
    return false;
} 
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
//function for going to nextpage//
const btn = document.getElementById("fb")
btn.addEventListener('mouseover',()=>{
    window.location.href('h.html');
})

const gender = document.getElementById("ad")
const name = document.getElementById("b")
const txt = document.getElementById("c")


function tap() {
    let xitab = ""
  if (gender.value == "Mr") {
    xitab = "bey"
   
  }
  else{
    xitab = "xanim" 
    
  }
 
  txt.innerHTML = "Salam" + name + xitab
}

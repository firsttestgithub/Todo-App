
function uL(){
    var inp = document.getElementById("inp").value;
   if(inp == ''){
  alert("please enter the value")
   }
else{
   var a = document.createTextNode(inp)
    //var b = document.getElementById("uL")
    var li = document.createElement("li")
    li.appendChild(a)
   // b.appendChild(d)  
   document.getElementById("uL").appendChild(li)
}
var inp = document.getElementById("inp").value='';
}

function del(){
  
}

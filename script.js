'use strict';
var openBtn = document.querySelector('.open');
var closeBtn = document.querySelector('.close');
var againBtn = document.querySelector('.again');
function displayNone(x){
  return x.style.display="none";
}

function displayBlock(x){
return x.style.display="inline-block";
}
function myFunction() {
    var user = prompt("Please enter your name");
    if (user.length !==0) {
      document.getElementById("demo").innerHTML =
     `Hello ${user}! Have a nice day✨`;
     document.querySelector("div").style.justifyContent="center";
     displayNone(openBtn);
     displayNone(againBtn);
     displayBlock(closeBtn);
     
    }
    else{
     alert("Sorry,no name is found")
    }
  }
 function againFunction(){
    document.getElementById("demo").innerHTML =
    '';
    displayNone(closeBtn);
    displayBlock(againBtn);
 }


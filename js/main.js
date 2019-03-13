console.log("javascript linked up")

const header = document.querySelector("#mainHeader")

// document.getElementById("myBtn").addEventListener("click", function(){
//   document.getElementById("mainHeader").style.display = "none";
//   });

document.getElementById("myBtn").addEventListener("click", function(){

  if(header.style.display != "none"){
      header.style.display = "none";
    }else if (header.style.display == "none"){
      header.style.display = "";    }
  });

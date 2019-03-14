console.log("javascript linked up")

const jamesBio = document.querySelector("#james")
const grahamBio = document.querySelector("#graham")

// check to see if james button has been pressed.
document.getElementById("jamesbtn").addEventListener("click", function(){

// check to see what the display setting is, then change display to none or flex
  if(jamesBio.style.display != "flex"){
      jamesBio.style.display = "flex";
    }else if (jamesBio.style.display != "none"){
      jamesBio.style.display = "none";
    }
    grahamBio.style.display = "none"
    });


// check to see if graham button has been pressed.
document.getElementById("grahambtn").addEventListener("click", function(){

// check to see what the display setting is, then change display to none or flex

  if(grahamBio.style.display != "flex"){
      grahamBio.style.display = "flex";
    }else if (grahamBio.style.display == "flex"){
      grahamBio.style.display = "none";
    }
    jamesBio.style.display = "none"
    });

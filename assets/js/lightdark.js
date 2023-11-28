dark = eval(localStorage.getItem("dark"))
var htmlElement = document.querySelector("html");
var buttonelement = document.querySelectorAll(".buttoninvert");
if (dark != false)  {
        htmlElement.style.filter = "invert()";
        for(let i = 0; i < buttonelement.length; i++){
            buttonelement[i].style.filter = "invert()";

        }

    }
else{
        htmlElement.style.filter = "";
        for(let i = 0; i < buttonelement.length; i++){
            buttonelement[i].style.filter = "";

        }

    } 
function toggledark(){

    var htmlElement = document.querySelector("html");
    var buttonelement = document.querySelectorAll(".buttoninvert");
    if (dark == false)  {
        htmlElement.style.filter = "invert()";
        for(let i = 0; i < buttonelement.length; i++){
            buttonelement[i].style.filter = "invert()";

        }
        dark = true;
        localStorage.setItem("dark", "true");
    }
    else{
        htmlElement.style.filter = "";
        for(let i = 0; i < buttonelement.length; i++){
            buttonelement[i].style.filter = "";

        }
        dark = false;
        localStorage.setItem("dark", "false");
    }    

}

 
// SIDENAV OPEN
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
// FIM SIDENAV


//   DARK MODE
  function myFunction() {
    var image =  document.getElementById("button-dark-mode");
    var element = document.body;
    var imgabout = document.getElementsByClassName("img-about")[0];
    var imgabout1 = document.getElementsByClassName("img-about")[1];
    var imgabout2 = document.getElementsByClassName("img-about")[2];
    element.classList.toggle("dark-mode");
    imgabout.classList.toggle("img-about-invert");
    imgabout1.classList.toggle("img-about-invert");
    imgabout2.classList.toggle("img-about-invert");
  
// DARK MODE - TROCA FOTO
 if (image.getAttribute('src') == "./img-header/lua.png")
     {
          image.src = './img-header/sol.png';
                }
          else
                {
             image.src = './img-header/lua.png';
                }
  }

//   FIM DARK MODE
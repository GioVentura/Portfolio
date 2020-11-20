/*-----------------------------------------------------------------------------------*/
/*	00. navbar che scende
/*-----------------------------------------------------------------------------------*/


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbardown").style.top = "0";
  } else {
    document.getElementById("navbardown").style.top = "-70px";
  }

}

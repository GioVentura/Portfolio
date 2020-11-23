/*-----------------------------------------------------------------------------------*/
/*	00. navbar che scende
/*-----------------------------------------------------------------------------------*/


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbardown").style.top = "0";
  } else {
    document.getElementById("navbardown").style.top = "-80px";
  }

}

/*-----------------------------------------------------------------------------------*/
/*	00. zoom
/*-----------------------------------------------------------------------------------*/
  function canczoom(){

    var zoom = document.querySelector('#zoom');
    var ics = document.querySelector('#ics');
    var pic = document.querySelector('.pic');

    	ics.style.display = 'block';
    	zoom.style.display = 'none';
      pic.style.width = '230%';
      pic.style.margin = '0 0 0 -10%';

  }

  function closeZoom(){

    var ics = document.querySelector('#ics');
    var pic = document.querySelector('.pic');

    	pic.style.width = '100%';
      ics.style.display = 'none';
      pic.style.margin = '0 0 0 0%';
      zoom.style.display = 'block';

  }

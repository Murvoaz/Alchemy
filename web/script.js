document.getElementById('eau').onclick = function () 
  {
    var ID = where();
    document.getElementById(ID).src = "icon/eau.png";
  }

  document.getElementById('air').onclick = function () 
  {
    var ID = where();
    document.getElementById(ID).src = "icon/air.png";
  }

  document.getElementById('mer').onclick = function () 
  {
    var ID = where();
    document.getElementById(ID).src = "icon/mer.png";
  }

  document.getElementById('terre').onclick = function () 
  {
    var ID = where();
    document.getElementById(ID).src = "icon/terre.png";
  }

  document.getElementById('ocean').onclick = function () 
  {
    var ID = where();
    document.getElementById(ID).src = "icon/ocean.png";
  }

document.getElementById('feu').onclick = function () 
  {
    var ID = where();
    document.getElementById(ID).src = "icon/feu.png";
  }

document.getElementById('ID1').onclick = function () 
  {
    document.getElementById("ID1").src = "icon/vide.png";
  }

document.getElementById('ID2').onclick = function () 
  {
    document.getElementById("ID2").src = "icon/vide.png";
  }

document.getElementById('ID3').onclick = function () 
  {
    document.getElementById("ID3").src = "icon/vide.png";
    
  }

document.getElementById('fusion').onclick = function () 
  {
    var src1 = document.getElementById('ID1').src
    var src2 = document.getElementById('ID2').src
    var src3 = document.getElementById('ID3').src
    eel.melange(src1,src2,src3)
    (function(element)
    {
      if(element != "")
      {
      if(document.getElementById(element).style.display == "none")
        {
          document.getElementById("ID1").src = "icon/vide.png";
          document.getElementById("ID2").src = "icon/vide.png";
          document.getElementById("ID3").src = "icon/vide.png";
          document.getElementById("popupelement").textContent = "Nouvel élément créé : " + element;
          document.getElementById("popup").style.display = ""
          setTimeout(function() {document.getElementById("popup").style.display = "none"}, 5000);
          
        }                  
      document.getElementById(element).style.display = ""
      }
    })
  }

  function where() 
  {
    var ID = "";
    if(document.getElementById("ID1").src == "http://localhost:7998/icon/vide.png")
    {
    ID ="ID1";
    } 
    else if(document.getElementById("ID2").src == "http://localhost:7998/icon/vide.png") 
    {
    ID ="ID2";
    }
    else if(document.getElementById("ID3").src == "http://localhost:7998/icon/vide.png") 
    {
    ID ="ID3";
    }
    return ID;
  }

  function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }
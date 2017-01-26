
function getWindowHeight() {
  var windowHeight=0;
  if (typeof(window.innerHeight)=='number') {
      windowHeight=window.innerHeight;
  }
  else {
    if (document.documentElement&& document.documentElement.clientHeight) {
        windowHeight = document.documentElement.clientHeight;
    }
    else {
      if (document.body&&document.body.clientHeight) {
          windowHeight=document.body.clientHeight;
      }
    }
  }
  return windowHeight;
}
function getWindowWidth() {
  var windowWidth=0;
  if (typeof(window.innerWidth)=='number') {
  windowWidth=window.innerWidth;
    }
    else {
      if (document.documentElement&& document.documentElement.clientWidth) {
       windowWidth = document.documentElement.clientWidth;
        }
      else {
       if (document.body&&document.body.clientWidth) {
        windowWidth=document.body.clientWidth;
        }
      }
    }
  return windowWidth;
}


if (window.matchMedia("(min-width: 768px)").matches) {
  var rotateTwitter = 37;
  var rotateLinkedin = 160;
  var rotateGithub = 250;

  function rotate(id,deg){
    document.getElementById(id).style.transform = "rotate("+ deg +"deg)";
    document.getElementById("lien"+id).style.transform = "rotate("+ (360 - deg) +"deg)";
  }

  rotate('twitter',rotateTwitter);
  rotate('github',rotateGithub);
  rotate('linkedin',rotateLinkedin);
  document.onmousemove = suitsouris;
  function suitsouris(evenement) {
          if(navigator.appName=="Microsoft Internet Explorer")
          {
                  var x = event.x+document.body.scrollLeft;
                  var y = event.y+document.body.scrollTop;
          }
          else
          {
                  var x =  evenement.pageX;
                  var y =  evenement.pageY;
          }

          var rotateTwitter = 37 + (0.015 *(x+y));
          var rotateLinkedin = 160 + (0.005 *(x+y));
          var rotateGithub = 250 + (0.025 *(x+y));

          function rotate(id,deg){
            document.getElementById(id).style.transform = "rotate("+ deg +"deg)";
            document.getElementById("lien"+id).style.transform = "rotate("+ (360 - deg) +"deg)";
          }

          rotate('twitter',rotateTwitter);
          rotate('github',rotateGithub);
          rotate('linkedin',rotateLinkedin);
  }
}
else {
  if(getWindowWidth() / getWindowHeight() > 0.73){
    document.getElementById("cover").style.minHeight= (getWindowHeight() * (1.5*(getWindowWidth() / getWindowHeight())))+"px";
    document.getElementById("accueil").style.minHeight= (getWindowHeight() * (1.5*(getWindowWidth() / getWindowHeight())))+"px";
  }
  window.onresize = resize;
  function resize(){
    if(getWindowWidth() / getWindowHeight() > 0.73){
      document.getElementById("cover").style.minHeight= (getWindowHeight() * (1.5*(getWindowWidth() / getWindowHeight())))+"px";
      document.getElementById("accueil").style.minHeight= (getWindowHeight() * (1.5*(getWindowWidth() / getWindowHeight())))+"px";
    }
    else{
      document.getElementById("cover").style.minHeight= "350px";
      document.getElementById("accueil").style.minHeight= "350px";
    }
  }
}

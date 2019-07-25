// var selected = false;
var svg = document.getElementById('svg-map');
console.log(svg.getAttribute("viewBox"));

(function() {
  
  var states = document.getElementsByClassName("estado")
  
  for(var i = 0; i < states.length; i++) {
    states[i].onclick = function() {
      //alert(this.getAttribute('name') + ' ' + this.getAttribute('code'));
      var viewBox = "185 370 95 95"
      svg.setAttribute("viewBox", viewBox);
    }
  }
  
})();

var viewBoxX = parseInt(svg.getAttribute('x'))
var viewBoxY = parseInt(svg.getAttribute('y'))
var viewBoxW = 460
var viewBoxH = 460

function mais(){
  viewBoxW -= 5
  viewBoxH -= 5
  var viewBox1 = viewBoxX + " "+ viewBoxY + " "+ viewBoxW + " "+ viewBoxH
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}

function menos(){
  viewBoxW += 5
  viewBoxH += 5
  var viewBox1 = viewBoxX + " "+ viewBoxY + " "+ viewBoxW + " "+ viewBoxH
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}

function esquerda(){
  viewBoxX += 5
  var viewBox1 = viewBoxX + " "+ viewBoxY + " "+ viewBoxW + " "+ viewBoxH
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}

function direita(){
  viewBoxX -= 5
  var viewBox1 = viewBoxX + " "+ viewBoxY + " "+ viewBoxW + " "+ viewBoxH
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}

function cima(){
  viewBoxY += 5
  var viewBox1 = viewBoxX + " "+ viewBoxY + " "+ viewBoxW + " "+ viewBoxH
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}

function baixo(){
  viewBoxY -= 5
  var viewBox1 = viewBoxX + " "+ viewBoxY + " "+ viewBoxW + " "+ viewBoxH
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}


// Definição de coordenadas
var coordenadas = [
  {
    nome: "tocantins",
    viewPos: "240 120 105 105"
  },
  {
    nome: "bahia",
    viewPos: "305 160 125 125"
  },  
  {
    nome: "sergipe",
    viewPos: "400 170 40 40"
  },  
  {
    nome: "pernambuco",
    viewPos: "370 125 80 80"
  },  
  {
    nome: "alagoas",
    viewPos: "405 160 40 40"
  },
  {
    nome: "riograndedonorte",
    viewPos: "400 105 50 50"
  },
  {
    nome: "ceara",
    viewPos: "360 95 65 65"
  },
  {
    nome: "piaui",
    viewPos: "305 95 100 100"
  },
  {
    nome: "maranhao",
    viewPos: "265 80 110 110"
  },
  {
    nome: "amapa",
    viewPos: "210 5 80 80"
  },
  {
    nome: "para",
    viewPos: "170 35 150 150"
  },
  {
    nome: "roraima",
    viewPos: "100 0 85 85"
  },
  {
    nome: "amazonas",
    viewPos: "0 5 210 210"
  },
  {
    nome: "acre",
    viewPos: "0 130 90 90"
  },
  {
    nome: "rondonia",
    viewPos: "85 150 85 85"
  },
  {
    nome: "matogrosso",
    viewPos: "135 150 140 140"
  },
  {
    nome: "matogrossodosul",
    viewPos: "165 255 105 105"
  },
  {
    nome: "goias",
    viewPos: "225 200 105 105"
  },
  {
    nome: "parana",
    viewPos: "215 310 85 85"
  },
  {
    nome: "santacatarina",
    viewPos: "225 350 70 70"
  },
  {
    nome: "riograndedosul",
    viewPos: "185 370 95 95"
  },
  {
    nome: "saopaulo",
    viewPos: "235 270 110 110"
  },
  {
    nome: "minasgerais",
    viewPos: "260 220 130 130"
  },
  {
    nome: "riodejaneiro",
    viewPos: "330 300 50 50"
  },
  {
    nome: "espiritosanto",
    viewPos: "355 270 50 50"
  },
  {
    nome: "distritofederal",
    viewPos: "270 220 55 55"
  },
  {
    nome: "paraiba",
    viewPos: "395 120 55 55"
  }
];

// var selected = false;
var svg = document.getElementById('svg-map');
console.log(svg.getAttribute("viewBox"));

(function() {
  
  var states = document.getElementsByClassName("estado")
  
  for(var i = 0; i < states.length; i++) {
    states[i].onclick = function() {
      //alert(this.getAttribute('name') + ' ' + this.getAttribute('code'));
      
      var str = this.getAttribute('xlink:href');
      var res = str.slice(1);
      console.log(res);
      //var viewBox = "185 370 95 95"
      svg.setAttribute("viewBox", lerArrayObj(res));
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

function reset(){
  var viewBox1 = "0 0 460 460"
  svg.setAttribute("viewBox", viewBox1);
  console.log(viewBox1)
}

function lerArrayObj(nome){
  for(let i = 0, l = coordenadas.length; i < l; i++) {
    if(coordenadas[i].nome == nome){
      return coordenadas[i].viewPos;
    }
  }
  reset();
}


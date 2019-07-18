var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('fileDisplayArea');
var t0,t1;

fileInput.addEventListener('change', function(e) {
    //dispara o contador de tempo
    t0 = performance.now();

    var file = fileInput.files[0];
    var textType = /text.*/;
    
    if (file.type.match(textType)) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var contentInicial = reader.result;
            Gerenciador(contentInicial);
        }
        reader.readAsText(file);	
    } else {
        fileDisplayArea.innerText = "File not supported!"
    }
});

function Gerenciador (contentInicial){

    //mostra conteudo do arquivo de texto
    fileDisplayArea.textContent = contentInicial;

    contentInicial = removeAcentos(contentInicial);
    document.getElementById("demo0").innerHTML = "removeAcentos: " + contentInicial.length + '<br>' + contentInicial;

    contentInicial = removeCaracEsp(contentInicial);
    document.getElementById("demo1").innerHTML = "removeCaracEsp: " + '<br>' +  contentInicial;

    contentInicial = transMaiusc(contentInicial);
    document.getElementById("demo2").innerHTML = "transMaiusc: " + '<br>' +  contentInicial;

    contentInicial = removeEspacos(contentInicial);
    document.getElementById("demo3").innerHTML = "removeEspacos: " + '<br>' + contentInicial;

    var content1 = separaPartes(contentInicial);
    document.getElementById("demo4").innerHTML = "separaPartes: " + '<br>' +  content1;

    var content2 = separaPartes(contentInicial.substring(1));
    document.getElementById("demo5").innerHTML = "separaPartes2: "  + '<br>' +  content2;
    
    contentInicial = content1.concat(content2);
    document.getElementById("demo6").innerHTML = "concat: "  + '<br>' + contentInicial;

    var content3 = contentInicial.filter( onlyUnique );
    document.getElementById("demo7").innerHTML = "onlyUnique: "  + '<br>' + content3;

    var contentFinal2 = percorreLista(contentInicial, content3);
    document.getElementById("demo10").innerHTML = "percorreLista2: " + contentFinal2; 
    
    //Finaliza a contagem de tempo
    t1 = performance.now();
    document.getElementById("demo11").innerHTML = "O processo levou " + (t1 - t0) + " milliseconds.";
}

function removeAcentos (str){
    return str.split('').map(function (letter) {
        let i = this.accents.indexOf(letter)
        return (i !== -1) ? this.out[i] : letter
      }.bind({
        accents: 'ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź',
        out: 'AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz'
      })
    ).join('')
}

function removeCaracEsp (str){
    return str.replace(/[^a-zA-Z ]/g, "")
}

function transMaiusc (str){
    return str.toUpperCase();
}

function removeEspacos (str){
    str = str.replace(/\s/g, '');
    return str;
}

function separaPartes(str){

    var parts = str.match(/.{1,2}/g) || [];
    return parts;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function percorreLista (str,stringsearch){

    //Declara a lista de duas dimenções
    var activities = new Array(2);

    //Inicializa o array
    for (var i = 0; i < str.length; i++) { 
        activities[i] = new Array(2); 
    }

    //Preenche o array
    var total = 0;
    for(var i = 0; i < stringsearch.length; i++) {
        for(var j=count=0; j<str.length; count+=+(stringsearch[i]===str[j++])){
            activities[i][0] = stringsearch[i];
            activities[i][1] = count;
            total += count;
        };
    }

    //Ordena decrescente
    activities.sort(function(a,b){ return b[1] - a[1]; });

    //Calcula as porcentagens
    for (var i = 0; i < activities.length; i++) {
        var percentage = ((activities[i][1] / total) * 100);
        activities[i][2] = percentage;
    }

    //Cria a tabela
    var text = "<table>";
    //Monta cabeçalho da tabela
    text+= 
    '<tr>' + 
        '<th>' + "Indice" + '</th>' +
        '<th>' + "Par" + '</th>' +
        '<th>' + "Q. Ocorr" + '</th>' +
        '<th>' + "Porcentagem" + '</th>' +
    '</tr>';

    //monta estrutura da tabela
    for(var i = 1; i < 101; i++) {
        text+= '<tr>' + '<td>' + i + '</td>' + '<td>' + activities[i][0] + '</td>'+ '<td>' + activities[i][1] + '</td>' + '<td>' + activities[i][2].toFixed(5).slice(0,-1) + " %" + '</td>' + '</tr>';
    }

    return text;
}

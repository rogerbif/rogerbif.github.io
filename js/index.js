var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('fileDisplayArea');

fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var textType = /text.*/;
    
    if (file.type.match(textType)) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var content = reader.result;
            //mostra conteudo do arquivo de texto
            fileDisplayArea.textContent = content;

            content = removeAcentos(content);
            document.getElementById("demo0").innerHTML = "removeAcentos: " + content;

            content = removeCaracEsp(content);
            document.getElementById("demo1").innerHTML = "removeCaracEsp: " + content;

            content = transMaiusc(content);
            document.getElementById("demo2").innerHTML = "transMaiusc: " + content;

            content = removeEspacos(content);
            document.getElementById("demo3").innerHTML = "removeEspacos: " + content;

            content = separaPartes(content);
            document.getElementById("demo4").innerHTML = "separaPartes: " + content;

            var content2 = removeDupplicadas(content);
            document.getElementById("demo5").innerHTML = "removeDupplicadas: " + content2; 
            
            content = percorreLista(content, content2);
            document.getElementById("demo6").innerHTML = "percorreLista: " + content; 
        }
        
        reader.readAsText(file);	
    } else {
        fileDisplayArea.innerText = "File not supported!"
    }
});

function removeEspacos (str){
    str = str.replace(/\s/g, '');
    return str;
}

function contaOcorrencias(str,stringsearch) {

    for(var i=count=0; i<str.length; count+=+(stringsearch===str[i++]));

    return stringsearch + " " + count + '<br>';
}

function separaPartes(str){

    var parts = str.match(/.{1,2}/g) || [];
    return parts;
}

function removeDupplicadas (str){

    var seen = {};
    var unique = [];
    var len = str.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = str[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               unique[j++] = item;
         }
    }
    return unique;
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

function percorreLista (str,stringsearch){

    var text = "";

    for(var i = 0; i < stringsearch.length; i++) {
        
        text += contaOcorrencias(str, stringsearch[i]);
    }

    return text;

}
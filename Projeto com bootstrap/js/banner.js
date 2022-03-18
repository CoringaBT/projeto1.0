

var imagens = ["imagens/destaque_home.png",
                "imagens/destaque_home_2.png"]
var i = 0
function slider_1(){
    if(i>=2){
        i = 0;
    }
        document.getElementById("slider").src = imagens[i];
        i++;
        console.log("fodas");
}

 tempo = setInterval("slider_1()", 4000);

 function stop(){
    clearInterval(tempo);
 }

 function reiniciar(){
    tempo = setInterval("slider_1()", 4000);
 }
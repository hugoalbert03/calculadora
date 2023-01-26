var tela = document.getElementById("visor")
let clear = document.getElementById("clear")
var v1 = undefined;
var v2 = undefined;

//Botões de Operadores
function adc(){
    
    if(tela.value ==! Number || tela.value.length == 0){
        tela.innerHTML = ""
    }else{
        window.document.getElementById("visor").innerHTML += "+"
    }
}

function subt(){
    if(tela.value ==! Number || tela.value.length == 0){
        tela.innerHTML = ""
    }else{
        window.document.getElementById("visor").innerHTML += "-"
    }
}

function mut(){
    if(tela.value ==! Number || tela.value.length == 0){
        tela.innerHTML = ""
    }else{
        window.document.getElementById("visor").innerHTML += "*"
    }
    
}

function dv(){
    if(tela.value ==! Number || tela.value.length == 0){
        tela.innerHTML = ""
    }else{
        window.document.getElementById("visor").innerHTML += "/"
    }
}

function mod(){
    if(tela.value ==! Number || tela.value.length == 0){
        tela.innerHTML = ""
    }else{
        window.document.getElementById("visor").innerHTML += "%"
    }
}

//Botões de número

function btn0(){
    document.getElementById("visor").innerHTML += 0
}

function btn1(){
    document.getElementById("visor").innerHTML += 1
    if(tela == 0){}
}

function btn2(){
    document.getElementById("visor").innerHTML += 2
}

function btn3(){
    document.getElementById("visor").innerHTML += 3   
}

function btn4(){
    document.getElementById("visor").innerHTML += 4
}

function btn5(){
    document.getElementById("visor").innerHTML += 5
    
}

function btn6(){
    document.getElementById("visor").innerHTML += 6
}

function btn7(){
    document.getElementById("visor").innerHTML += 7
}

function btn8(){
    document.getElementById("visor").innerHTML += 8
}

function btn9(){
    document.getElementById("visor").innerHTML += 9
}

function cl(){
    const vals = document.getElementById("visor").innerHTML
    const VlLimp = vals.replace(vals[vals.length -1],"")
    tela.innerHTML = VlLimp
 /*   if(vals.length == 1){
        tela.innerHTML = 0
    } */
}

function cleanAll(){
   document.getElementById("visor").innerHTML = ""
}

function point(){
    document.getElementById("visor").innerHTML += ","
}
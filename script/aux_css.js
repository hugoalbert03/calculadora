let vw =  document.getElementById("vw")
let botoes = document.getElementById("botoes")
let visor = document.getElementById("vcamp")
vw.style.background = "red"
vw.style.color = "white"

/* vs.onclick = function(){
    
} */
function view(){
    let desl = 0
    if(vw.value == "Modo Digitação"){
        desl = "12rem"
        vw.value = "Modo Calculadora"
        vw.style.background = "green"
        vw.style.color = "white"
        botoes.style.display = "none"
        /* vw.style["user-select"] = "none" */
    }else{
        vw.value = "Modo Digitação"
        desl = "0"
        vw.style.background = "red"
        vw.style.color = "white"
        botoes.style.display = ""
    }
    visor.style["margin-top"] = `${desl}`
    visor.style.transition = "0.5s"
}
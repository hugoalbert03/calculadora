let vs = window.document.querySelector("#visor") 
let vw =  document.getElementById("vw")
let botoes = document.getElementById("botoes")
let visor = document.getElementById("vcamp")
vs.onclick = function(){
    
}
function view(){
    let desl = 0
    if(vw.value == "Esconder Teclas ▲"){
        desl = "12rem"
        vw.value = "Mostrar Teclas ▼"
        vw.style.background = "green"
        vw.style.color = "white"
        botoes.style.display = "none"
    }else{
        vw.value = "Esconder Teclas ▲"
        desl = "0"
        vw.style.background = "red"
        vw.style.color = "white"
        botoes.style.display = ""
    }
    visor.style["margin-top"] = `${desl}`
    visor.style.transition = "0.5s"
}
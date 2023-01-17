let vw =  document.getElementById("vw")
let botoes = document.getElementById("botoes")
let visor = document.getElementById("vcamp")
let tp = document.querySelector("#type")
let tpg = document.getElementById("tipagem")
vw.style.background = "red"
vw.style.color = "white"

/* vs.onclick = function(){
    
} */
function view(){
    let desl = 0
    if(vw.value == "Modo Digitação"){
        desl = "5rem"
        vw.value = "Modo Calculadora"
        vw.style.background = "green"
        vw.style.color = "white"
        botoes.style.display = "none"
        botoes.style.transition = "2s"
        tp.innerHTML = "Digitação"
        document.body.style.background = "white"
        document.body.style.transition = "1s"
        tpg.style.color = "black"
        document.getElementById("visor").style.background="-webkit-linear-gradient(270deg,#65006e,#7c0187,#65006e)"
        document.getElementById("visor").style.color="#ffffff"
        document.getElementById("visor").style.height="15rem"
        document.getElementById("visor").style.transition="0.5s"
        document.getElementById("visor").style.padding="3rem 0"
        document.getElementById("visor").style.fontSize="35pt"
        /* vw.style["user-select"] = "none" */
    }else{
        vw.value = "Modo Digitação"
        desl = "0"
        vw.style.background = "red"
        vw.style.color = "white"
        botoes.style.display = ""
        botoes.style.transition = "2s"
        tp.innerHTML = "Calculadora"
        document.body.style.background = "#3a3a3a"
        document.body.style.transition = "1s"
        tpg.style.color = "white"
        document.getElementById("visor").style.background="-webkit-linear-gradient(270deg,#0095cf,#00b7ff,#0095cf)"
        document.getElementById("visor").style.fontSize="30pt"
        document.getElementById("visor").style.color="#000000"
        document.getElementById("visor").style.height="5rem"
        document.getElementById("visor").style.transition="0.5s"
        document.getElementById("visor").style.padding="0rem 0"
    }
    visor.style["margin-top"] = `${desl}`
    visor.style.transition = "0.5s"
}
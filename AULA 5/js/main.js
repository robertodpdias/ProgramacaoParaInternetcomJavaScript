

function clicou(){
    var x = "teste de innerHTML"
    // alert("Obrigado por clicar!!!")

    document.getElementById("agrade").innerHTML = x;

    // console.log(document.getElementById("agrade"))

    document.getElementById("ag").innerHTML = "<b> Testo em negrito E redireciona </b>";
    
}

function redirecionar(){
    window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";

}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui"
    elemento.innerHTML = "Obrigado por passar o mouse aqui"
    // alert("Trocar texto")
}


function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"    
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
//FUNÇÃO SOMA
function soma(n1, n2){
    return n1 + n2;

}
alert(soma(5, 1));
*/

/*
//FUNÇÃO REPLACE
function batata(frase, nome, nome_nome){
    return frase.replace(nome, nome_nome)
}
alert(batata("Vai Japão", "Japão", "Brasil"));
*/

// FUNÇÃO VALIDAR IDADE
var validar; //variavel global, representado por var e está fora da função
function validarIdade(idade){  
    if(idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar)

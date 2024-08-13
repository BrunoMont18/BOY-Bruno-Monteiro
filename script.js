//let titulo = document.etElementById("titulo").value;
//console.log(titulo)



function submeter () {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("Idade").value;
    
//    console.log(nome);
    console.log(validaCPF(cpf));

}

function validaCPF(cpf) {
    if(cpf == "") {
        alert("Campo cpf não pode ser vazio");
        return false;
    }
    
    
cpf = cpf.trim();

/(a-zA-Z)/.test(cpf) {
    alert("CPF náo pode conter letras")
    return false
}

if(!/^[\d.-]/.test(cpf)) {
    alert ("CPF so pode conter numeros, ',' ou '-'")
    return false


}


//Continuar validação
// Formatos CPFs válidos:
//123.456.789-10
// 12345678910

    return true;
}




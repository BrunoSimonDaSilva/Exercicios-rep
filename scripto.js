document.addEventListener("click", (event) => {
    if (event.target.matches(".btn1") == true) {
        atividade1();
    }
    if (event.target.matches(".btn2") == true) {
        atividade2();
    }
    if (event.target.matches(".btn3") == true) {
        atividade3();
    }
})

function atividade1() {
    let n1 = Number(prompt("Digite um valor entre 0 e 10: "));
    let resp1 = document.getElementById(1);
    while (n1 < 0 || n1 > 10) {
        n1 = Number(prompt("digite um valor valido"));
    }
    resp1.textContent = ("O valor Digitador é " + n1);

}

function atividade2() {
    let nome = prompt("Digite seu nome: ");
    let senha = prompt("Digite sua senha:");
    let resp2 = document.getElementById(2);
    while (nome === senha) {
        senha = prompt("Valor invalido: Digite sua senha:[não pode conter nome igual ao usuario.] ")
    }
    resp2.textContent = ("Seu usuario é: " + nome + ", e sua senha é: " + senha);
}

function atividade3() {
    let resp3 = document.getElementById(3);
    let nome = prompt("Digite seu nome: ");
    let idade = Number(prompt("Digite sua idade: entre 0 à 150: "));
    while(nome <= nome.length){
        nome = prompt("Digite um nome acima de 3 caracteres: ");
    }
    

}

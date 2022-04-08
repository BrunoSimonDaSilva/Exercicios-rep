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
    resp1.textContent = ("O valor Digitado é " + n1);

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
    let resp3 = document.getElementById(1515);
    let nome = prompt("Digite seu nome: ");
    let idade = Number(prompt("Digite sua idade: entre 0 à 150: "));
    let salario = Number(prompt("Digite o valor do seu salario: "));
    let sexo = prompt("Digite o sexo biológico: ");
    let  Estciv = prompt("Digite seu  Estado Civil: ");
    while(nome < nome.length){
        nome = prompt("Digite um nome acima de 3 caracteres: ");
    }
    while(idade <= 0 || idade >= 150){
        idade = Number(prompt("Digite sua idade: ENTRE 0 à 150: "));
    }
    while(salario <= 0){
        salario = Number(prompt(" Error, valor deve ser maior que 0: "));
    }
    while(sexo.toLocaleLowerCase != "f" || sexo.toLocaleLowerCase != "m"){
        sexo = prompt("Digite o sexo BIOLÓGICO: ");
    }
    while(Estciv != 's' || Estciv != 'c' || Estciv != 'v' || Estciv != 'd'){
        Estciv = prompt("Valor inválido digite seu estádo civil");
    }
    resp3.textContent(`"Nome é ${nome}, sua idade é ${idade}, o salário é R$${salario}, o sexo é ${sexo.toLocaleUpperCase()}, estado civíl ${Estciv} "`)
}
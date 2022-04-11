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
    if (event.target.matches(".btn4") == true) {
        atividade4();
    }
    if (event.target.matches(".btn5") == true) {
        atividade5();
    }
    if (event.target.matches(".btn5") == true) {
        atividade6();
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
    let resp3 = document.getElementById(3);
    let nome = prompt("Digite seu nome: ");
    let idade = Number(prompt("Digite sua idade: entre 0 à 150: "));
    let salario = Number(prompt("Digite o valor do seu salario: "));
    let sexo = prompt("Digite o sexo biológico: ");
    let Estciv = prompt("Digite seu  Estado Civil: ");
    while (nome.length < 3) {
        nome = prompt("Digite um nome acima de 3 caracteres: ");
    }
    while (idade <= 0 || idade >= 150) {
        idade = Number(prompt("Digite sua idade: ENTRE 0 à 150: "));
    }
    while (salario <= 0) {
        salario = Number(prompt(" Error, valor deve ser maior que 0: "));
    }
    while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
        sexo = prompt("Digite o sexo BIOLÓGICO: ");
    }
    while (Estciv.toLowerCase() != "s" && Estciv.toLowerCase() != "c" && Estciv.toLowerCase() != "v" && Estciv.toLowerCase() != "d") {
        Estciv = prompt("Valor inválido digite seu estádo civil");
    }
    resp3.textContent = (`"Nome é ${nome}, sua idade é ${idade}, o salário é R$${salario}, o sexo é ${sexo.toLocaleUpperCase()}, estado civíl ${Estciv} "`);
}

function atividade4() {
    let resp4 = document.getElementById(4);
    let anos = Number();
    let A = 80000;
    let B = 200000;
    let crescA = 0.03;
    let crescB = 0.015;
    while (A < B) {
        A = A + (A * crescA);
        B = B + (B * crescB);
        anos++;
    }
    resp4.textContent = (`"Após ${anos} anos a polulalção A passará a população B"`);
}

function atividade5() {
    let resp5 = document.getElementById(5);
    let anos = Number();
    let A = Number(prompt("Digite o número da população A: "));
    let B = Number(prompt("Digite o número da população B: "));
    let crescA = Number(prompt("Digite o número do crescimento A: "));
    let crescB = Number(prompt("Digite o número do crescimento B: "));
    while (A < B) {
        A = A + (A * crescA);
        B = B + (B * crescB);
        anos++;
    }
    resp5.textContent = (`"Após ${anos} anos a polulalção A passará a população B"`);
}

function atividade6() {
    resp6 = document.getElementById(6);
    for (let n1 = 1; n1 = 21; n1++){
        resp6.textContent = <p>n1</p>;
    }
}
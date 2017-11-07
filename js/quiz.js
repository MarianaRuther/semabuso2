var pergunta = 1;
var contSim = 0;
var contNao = 0;
var sim = document.getElementById("botaoQuiz1");

function quizManager() {
    if (pergunta == 1) {
        perguntas2();
    } else if (pergunta == 2) {
        perguntas3();
    } else if (pergunta == 3) {
        perguntas4();
    } else if (pergunta == 4) {
        perguntas5();
    } else if (pergunta == 5) {
        fim();
    }
}

function perguntas2() {
    document.getElementById("pergunta").innerHTML = "Pergunta 2: Seu companheiro (a) interfere nas suas redes sociais vigiando quem você segue, o que curte, compartilha, comenta e ainda reclama se você seguir amigos ou colegas específicos?";
    document.getElementById("gif1").src = "img/gifquiz2.gif";
    pergunta = 2;
    console.log(pergunta);
}

function perguntas3() {
    document.getElementById("pergunta").innerHTML = "Pergunta 3: Você ameniza alguma atitude rude do seu parceiro (a) quando vai explicar algo à alguém, colocando a culpa em você ou no fato dele (a estar cansado (a) ou estressado (a)?";
    document.getElementById("gif1").src = "img/gifquiz3.gif";
    pergunta = 3;
    console.log(pergunta);
}

function perguntas4() {
    document.getElementById("pergunta").innerHTML = "Pergunta 4: Seu parceiro (a) não aceita o 'não' quando ele (a) quer algo e você acaba fazendo o que ele (a) quer, mesmo não sendo da sua vontade?";
    document.getElementById("gif1").src = "img/gifquiz4.gif";
    pergunta = 4;
}

function perguntas5() {
    document.getElementById("pergunta").innerHTML = "Pergunta 5: Se um não sai sozinho com os amigos, o outro também não pode. Acaba nenhum dos dois possuindo vida social fora do relacionamento.";
    document.getElementById("gif1").src = "img/gifquiz5.gif";
    pergunta = 5;
}

document.getElementById("botaoQuiz1").onclick = function () {
    contSim++;
    console.log(contSim);
    quizManager();
}

document.getElementById("botaoQuiz2").onclick = function () {
    contNao++;
    console.log(contNao);
    quizManager();
}

function fim() {
    console.log(contSim);
    console.log(contNao);

    if (contSim >= 3) {
        window.location.href = "resultsim.html";
    }

    else {
        window.location.href = "resultnao.html";
    }
}
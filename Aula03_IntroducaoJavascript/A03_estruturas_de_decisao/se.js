/*operador ternário
var numero = 67;

console.log(numero % 2 == 0 ? "número par" : "número ímpar");

//console.log(nota >=7 ? "o aluno foi aprovado.": "o aluno não foi aprovado.");
*/

var nota = 6;
var notaValida = nota >=0 && nota<=10
/*
if(notaValida && nota < 3){
    console.log("o aluno foi reprovado.");
}else if(notaValida && nota < 7){
    console.log("o aluno está de recuperação");
}else{
    console.log("o aluno foi aprovado.");
}
*/
if(notaValida && nota >= 7){
    console.log("o aluno foi aprovado.");
}else if(notaValida && nota >= 3){

    console.log("o aluno está de recuperação");

    nota = 8;

    if(notaValida && nota >= 5){
        console.log("o aluno está aprovado");
    }else if(notaValida){
        console.log("o aluno está reprovado");
    }else{
        console.log("nota inválida");
    }
}
else if(notaValida){
    console.log("o aluno foi reprovado.");
}else{ 
    console.log("nota inválida");
}
var codigo = 101, quantidade = 2;

switch(codigo){
    case 100 : 
        var total = quantidade * 1.2;
        console.log(quantidade+" cachooro(s) quente = R$ "+total);
    break;

    case 101 : 
        var total = quantidade * 1.3;
        console.log(quantidade+" bauru(s) simples = R$ "+total);
    break;

    case 102 : 
        var total = quantidade * 1.5;
        console.log(quantidade+" bauru(s) com ovo = R$ "+total);
    break;

    case 103 : 
        var total = quantidade * 1.2;
        console.log(quantidade+" hambúrger(s) = R$ "+total);
    break;

    case 104 : 
        var total = quantidade * 1.3;
        console.log(quantidade+" cheese(s) burger(s) = R$ "+total);
    break;

    case 105 : 
        var total = quantidade * 1;
        console.log(quantidade+" refrigerante(s) = R$ "+total);
    break;

    default: console.log("produto inexistente.");

}


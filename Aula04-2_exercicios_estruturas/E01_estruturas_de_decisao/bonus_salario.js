

function contraCheque(salario,tempoDeServico){

    return tempoDeServico >=5 ? salario * 20/100 : salario * 10/100; 
}

console.log(contraCheque(1000,2));

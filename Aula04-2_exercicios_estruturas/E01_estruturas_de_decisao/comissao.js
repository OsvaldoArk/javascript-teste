function calculaComissao(valorTotalVendido){

    var comissao = 0;
    var salario = 1200;

    if(valorTotalVendido > 2000){
        comissao = valorTotalVendido * 10/100;
    
        salario += comissao;
    }

    console.log("salário: "+salario+" comissao: "+comissao);
}

calculaComissao(1000);
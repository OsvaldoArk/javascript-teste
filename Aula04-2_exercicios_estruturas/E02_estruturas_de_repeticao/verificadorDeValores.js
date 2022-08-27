function executa(){
    var continua = true;
    var soma = 0, contador = 0, positivos = 0,negativos =0;

    while(continua){

        var valor = prompt("digite um valor: ");

        if(valor != 0){
            soma+=Number(valor);
            
            valor > 0 ? positivos++ : negativos++; 
            
            contador++;
        }else{

            continua = false;
        }

        var media = soma / contador;

        var porcentagemPositivos = positivos / contador * 100;

        var porcentagemNegativos = 100 - porcentagemPositivos;

        console.log("média: "+media+" positivos: "+positivos+" porcentagem: "+porcentagemPositivos+" negativos: "+negativos+" porcentagem "+porcentagemNegativos);
    }
}
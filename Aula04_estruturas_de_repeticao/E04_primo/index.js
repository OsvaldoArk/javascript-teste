var divisores = 0, numero = 293;

for(var divisor = 1; divisor <= numero; divisor++){
    if(numero % divisor == 0){
        divisores++;
    }
}

if(divisores == 2)
    console.log("é primo");
else
    console.log("não é primo");
function fatorial(numero){

    fat = 1;

    while(numero>0){
        fat*=numero;

        numero--;
    }
    console.log(fat);
}

fatorial(6);
var altura = 1.63, sexo = 'm';

if(sexo == 'm'){
    peso = 72.7*altura - 58;
}else{
    peso = 62.1*altura - 44.7;
}
console.log(peso);

console.log(sexo == 'f' ? 62.1*altura - 44.7 : 72.7*altura - 58);
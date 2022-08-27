var sessao = true,opcao = 0, saldo = 0;

while(sessao){
  console.log("1-ver saldo");
  console.log("2-deposito");
  console.log("3-saque");
  console.log("4-finalizar");
  opcao = prompt('escolha uma opcao');
    
  switch(opcao){
    case "1" : console.log(saldo); break;
      
    case "2" : 
      var deposito = prompt("digite o valor");
      saldo = saldo + Number(deposito);
      break;
      
    case "3" : 
      var saque = prompt("digite o valor");
      saldo = saldo - Number(saque);
      break;
    case "4": sessao = false; break;
      
    default : console.log("opção inválida");
  }
}

function classificarProduto(codigo){

    var categoria = '';

    switch(codigo){
        case 1: categoria = "produto não perecível";
                break;

        case 2: case 3: case 4: 
                categoria = "produto perecível";
                break;
        
        case 5: case 6:
                categoria = "vesturário";
                break;
        
        case 7: categoria = "higiene pessoal";
                break;
        
        case 8: case 9: case 10:
                categoria = "utensílios domésticos";
                break;

        default: console.log("código inválido");
    }
    console.log(categoria);
}

classificarProduto(8);
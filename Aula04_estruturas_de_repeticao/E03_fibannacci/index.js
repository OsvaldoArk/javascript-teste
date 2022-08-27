a = 1, b = 0, c = 0,contador=1;

while(contador <= 100){
    c = a + b;
    a = b;
    b = c;
    console.log(c);

    contador++;
}


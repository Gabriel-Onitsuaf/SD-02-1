// Sustituyendo los múltiplos de 3 por "Fizz" en la impresión de números del 1 al 105.

for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0 ) {
        console.log("Fizz");
    }else {
        console.log(i);
    }
}
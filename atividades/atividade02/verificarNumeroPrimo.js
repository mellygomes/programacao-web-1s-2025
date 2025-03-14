// Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);
// A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.

function verificarNumeroPrimo(n) {
    if (n <= 1) return false //0 e 1 são exceções

    if (n % 2 == 0 && n != 2) return false
    //Sempre procurar diminuir a quantidadade de testes
    for (i = 3; i < n; i += 2) {
        if (n % i == 0) return false
    }

    return true
}

console.log(verificarNumeroPrimo(0)) //false
console.log(verificarNumeroPrimo(1)) //false
console.log(verificarNumeroPrimo(2)) //true
console.log(verificarNumeroPrimo(3)) //true
console.log(verificarNumeroPrimo(7)) //true
console.log(verificarNumeroPrimo(83)) //true
console.log(verificarNumeroPrimo(100)) //false
console.log(verificarNumeroPrimo(991)) //true
console.log(verificarNumeroPrimo(104729)) //true
console.log(verificarNumeroPrimo(14348907)) //false

//O operador '===' testa o valor e também o tipo de dado
//Ex: "0" === 0 retorna falso, enquanto 0 === 0 retorna true
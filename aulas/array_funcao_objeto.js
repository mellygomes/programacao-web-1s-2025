// atividade um utilizando funcao e array ===================================

let a = 10;
let b = 15;
let res;
const operacoes = ["+", "-", "*", "/"]

function imprimirResultado(operando1, operando2, result, operacao) {
    console.log(`Resultado de ${operando1} ${operacao} ${operando2} = ${result}`)
}

res = a + b; 
imprimirResultado(a, b, res, operacoes[0])

res = a - b; 
imprimirResultado(a, b, res, operacoes[1])

res = a * b; 
imprimirResultado(a, b, res, operacoes[2])

res = a / b; 
imprimirResultado(a, b, res, operacoes[3])

//matrizes ==================================================================
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 8]
]

function imprimirMatriz(matriz_a) {
    
    for (let i = 0; i < matriz_a.length; i++) {
        let linha = ""
        for (let j = 0; j < matriz_a[i].length; j++) {
            linha += matriz_a[i][j] + "\t"
        }
        console.log(linha)
    }   
}

imprimirMatriz(matriz)

//Objetos ====================================================================
let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
}

console.log(capitais.DF + " - " + capitais.DDD_DF)

for (const key in capitais) {
    console.log(key + " - " + capitais[key])
}

//Estruturas de controle ======================================================
function verificarNumeroPar(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }  
}

console.log(verificarNumeroPar(3))
console.log(verificarNumeroPar(6))
//Implemente a função transporMatriz(A);
//A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta

function transporMatriz(A) {
    let n_linhas = A.length
    let n_colunas =  A[0].length

    let M = new Array(n_colunas).fill(null).map(() => new Array(n_linhas)); 

    for (let j = 0; n_linhas > j; j++) {
        for (let i = 0; n_colunas > i; i++) {
            M[i][j] = A[j][i]
        }
    }

    return M
}

function imprimirMatriz(A) {
    
    for (let i = 0; i < A.length; i++) {
        let linha = ""
        for (let j = 0; j < A[i].length; j++) {
            linha += A[i][j] + "\t"
        }
        console.log(linha)
    }   
}

let matriz = [  //     ===>      [1, 4]
    [1, 2, 3],  //    matriz     [2, 5]
    [4, 5 ,6]   //  transposta   [3, 6]
]               

console.log("\nMatriz original: \n")
imprimirMatriz(matriz)

console.log("\nMatriz transposta: \n")
imprimirMatriz(transporMatriz(matriz))
console.log("\n")
// Callback Functions

// Callback Function é uma função que espera uma ação, um retorno, para só então executar uma função.
// 'callback' é inserido como parâmetro dentro de outra função para que, em sua chamada, possa-se se referir a outra função.

function exibir(resultado){ 
    console.log(resultado)
}

function somar(a, b, callback){ // <--- Callback Function
    operação = a+b
    callback(operação)
}

function multiplicar(a, b, callback){ // <--- Callback Function
    operação = a*b
    callback(operação)
}

somar(1,2,exibir)
multiplicar(1,2,exibir)

// -----------------
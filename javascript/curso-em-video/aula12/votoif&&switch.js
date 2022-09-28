var idade = 24

if (idade<16) {
    a=0
} else if (idade<18) {
    a=1
} else {
    a=2
}

switch (a) {
    case 0:
        console.log(`Com ${idade} anos, o voto é proibido.`)
        break;

    case 1:
        console.log(`Com ${idade} anos, o voto é opcional.`)
        break;

    case 2:
        console.log(`Com ${idade} anos, o voto é obrigatório.`)
        break;
    
    default:
        console.log(`[ERRO] Idade inválida.`)
        break;
}

let numero = Number(prompt('Digite um número:'))
/*
if ((numero % 2) === 0){
    console.log(`O número: ${numero}, é divisível por 2.`)
    
    if ((numero % 3) === 0){
        console.log(`O número: ${numero}, é divisível por 3.`)
    } else {
        console.log(`O número: ${numero}, não é divisível por 3.`)
    }

} else {
    console.log(`O número: ${numero}, não é divisível por 2.`)
}
*/


if (((numero % 2) === 0) || ((numero % 3) === 0)) {
    console.log(`O número: ${numero}, é divisível por 2 ou por 3.`)
} else {
    console.log(`O número: ${numero}, não é divisível por 2 ou por 3.`)
}

/* TESTANDO COM &&

if (((numero % 2) === 0) && ((numero % 3) === 0)) {
    console.log(`O número: ${numero}, é divisível por 2 e por 3.`)
} else {
    console.log(`O número: ${numero}, não é divisível por 2 e por 3.`)
}
*/
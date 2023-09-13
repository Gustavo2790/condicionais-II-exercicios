/*
let nacionalidade = prompt("Digite aqui sua nacionalidade:").toLowerCase()

if(nacionalidade === "brasileira"){
    console.log("A pessoa é do Brasil!")
} else if(nacionalidade === "argentina"){
    console.log("A pessoa é da Argentina!")
} else if(nacionalidade === "uruguaia"){
    console.log("A pessoa é do Uruguai!")
} else if(nacionalidade === "chilena"){
    console.log("A pessoa é do Chile!")
} else if(nacionalidade === "colombiana"){
    console.log("A pessoa é da Colômbia!")
} else{
    console.log("Nacionalidade não encontrada!")
}
*/

let nacionalidade = prompt("Digite aqui sua nacionalidade:").toLowerCase()

switch (nacionalidade){
    case "brasileira":
        console.log(`A pessoa é ${nacionalidade}`)
        break
    case "argentina":
        console.log(`A pessoa é ${nacionalidade}`)
        break
    case "uruguaia":
        console.log(`A pessoa é ${nacionalidade}`)
        break
    case "chilena":
        console.log(`A pessoa é ${nacionalidade}`)
        break
    case "colombiana":
        console.log(`A pessoa é ${nacionalidade}`)
        break
    default:
        console.log('Nacionalidade não encotrada')

}


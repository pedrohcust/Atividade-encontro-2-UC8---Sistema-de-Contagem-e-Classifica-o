//Sistema de contagem

let listaDeAlunos = 5;

for(let index = 0; index <= listaDeAlunos; index++) {
    console.log(index)
    if(index == 0) {
        console.log("Zero localizado")
    } else if(index % 2 != 0) {
        console.log("Número ímpar localizado")
    } else {console.log("Número par localizado")}
}

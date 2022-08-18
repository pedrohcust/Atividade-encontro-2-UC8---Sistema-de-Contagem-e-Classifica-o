//Sistema de classificação

let listaAlunos = ["Pedro", "William", "Maicon", "Rafael", "Rhichyllie"];

    for (let index = 0; index < listaAlunos.lenght; index++) {
        console.log(index)
        if (index = 0) {
            console.log("Zero localizado: "  + listaAlunos[index])
        } else if (index % 2 != 0) {
            console.log("Número ímpar localizado: "  + listaAlunos[index])
        } else {console.log("Número par localizado: "  + listaAlunos[index])}
    }
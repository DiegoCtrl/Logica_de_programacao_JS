let candidatos = 
    {
        22 : {candidato: "jaira", numeroDeVotos:0},
        13 : {candidato: "lurdes", numeroDeVotos:0},
        30 : {candidato: "amoeda", numeroDeVotos:0},
        0 : {candidato: "branco", numeroDeVotos:0},
        nulos : {candidato: "Nulos", numeroDeVotos:0},
    }

const numeroCandidato = Object.keys(candidatos)

do {
    let voto = prompt("Em quem você vota: ")
    if (numeroCandidato.includes(voto)) {
        candidatos[voto].numeroDeVotos += 1
    }
    else{
    candidatos.nulos.numeroDeVotos += 1
    }
    continua = prompt("Continuar votando?\n1: Sim\n2: Não ")
} while (continua == 1);
console.log(candidatos)

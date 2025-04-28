let times=[
    {
     nome: "Joinvile",
     goleiro:"Matheus",
     fixo:"Henrique",
     AlaDireito:"Bateria",
     AlaEsquerdo:"Xuxa",
     pivo:"Dieguinho",
     tecnicos:"Herick",
     vitorias:0,
     derrotas:0,
    },
 
     {
      nome: "Marreco",
      goleiro:"Juba",
      fixo:"André",
      AlaDireito:"Canhoto",
      AlaEsquerdo:"Ligeiro",
      pivo:"Fabinho",
      tecnicos:"Banana",
      vitorias:0,
      derrotas:0,
     },  
  
        
  
     {
      nome: "Cascavel",
      goleiro:"Jackson",
      fixo:"Carlão",
      AlaDireito:"Russo",
      AlaEsquerdo:"Micuim",
      pivo:"Vitinho",
      tecnicos:"Deividy",
      vitorias:0,
      derrotas:0,
     },    
  
        
  
     {
      nome: "Magnus",
      goleiro:"André Deko",
      Fixo:"Capita",
      AlaDireito:"Leandro Lino",
      AlaEsquerdo:"Dieguinho",
      pivo:"Lucão",
      tecnicos:"Douglão",
      vitorias:0,
      derrotas:0,
     },
  
        
     {
      nome: "Campo Mourão",
      goleiro:"Cauã",
      fixo:"Andrei",
      AlaDireito:"Jabá",
      AlaEsquerdo:"Formiga",
      pivo:"Dé",
      tecnicos:"Daniel Jr",
      vitorias:0,
      derrotas:0,
     },    
  ]

function verTimes(){
    times.forEach((time)=> {
        console.log(time.nome + " - jogadores: " + " goleiro - " + time.goleiro + ", Fixo - " + time.fixo + ", Alá Direito - " + time.AlaDireita + ", Alá Esquerdo - " + time.AlaEsquerdo + ", Pivô - " + time.pivo + ", Técnico - " + time.tecnico + ", Vitórias " + time.vitorias + ", Derrotas " + time.derrotas)
    })
}

function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmTexto);
    console.log("Arquivo criado");
}

criarArquivo()
function marcarJogos(timeA, timeB, estadio, data, horario){
    let jogos=require("./jogos.json");
    jogo ={
        timeA: timeA,
        timeB: timeB,
        estadio: estadio,
        data: data,
        horario: horario,
    }
    jogos.push(jogo);
    jogosJSON = JSON.stringify(jogos);
    const fs=require('fs');
    fs.writeFileSync("jogos.json", jogosJSON);
}

marcarJogos("Pato Futsal", "Marreco", "Ginásio Patão", "15/05/2025", "20:00")

//criarArquivo();

function mostrarJogos(){
    let jogos = require("./jogos.json");
    jogos.forEach((jogo)=>{
        console.log(jogo.timeA + " - " + jogo.timeB + " - " + jogo.estadio + " - " + jogo.data + " - " + jogo.horario + " - ")
    });
}
mostrarJogos();

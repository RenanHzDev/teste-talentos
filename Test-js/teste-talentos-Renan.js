const pessoas = [
  { id: 1, nome: "Juan", idade: 20, sexo: "M" },
  { id: 2, nome: "Andre Ruan", idade: 35, sexo: "M" },
  { id: 3, nome: "Annah Marcelly", idade: 15, sexo: "F" },
  { id: 4, nome: "Gabriela Giovana Ceranto Pitoni", idade: 33, sexo: "F" },
  { id: 5, nome: "Giovanna Santa Brigida Pinheiro", idade: 18, sexo: "F" },
  { id: 6, nome: "Jose Fellipe Rabelo Pereira", idade: 17, sexo: "M" },
  { id: 7, nome: "Michele Dos Santos Mattos", idade: 32, sexo: "F" },
  { id: 8, nome: "Nelson Reis Sousa", idade: 21, sexo: "M" },
  { id: 9, nome: "Renan Povoas Heizelmann", idade: 21, sexo: "M" },
  { id: 10, nome: "Hudson Ferreira Soares", idade: 21, sexo: "M" },
  { id: 11, nome: "Evani Moreira Da Silva", idade: 31, sexo: "F" },
];

// 1. Escreva uma função que retorne somente as mulheres maiores de 18 anos

function mulheresMaiores18(pessoas) {
  for (var i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    if (pessoa.idade > 18 && pessoa.sexo === "F") {
      console.log(pessoa);
    }
  }
}

mulheresMaiores18(pessoas);

// 2. Escreva uma função que retorne se existe uma pessoa com exatamente 15 anos

function pessoa15Anos(pessoas) {
  var pessoasCom15Anos =0;

  for (var i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    
    if (pessoa.idade === 15) {
      pessoasCom15Anos = pessoasCom15Anos + 1;
    }
  }

  if (pessoasCom15Anos === 1) {
    console.log("Existe exatamente 1 pessoa com 15 anos");
  } else if (pessoasCom15Anos === 0) {
    console.log("Não tem pessoas com 15 anos");
  } else {
    console.log("Tem mais de uma pessoa com 15 anos");
  }
}

pessoa15Anos(pessoas);

const profissoes = [
  { pessoaId: 1, nome: "Motorista" },
  { pessoaId: 2, nome: "Arquiteta" },
  { pessoaId: 4, nome: "Dentista" },
  { pessoaId: 5, nome: "Advogada" },
  { pessoaId: 6, nome: "Programador" },
  { pessoaId: 7, nome: "Desenvolvedora" },
  { pessoaId: 9, nome: "Desenvolvedor" },
  { pessoaId: 10, nome: "Professora" },
];

// 3. Escreva uma função que relacione as pessoas com as profissões

function profissoesPessoas(profissoes, pessoas) {
  for (var i = 0; i < profissoes.length; i++) {
    const pessoa = profissoes[i];
  }

  return pessoa;
}

// Pessoas sem profissoes devem ter a profissão como null

// 4. Escreva uma função que retorne somente o nome e a idade das pessoas sem profissão

function nomeIdade(pessoas) {

  var novaListaNomes = []

  for (var i = 0; i < pessoas.length; i++) {
    novaListaNomes.push({
      nome: pessoas[i].nome, idade: pessoas[i].idade
    });
  }

  return novaListaNomes;
}

// Dado  a lista de notas abaixo, resolva a(s) questão(ões) a seguir.
const notas = [5, 8, 9, 10];

// 5. Escreva uma função que retorne a médias das notas

function mediaNotas(notas) {
  var notasTotais = 0;

  for (var i = 0; i < notas.length; i++) {
    notasTotais = notasTotais + notas[i];
  }

  var media = notasTotais / notas.length;

  return media;
}

// Dado as listas de objetos abaixo, resolva a(s) questão(ões) a seguir.

const carros = [
  { id: 1, modelo: "Gol", preco: 20000.0, cor: "branco" },
  { id: 2, modelo: "Uno", preco: 10000.0, cor: "azul" },
  { id: 3, modelo: "Onix", preco: 30500.0, cor: "branco" },
  { id: 4, modelo: "Citroen", preco: 40600.0, cor: "preto" },
];

// 6. Faça uma função que remova os carros de cor branca da lista e a retorne.

function remocaoDeCarrosBrancos(carros) {
  for (var i = 0; i < carros.length; i++) {
    if (carros[i].cor === "branco") {
      carros.splice(i, 1);
    }
  }  

  return carros;
}

// 7. Faça uma função que inclua novos carros na lista, passando como parâmetro um objeto com os mesmos atributos dos existentes na lista.

const NOVOS_CARROS = [
  { id: 5, modelo: "Palio", preco: 20000.9, cor: "Rosa pink" },
];

function incluirNovosCarros(lista, novosCarros) {
  
  const propriedadesNescessarias = ['id', 'modelo', 'preco', 'cor'];
  
  for (let caorr of novosCarros) {
    if (propriedadesNescessarias.every(prop => prop in carro)) {
      lista.push(carro);
    } else {
      console.log("Atributos errados");
    }
  }

  return lista;
}

console.log(incluirNovosCarros(carros, NOVOS_CARROS));

// 8. Faça uma função que receba um valor n e exiba na tela os múltiplos de 3 até n. Exemplo:
// N = 16
// Saída: 3 – 6 – 9 – 12 – 15

const NUMERO_DESEJADO_1 = 16;

function muntiplosDe3(NUMERO_DESEJADO_1) {
  var numerosMultiplos = []

  for (var i = 3; i <= NUMERO_DESEJADO_1; i++) {
    if (i % 3 === 0) {
      numerosMultiplos.push(i);
    }
  }

  return numerosMultiplos;
}

console.log(muntiplosDe3(NUMERO_DESEJADO_1));

// 9. Faça uma função que receba um nº inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.

const NUMERO_DESEJADO_2 = -9;

function verificarNumero(numero) {
  if (numero % 2 === 0) {
    if (numero > 0) {
      console.log("Esse número é par e positivo.");
    } else if (numero < 0) {
      console.log("Esse número é par e negatico.");
    } else {
      console.log("É um zero.");
    }
  } else {
    if (numero > 0) {
      console.log("Esse número é ímpar e positivo.");
    } else if (numero < 0) {
      console.log("Esse número é ímpar e negativo.");
    } else {
      console.log("É um zero.");
    }
  }
}

verificarNumero(NUMERO_DESEJADO_2);

// 10. Faça uma função para ler um texto e, em seguida, exiba o mesmo com suas palavras na ordem inversa.
// Exemplo:
// Entrada: Quero trabalhar na Squadra Tecnologia
// Saida: Tecnologia Squadra na trabalhar Quero

const ENTRADA_1 = "Quero trabalhar na Squadra Tecnologia";

function inverterOrdemTexto(texto) {

  const palavrasSeparadas = ENTRADA_1.split(' ');

  const palavrasInvertidas = palavrasSeparadas.reverse(' ');

  const textoInvertido = palavrasInvertidas.join(' ');

  return textoInvertido;
}

const saida = inverterOrdemTexto(ENTRADA_1)
console.log(saida)

// 11. Faça uma função que receba uma matriz e retorne os valores da diagonal da esquerda para a direita.
/*  Exemplo:
  Entrada:	1  2  3
            4  5  6
            7  8  9
  Saida: 159
*/
const MATRIZ = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalMatriz(MATRIZ) {

  var numerosNaDiagonal = [];

  for (var i = 0; i < MATRIZ.length; i++) {
    for (var j = 0; j < MATRIZ[i].length; j++){
      if (i === j) {
        numerosNaDiagonal.push(MATRIZ[i][j]);
      }
    }
  }

  return numerosNaDiagonal;
}

// 12. Faça uma função que altere todos os valores de uma string pelo texto desejado
// Em todos os lugares que estiver ***, altere para: caminho

let TEXTO_STRING = `Em cada passo da jornada, o *** se revela diante de nós. O *** da vida é cheio de escolhas, e cada escolha molda o nosso *** único. Às vezes, o *** é claro e iluminado, enquanto em outros momentos, ele se torna desafiador e íngreme. Independentemente dos obstáculos, seguimos nosso *** com determinação. Cada amanhecer nos presenteia com um novo trecho do *** a ser explorado. Assim, abraçamos cada curva e encruzilhada, sabendo que é no próprio *** que encontramos a verdadeira essência da jornada.`;

const PALAVRA_PARA_TROCAR = "caminho";

function alterarPalavras (textoString, palavraASerTrocada, palavraParaTrocar) {

  const textoSeparado = textoString.split(' ');

  for (var i = 1; i < textoSeparado.length; i++)
    if (textoSeparado[i] === palavraASerTrocada) {
      textoSeparado[i] = palavraParaTrocar
  }

  const novoTexto = textoSeparado.join(' ');

  return novoTexto;
}

const saida1 = alterarPalavras(TEXTO_STRING, "***", PALAVRA_PARA_TROCAR);
console.log(saida1);

// 13. Funcao que adicione novos itens ao objeto primitivo

let OBJETO_PRIMITIVO = {
  attachments: {
    cityId: "19992",
  },
  offers: [
    { id: "offer_1", price: 19.9, downloadSpeed: 400 },
    { id: "offer_2", price: 30.9, downloadSpeed: 600 },
    { id: "offer_3", price: 40.9, downloadSpeed: 700 },
  ],
};

// A) altere o cityId para "cityid_19992"

// B) adicione mais uma oferta ao array de offers com id: "offer_4" price: 59.90 e downloadSpeed: 900

// C) alter o preço da oferta com id "offer_1" para 35.75

// D) adicione a velocidade de upload no objeto de cada oferta sendo 50% da velocidade de download

function alteradorCityID (objetoA) {
  objetoA.attachments.cityId = "cityid_19992";
} 

function adicionarOffer (objetoB, novaOferta) {
  objetoB.offers.push(novaOferta);
}

function alterarPreco (objetoC, idOferta, ofertaNova) {

  const offers = objetoC.offers

  for (var i = 1; i < offers.length; i++) {
    if (offers[i].id === idOferta) {
      offers[i].price = ofertaNova
      break;
    }
  }
}

function adicionarUploadOffer (objetoD) {

  for (var i = 1; i < objetoD.offers.length; i++) {

    const velocidadeUpload = objetoD.offers[i].downloadSpeed / 2;

    objetoD.offers[i].uploadSpeed = velocidadeUpload;
  }
}
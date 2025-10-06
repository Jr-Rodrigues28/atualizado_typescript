type Carro = {
  Fabricante: string;
  model: string;
  cor: string;
  ano: number;
  placa?: boolean;
};

function criarCarro(opcoes: Carro) {
  const carro = opcoes;
  return carro;
}

// Aqui seria como se já tivesse voltado do banco de dados
let carro: Carro = {
  Fabricante: "Honda",
  model: "Civic",
  cor: "Preto",
  ano: 2025,
  placa: false,
};




//Alterando as chaves
const objetoA: {
 readonly  chaveA: string;
  chaveB: string;
  chaveC?: string;

  // Criar um objeto em aberto
  // index signal network
  [key: string | number]: unknown;

  // chave     Tipo da chave      valor
  //[ key:        string ]:       string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//Aqui valor alterado
objetoA.chaveB = 'Junior';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';
objetoA.chaveJ = 'Desconhecido';
objetoA.chaveL = 'Fulga';
objetoA.ola = 'rato';
objetoA[0] = 2;

console.log(objetoA);

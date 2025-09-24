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

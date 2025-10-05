// Quer dizer que uma função ou um metodo não retorna nada

function semRetorno(...args: string[]): void {
	console.log(args.join(" "));
}

const pessoa = {
	nome: "Junior",
	sobrenome: "Rodrigues",

	// metodo é uma função que está dentro de um objeto ou de uma classe
	exibirNome(): void {
		console.log(this.nome + " " + this.sobrenome);
	},
};

semRetorno("Junior", "Rodrigues");
pessoa.exibirNome();

// quando usa export estamos em module
// vamos no packge.json e mudamos em type para: module
export { pessoa };

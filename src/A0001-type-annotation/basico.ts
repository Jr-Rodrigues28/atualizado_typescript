type Serhumano = {
    nome: string;
    sobrenome: string;
    age: number;
    status?: boolean;
};

function crairpessoa(opcoes: Serhumano) {
    const serhumano = opcoes;
    return serhumano;
}

const ser = {
    nome: "Junior",
    sobrenome: "Rodrigues",
    age: 41,
    status: false,

    exibirName(): void {
        console.log(
            this.nome + " " + this.sobrenome + " " + this.age + " " + (this.status !== undefined ? this.status : "")
        );
    }
};

// Usar a função
ser.exibirName();
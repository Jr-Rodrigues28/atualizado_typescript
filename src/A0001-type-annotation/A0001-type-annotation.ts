/* biome-disable */

/* Tipos básicos (aqui ocorre inferência de tipos) */
let nome: string = "Junior";
let idade: number = 41;
let adulto: boolean = true;
let simbolo: symbol = Symbol("qualquer-symbol");
let big: bigint = 10n;

// type annotations ex: let nome:string = 'Junior'

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeSttings: Array<string> = ["a", "b", "c"];
let arrayDeStrings2: string[] = ["a", "b", "c"];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
	idade: 41,
	nome: "Junior",
};

// Funções                            // aqui é somente quando precisar colocar a tipagem da função
function soma(x: number, y: number): number {
	return x + y;
}
const result = soma(2, 2);

// Outro jeito de fazer FUNÇÂO
const soma2: (x: number, y: number) => number = (x, y) => x + y;

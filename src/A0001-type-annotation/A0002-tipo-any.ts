// O tipo any é um tipo que não queremos utilizar, por ele pegar qualquer coisa, ou seja, não fica explicito se é uma string, number, etc.
// Utilize any em último caso
function showMerssage(msg: any) {
	return msg;
}

console.log(showMerssage([1, 2, 3]));
console.log(showMerssage("Olá"));
console.log(showMerssage(1));

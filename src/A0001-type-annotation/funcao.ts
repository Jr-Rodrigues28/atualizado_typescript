function serhumano(nome: string, idade: number, status: boolean) {
  console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, solteiro? ${status ? "sim" : "não"}`);
}

serhumano("Junior", 41, false);


function comida(prato: string, qtd: number, molho: boolean) {
  console.log(`Nome do prato: ${prato}, pra quantas pessoas: ${qtd} pessoas, com ou sem molho: ${molho ? "Com" : "Sem"}`)
}

comida("Macarrão", 4, true);




interface sala {
  objeto: string;
  qtd: number;
}

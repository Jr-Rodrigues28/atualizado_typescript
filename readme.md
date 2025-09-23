Instalando de forma local
npm init -y
npm i typescript -D

instalando dependência de desenvolvimento
ts-node
npm i ts-node -D


cria uma pasta .vscode e procura em { ccde-runner.executorMap}
para poder rodar com a seta do coderunner
depois exclui e só deixa esse arquivo: "typescript": "ts-node",
pra rodar o coderunner localmente é assim: "typescript": "npx ts-node --files",
npx tsc --init  para gerar um tsconfig.json válido e funcionou (mantendo as configurações do professor também).

"clear && npx ts-node --files --transpile-only" - Ele limpa antes de rodar no caso no linux. Está na pasta .vscode

npx tsc -w  = Pra visualizar localmente

sudo apt install nodejs npm - pra instalar o node junto com npm

npx tsc --init - é pra configurar o json do TS

npx tsc - compilar

## Rodar o Biome

`node --watch --watch-preserve-output --watch-path=. biome-dev.mjs` ou `npm run biome`
`ctrl + c` - interrompe o biome

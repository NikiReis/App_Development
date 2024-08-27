let pessoa = {
    nome: "Linek Reis",
    idade: 22,
    cargo: "CEO",
};

// let usuarios = [
//     { nome: "Victor", idade: 23, cargo: "Dev" },
//     { nome: "Felipe", idade: 23, cargo: "Dev" },
//     { nome: "Linek Reis", idade: 22, cargo: "King"},
// ];

// for (let i = 0; i < usuarios.length; i++) {
//     console.log(usuarios[i].nome);
// }

let {nome, idade, cargo} = pessoa
console.log(nome)
console.log(idade)
console.log(cargo)
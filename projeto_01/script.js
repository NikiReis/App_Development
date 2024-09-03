// // let pares = [2,4,6,8,10]
// // let impares = [pares, 3,5,7,9]

// // let pares = [2,4,6,8,10]
// // let impares = [...pares, 3,5,7,9]

// let pessoa = {
//   name: "bob",
//   age: 22,
//   status: "Single",
// };

// let pessoaProf = {
//   ...pessoa,
//   profession: "CEO",
//   salary: 200000,
// };

// function user(info) {
//   let newUser = {
//     ...info,
//     profession: "CEO",
//   };
//   console.log(newUser);
// }

// user({ nome: "bob", age: 34 });
// function newUser() {}

// function alunos(...nomes) {
//   console.log(nomes);
// }

// alunos = ("Linek", "Raquel", "João");

// let nomes = ("Linek", "Raquel", "João","Carlos","Lais","Sabrina")
// nomes.map((item,index)=>{
//     console.log(`${index} - ${item}`)
// })

function sort_num(numbers) {
  let lucky_number = Math.floor(Math.random() * numbers.length);
  console.log(lucky_number);
}
let numbers = [4, 2, 7, 12, 9, 0, 21];
sort_num(numbers);

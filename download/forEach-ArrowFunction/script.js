//forEach e Arrow Function
const imagens1 = document.querySelectorAll("img");
imagens1.forEach(function (item) {
  console.log(item);
});

//Parâmetros do forEach
/* O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode recebr 3 parâmetros: valorAtual, index e array*/

const imagem = document.querySelectorAll("img");
imagem.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); //item atual do loop
  console.log(index); //número do index
  console.log(array); //array completa
});

//forEach e Array
/* forEach é um método de Array, alguns objetos array like possuem este método. Caso não possua, o ideal é transfromá-lo em uma array */

const titulos = document.getElementsByClassName("titulo");
const tituloArray = Array.from(titulos);

tituloArray.forEach(function (item) {
  console.log(item);
});

//a mesma função mas com arrow function
/* tituloArray.forEach((item) => {
  console.log(item)
})*/

//Arrow function
/* Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos */

const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
  console.log(item, index);
});

//Argumentos e Parênteses
const titulo2 = document.querySelectorAll("h2");
//argumento único não precisa de parênteses
titulo2.forEach((item) => {
  console.log(item);
});

//múltiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

//sem argumentos precisam dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

//Return - é possível omitir as chaves {} para uma função que retorna uma linha
const img = document.querySelectorAll("img");
img.forEach(
  (item) => console.log(item) //não pode colocar ; nesta linha quando não usamos as chaves
)

img.forEach((item) => console.log(item)) //não pode colocar ; nesta linha quando não usamos as chaves

//mostrar no console cada parágrafo do site
const paragrafo = document.querySelectorAll("p")
console.log(paragrafo)
paragrafo.forEach((item) => {
  console.log(item)
  console.log(item.innerText) //mostrar o texto dos parágrafos no console
})


const imagem2 = document.querySelectorAll("img")
imagem2.forEach((item, index) => {
 console.log(item, index) 
})

 let p = 0
 imagem2.forEach(() => {
  console.log(i++)
})

imagem2.forEach(() => p++)
console.log(imagem2)

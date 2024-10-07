const url = 'https://viacep.com.br/ws/01001000/json/';

console.log("Antes do fetch")

fetch(url).then(function (response) {
    console.log("Dentro do fetch")
    console.log(response);
console.log("Depois do fetch")
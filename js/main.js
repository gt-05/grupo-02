const url = 'https://viacep.com.br/ws';
import ServiceListing from "./componentes/ServiceListing.js";
import Address from "./componentes/Anddress.js";

const formCalcularFrete = document.getElementById('calcular-fret');
const enderecoOrigem = document.getElementById('endereco-origem');
const enderecoDestino = document.getElementById('endereco-destino');

formCalcularFrete.addEventListener('submit', function(event){
    event.preventDefault();

    let cepOrigem = event.target.querySelector('#cep-origem');

    fetch(`${url}/${cepOrigem.value}/json`).then(function(response){
        return response.json()
    }).then(function(responseBody){
        enderecoOrigem.innerHTML = Address(responseBody);
});

let cepDestino = event.target.querySelector('#cep-destino');

    fetch(`${url}/${cepDestino.value}/json`).then(function(response){
        return response.json()
    }).then(function(responseBody){
        enderecoDestino.innerHTML = Address(responseBody);

});

    let serviceContainer = document.querySelector('.service-container');

    fetch('js/db.json').then(function(response) {
        return response.json();
        }).then(function(responseBody) {

           ServiceListing({data: responseBody,
                           cepOrigem: cepOrigem,
                           cepDestino: cepDestino
           });
        })
});


const url = 'https://viacep.com.br/ws';

const formCalcularFrete = document.getElementById('calcular-fret');
const enderecoOrigem = document.getElementById('endereco-origem');
const enderecoDestino = document.getElementById('endereco-destino');

formCalcularFrete.addEventListener('submit', function(event){
    event.preventDefault();

    let cepOrigem = event.target.querySelector('#cep-origem');

    fetch(`${url}/${cepOrigem.value}/json`).then(function(response){
        return response.json()
    }).then(function(responseBody){
        enderecoOrigem.innerHTML = `${responseBody.logradouro}, ${responseBody.bairro}, ${responseBody.localidade}, ${responseBody.estado}, ${responseBody.cep}`;

});

let cepDestino = event.target.querySelector('#cep-destino');

    fetch(`${url}/${cepDestino.value}/json`).then(function(response){
        return response.json()
    }).then(function(responseBody){
        enderecoDestino.innerHTML = `${responseBody.logradouro}, ${responseBody.bairro}, ${responseBody.localidade}, ${responseBody.estado}, ${responseBody.cep}`;

});

    let serviceContainer = document.querySelector('.service-container');

    fetch('js/db.json').then(function(response) {
        return response.json();
        }).then(function(responseBody) {
            serviceContainer.innerHTML = '';
            for(let service of responseBody[0].services) {
               serviceContainer.innerHTML += `
               <li class="flex items-center bg-white m-2.5 border border-solid border-[rgba(7,255,23,0.1)] w-115">
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Serviço</p>
                            <p class="font-semibold">${service.name}</p>
                        </div>
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Prazo</p>
                            <p class="font-semibold">${service.days}</p>
                        </div>
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Preço</p>
                            <p class="total-price">${service.price}</p>
                            <p class="font-weight: 600;-price">${service.priceWithDiscount}</p>
                        </div>
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Data da Postagem</p>
                            <p class="font-semibold">19/09/2024</p>
                        </div>
                    </li>
                    `;
            }
            console.log(responseBody);
        })
});


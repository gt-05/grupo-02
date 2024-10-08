export default function ServiceCard(props) {

    return`
                     <li class="service-card">
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Serviço</p>
                            <p class="font-semibold">${props.name}</p>
                        </div>
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Prazo</p>
                            <p class="font-semibold">${props.days}</p>
                        </div>
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Preço</p>
                            <p class="total-price">${props.price}</p>
                            <p class="font-weight: 600;-price">${props.priceWithDiscount}</p>
                        </div>
                        <div class="inline-block p-1.25 px-5">
                            <p class="text-xs text-gray-500">Data da Postagem</p>
                            <p class="font-semibold">19/09/2024</p>
                        </div>
                    </li>
    `;

}
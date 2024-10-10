export default function ServiceCard(props) {

    return` <div class="service-card flex bg-white m-2.5 border border-solid border-[rgba(7,255,23,0.1)] w-full justify-center items-center">
    <div class="flex-1 p-1.25 px-5 text-center">
        <p class="text-xs text-gray-500">Serviço</p>
        <p class="font-semibold">${props.name}</p>
    </div>
    <div class="flex-1 p-1.25 px-5 text-center">
        <p class="text-xs text-gray-500">Prazo</p>
        <p class="font-semibold">${props.days}</p>
    </div>
    <div class="flex-1 p-1.25 px-5 text-center">
        <p class="text-xs text-gray-500">Preço</p>
        <p class="line-through">R$ ${props.price.toFixed(2)}</p>
        <p class="font-semibold">R$ ${props.priceWithDiscount.toFixed(2)}</p>
    </div>
    <div class="flex-1 p-1.25 px-5 text-center">
        <p class="text-xs text-gray-500">Data da Postagem</p>
        <p class="font-semibold">19/09/2024</p>
    </div>
</div>


    `;

}

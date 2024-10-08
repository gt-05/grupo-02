import ServiceCard from "./ServiceCard.js";

export default function ServiceListing(props) {
    let serviceContainer = document.querySelector('.service-container')
    serviceContainer.innerHTML = "";
    
    let services = [];
    for(let frete of props.data) {
        if(
            props.cepOrigem.value >= frete.postCodeStart && 
            props.cepOrigem.value <= frete.postCodeEnd && 
            props.cepDestino.value >= frete.postCodeStart && 
            props.cepDestino.value <= frete.postCodeEnd
        ){
            services.push(...frete.services);
        }
    }
     if(services.length <= 0) {
        serviceContainer.innerHTML = "Nenhuma opção de frete foi encontrada"
                return;
     }

     for(let service of services) {
        serviceContainer.innerHTML += ServiceCard(service);
     }
}
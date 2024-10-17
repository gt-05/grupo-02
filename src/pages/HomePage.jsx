import ProductListing from "../components/ProductListing.jsx"
import Gallery from "../components/Gallery.jsx"
import Header from '../components/Header.jsx'
import Section from "../components/section.jsx";
import Footer from "../components/Footer.jsx"
import Group from "../assets/images/Group.png"
//import Layout from "../Layout.jsx"

export default function Home() {
    return (
        <>
        <Header/>
        <Gallery/>
        <img src={Group}/>
        <Section
        title="Produtos em Alta"
        titleAlign="left"
        link={
            {
            "text": "ver todos",
            "href": "https://redirect.link"
            }
        }>
        <ProductListing />
        </Section>
        <Footer/>
    </>
    )
}
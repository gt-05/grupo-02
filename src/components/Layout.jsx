import Header from "./Header";
//import footer from

export default function Layout(props) {
    return (
        <>
    <Header/>
    <main>
        {props.children}
    </main>
    </>
    )
}

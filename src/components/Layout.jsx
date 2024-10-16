import Header from "./Header";
import footer from "./Footer"

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

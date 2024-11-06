export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/users/token', option)
            .then(response => response.json())
            .then(body => {
                localSrorage.setItem('token')
            })
    }
    
    return (
        <form className="">
        </form>
    )
}
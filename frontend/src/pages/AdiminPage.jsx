export default function AdiminPage() {

    let token = localStorage.getItem("token");

    if(!token) {
        location.href = '/login'
        return;
    }

}

export default function Logout() {

    const remove =  () =>{
        localStorage.clear("auth_token")
    }

    return (
        <h1>{remove}</h1>
    )
}
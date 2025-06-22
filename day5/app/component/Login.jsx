import "./style/Login.css"
function Login(){
    return (

        <>
            <div className="login">
           <h1 >login</h1>

            <input type="text" placeholder="Enter username"/>

            <input type="password" placeholder="password" />

            <button>Login</button>
            </div>
        </>
    )
}
export default Login;
const Login = (props) => {

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={(e) => props.login(e)}>
                <label>UserName</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    )
    
}

export default Login

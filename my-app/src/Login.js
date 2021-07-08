const Login = (props) => {

    return (
        <div className="login">
            <h2>Login</h2>
            <br></br>
            <br></br>
            <form onSubmit={(e) => props.login(e)}>
                <label>UserName</label>
                <br></br>
                <input name="username" type="text" />
                <br></br>
                <br></br>
                <br></br>
                <label>Password</label>
                <br></br>
                <input name="password" type="password" />
                <br></br>
                <br></br>
                <button className ="glow-on-hover">Log in</button>
                {/* <input type="submit" /> */}
            </form>
        </div>
    )
    
}

export default Login

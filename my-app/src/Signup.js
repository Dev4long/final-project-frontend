const Signup = (props) => {

    return (
        <div className = "signup">
            <h2>Signup</h2>
            <br></br>
            <br></br>
            <form onSubmit={(e) => props.signup(e)}>
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
                <button className ="glow-on-hover">Sign me up</button>
            </form>
        </div>)

}

export default Signup
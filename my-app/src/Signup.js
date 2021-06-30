const Signup = (props) => {

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => props.signup(e)}>
                <label>UserName</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>)

}

export default Signup
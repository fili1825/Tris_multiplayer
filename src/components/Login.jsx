import './css/login.css'
function Login()
{
    return(
        <>
  <title>Login</title>
  <h1>Login</h1>
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required="" />
      </div>
      <div className="form-group">
        <input type="submit" defaultValue="Accedi" />
      </div>
    </form>
  </div>
</>

    );
}

export default Login;
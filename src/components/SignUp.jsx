function SignUp()
{
    return(
      <>  
  <title>Registrazione</title>
  <h1>Registrazione</h1>
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required="" />
      </div>
      <div className="form-group">
        <input type="submit" defaultValue="Registrati" />
      </div>
    </form>
  </div>

</>
    );
}

export default SignUp;
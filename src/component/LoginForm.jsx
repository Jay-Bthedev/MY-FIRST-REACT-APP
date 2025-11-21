import "./LoginForm.css";
const LoginForm = () => {

const onSubmitFunction = (e) => {
    e.preventDefault();
    alert("form submitted");

    // console.log("form has been submitted");
  }

  return (
    <div className="login-form-body">
      <h3>Login </h3>
      <p>Enter your details below</p>

          <form onSubmit={onSubmitFunction}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
           
           onChange={()=>alert("user is now typing")}
          
            type="text"
            id="username"
            name="username"
            required />
       </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input onChange={()=>alert("user is now typing")} type="password" id="password" name="password" required />
        </div>

        <div className="login-button">
        <button type="submit">Login</button>
        <p>Forget Password? </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
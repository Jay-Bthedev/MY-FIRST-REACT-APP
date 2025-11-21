import "./SignupForm.css";
const SignupForm= () => {
   const onSubmitFunction = (e) => {
    e.preventDefault();
    alert("form submitted");

    
  }
  
  return (
    <div className="Signup-form-body">
      <h3> Create an account </h3>
      <p>Enter your details below</p>
       <form onSubmit={onSubmitFunction}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input 
          onChange={()=>alert("user is now typing")}
          type="text" id="Name" name="Name" required />
        </div>
        <div>
          <label htmlFor="Email">Email or Phone number:</label>
          <input onChange={()=>alert("user is now typing")} type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input onChange={()=>alert("user is now typing")} type="password" id="password" name="password" required/>
        </div>

        <div className="Signup-button">
        <button type="submit" className="create">Create account</button>
        <button className="signup" type="submit"><img src="https://img.icons8.com/?size=100&id=wiyOayTG4EHY&format=png&color=000000" className="img"/> <p>Sign up with Google</p> </button>
        </div>

        <div className="ready">
          <p> Already have an account?</p>
          <p className="log"> Log in</p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
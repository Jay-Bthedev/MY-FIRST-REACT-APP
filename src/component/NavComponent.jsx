import "./NavComponent.css";


function  NavComponent(props) { 
     const backgroundToDisplay = props.backgroundColor || "lightblue";


    const signUpButtonFunction = () => {
        alert("Sign up clicked!");
    }

    return (
        <nav style={{background: backgroundToDisplay}}>
            <h1>{props.username}</h1>

            <ul>
                <li><a href="*">Home</a></li>
                <li><a href="*">About</a></li>
                <li><a href="*">Shop</a></li>
                <li><a href="*">Blog</a></li>
                <li><a href="*">Contact</a></li>
                
            </ul>


            <div className="nav-buttons">
                <button className="button-no-bg" onClick={()=> alert("clicked!")}>Login</button>
                <button onClick={signUpButtonFunction}>Sign up</button>
            </div>
        </nav>
            
        )
};


export default NavComponent;
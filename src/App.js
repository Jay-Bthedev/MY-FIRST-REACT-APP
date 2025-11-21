
import './App.css';

import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import Error404Page from "./pages/Error404Page";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import AboutUsPage from "./pages/AboutUsPage";

// function App() {
//   const name = "Jesujoba";
//   return (
//     <div className="App">
//       <NavComponent username = {name} />
//       <div className='Form-wrapper' >
// <LoginForm/>
// <SignupForm/>
//       </div>
      
//     </div>
//   );



// }

function App() {

  return (
    
  
       
  <Routes>
    <Route path="/" exact element={<HomePage/>} />
    <Route path="/contact-us" element={<ContactUsPage />} />
    <Route path="/user/:userId" element={<UserPage />} />
    <Route path="/about-us" element={<AboutUsPage/>}/>
    <Route path="*" element={<Error404Page/>}/>
  </Routes>

  )
}

export default App;
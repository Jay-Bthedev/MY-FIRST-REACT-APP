import NavComponent from '../component/NavComponent';
import LoginForm from '../component/LoginForm';
import SignupForm from '../component/SignupForm';
import CardComponent from '../component/CardComponent';
import CounterGame from '../component/CounterGame';
import ColorChanger from '../component/ColorChanger';

const HomePage = () => {
  const name = "Jesujoba";
  return (
    <div className="App">
      <NavComponent username={name} />

      
      <div className="Form-wrapper">
        <LoginForm
          header="Log In Now"
          messageToDisplay="Type in your correct details"
        />
        <SignupForm/>
      </div>
      

      <h3 className="default-header">Use of props and event handling</h3>

      <div className="cards-wrapper">
        <CardComponent
          img="https://images.pexels.com/photos/6801684/pexels-photo-6801684.jpeg"
          name="Moses Jackson"
          description="Fullstack developer with 5 years experience"
          link="/user/Moses-Jackson"
        />

        <CardComponent
          img="https://images.pexels.com/photos/34575018/pexels-photo-34575018.jpeg"
          name="Jamiu Zainab"
                  description="Experienced UI/UX designer"
                  link="/user/jamiu-zainab"
        />

        <CardComponent
          img="https://images.pexels.com/photos/26885613/pexels-photo-26885613.jpeg"
          name="Ademola Olalekan"
          description="Frontend developer and designer"
          link="/user/ademola-olalekan"
        />
      </div>


      <h3 className="default-header">React hooks using  use state</h3>
      <div className="counter-game-wrapper">
        <CounterGame/>

      </div>

      <h3 className="default-header">Color Changer</h3>
      

      <ColorChanger/>

    </div>
  );
}

export default HomePage
import { useContext } from 'react';
import './App.css';
import { Header, Main, AboutUs, HowItWorks, Categories, Testimony, Footer, Divider } from './sections';
import { Navbar } from './components';
import { useScroll } from './hooks/useScroll';
import MoveToHomeButton from './components/move-to-home-button/MoveToHomeButton';
import SignUpForm from './components/signUp-form/SignUpForm';
import SignInForm from './components/signIn-form/SignInForm';
import { ApplicationContext } from './context/appContext';
import WithQuerySign from './hoc/withQuerySign/WithQuerySign.js';
//Autentication information
import AuthUser from "./components/auth-user/AuthUser";
//HOCs
const WithSignUpQuery =  WithQuerySign(SignUpForm);
const WithSignInQuery =  WithQuerySign(SignInForm);

function App() {
  const appCtx = useContext(ApplicationContext);
  const scroll = useScroll();
  return (
    <div className="App">
      { appCtx.toggleAuth ? <AuthUser /> : null }
      { appCtx.toggleSignUp ? <WithSignUpQuery auth={'signup'} /> : null }
      { appCtx.toggleSignIn ? <WithSignInQuery auth={'signin'} /> : null }
      { scroll ? <MoveToHomeButton /> : null }
      <Header>
        <Navbar />
      </Header>
      <Main />
      <Divider id="aboutus" sectionDescription="Who we are" sectionNameBelow="About us" />
      <AboutUs />
      <Divider id="howitworks" sectionDescription="How to custom" sectionNameBelow="How it works" />
      <HowItWorks />
      <Divider id="categories" sectionDescription="What we have" sectionNameBelow="Categories" />
      <Categories />
      <Divider id="testimony" sectionDescription="What they say" sectionNameBelow="Testimony" />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;

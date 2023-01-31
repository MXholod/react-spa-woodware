import { useContext } from 'react';
import './App.css';
import { Header, Main, AboutUs, HowItWorks, Categories, Testimony, Footer, Divider } from './sections';
import { Navbar } from './components';
import { useScroll } from './hooks/useScroll';
import MoveToHomeButton from './components/move-to-home-button/MoveToHomeButton';
import SignUpForm from './components/signUpForm/SignUpForm';
import SignInForm from './components/signInForm/SignInForm';
import { ApplicationContext } from './context/appContext';

function App() {
  const appCtx = useContext(ApplicationContext);
  const scroll = useScroll();
  return (
    <div className="App">
      { appCtx.toggleSignUp ? <SignUpForm /> : null }
      { appCtx.toggleSignIn ? <SignInForm /> : null }
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

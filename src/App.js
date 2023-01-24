import './App.css';
import { Header, Main, AboutUs, HowItWorks, Categories, Testimony, Footer, Divider } from './sections';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
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

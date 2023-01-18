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
      <Divider sectionDescription="Who we are" sectionNameBelow="About us" />
      <AboutUs />
      <Divider sectionDescription="How to custom" sectionNameBelow="How it works" />
      <HowItWorks />
      <Divider sectionDescription="What we have" sectionNameBelow="Categories" />
      <Categories />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;

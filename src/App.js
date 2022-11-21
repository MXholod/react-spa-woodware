import './App.css';
import { Header, Main, AboutUs, HowItWorks, Categories, Testimony, Footer } from './sections';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
      <Main />
      <AboutUs />
      <HowItWorks />
      <Categories />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;

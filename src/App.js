import './App.css';
import { Header, Main, AboutUs, HowItWorks, Categories, Testimony, Footer } from './sections';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <h1>React SPA wood products</h1>
      <header className="App-header">
        <Header>
          <Navbar />
        </Header>
        <Main />
        <AboutUs />
        <HowItWorks />
        <Categories />
        <Testimony />
        <Footer />
      </header>
    </div>
  );
}

export default App;

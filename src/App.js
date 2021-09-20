import Routes from "./config/Routes";
import Nav from './components/Nav.jsx'
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;

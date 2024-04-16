// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Experience />
    </div>
  );
}

export default App;

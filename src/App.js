
import './App.css';
import StaticPage from './Routes/StaticPage';
import Footer from './Components/Footer';




import AppRoutes from './Utility/Routers';


function App() {
  return (
    <div className="App">
   
      <AppRoutes/>
   {/* <StaticPage/> */}
      <Footer />
      
    </div>
  );
}

export default App;

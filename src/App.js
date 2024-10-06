import { BrowserRouter} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Main from './pages/main';
import "./assets/css/style.css"
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactIcons from './components/ContactIcons';
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import ScrollTop from './components/ScrollTop';
import ContactModal from './components/ContactModal';
import AnimatedRoutes from './pages/AnimatedRoutes';



function App() {
  //console.log(Date.now())
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spin");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  useEffect(() => {

    Aos.init({
      duration: 800,
      once:true,
      offset:100,
    });
  }, [])
  //console.log("working fine.");
  /*
 */
  return (!loading && 
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ContactModal />
                <AnimatedRoutes />
        <Footer />
        <ContactIcons />
        <ScrollTop />
        
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false} 
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </div>

  );
}

export default App;

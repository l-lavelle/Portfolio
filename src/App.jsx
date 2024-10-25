import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Footer from './components/Footer/Footer';
import { useEffect,useState } from 'react';
import './App.css';
import './root.css';

function App() {
    const [loadingPage, setLoadingPage] = useState(true);

    // dont show the nav bar and the footer on loading screen
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoadingPage(false);
        }, 10000); 
    
        return () => clearTimeout(timer); 
      }, []);

    return (
        <>
            {!loadingPage && <NavBar />} 
                <main>
                    <Outlet />
                </main>
            {!loadingPage &&  <Footer />} 
        </>
    );
}

export default App;
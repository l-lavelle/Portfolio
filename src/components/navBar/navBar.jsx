import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import './navBar.css'

// How to fade in element slowly time the loading in of page elements 
export default function NavBar() {
  const currentPage = useLocation().pathname;

  const [showComponent, setShowComponent] = useState(false)

    // useEffect(()=>{
    //   const timer = setTimeout(()=>{
    //         setShowComponent(!showComponent)
    //     }, 5000)
    //     return () => clearTimeout(timer)
    // }, [])

    return (
        <>
        {showComponent ||
        <nav class="navbar navbar-expand-lg bg-body-tertiary fadeIn nav-color">
        <div class="container-fluid nav-color">
              <Link
                  to="/"
                  className={currentPage === '/' ? 'nav-link ll-font active' : 'nav-link ll-font'}
                >
                  Lauren Lavelle
              </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item nav-effect">
                <Link
                    to="/About"
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                  >
                    About
              </Link>
             </li>
             <li class="nav-item nav-effect">
                <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                  >
                    Portfolio
                </Link>
              </li>
              <li class="nav-item nav-effect">
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                  >
                    Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>}
      </>
    );
  }


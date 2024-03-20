import './landingStyle.css';

import React from 'react'
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
        <Link to={"/home"}>
        <button>Ingresar</button>
        </Link>
        <h1>Bienvenidos a la app de paises</h1>
    </div>
  );
};

export default LandingPage;
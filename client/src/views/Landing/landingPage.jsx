import React from 'react'
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
        <Link to={"/home"}>
        <button>Ingresar</button>
        </Link>
        <h1>Bienvenidos a la app de paises</h1>
      <img src="https://medicoplus.com/_next/image?url=https%3A%2F%2Fplustatic.com%2F3810%2Fconversions%2Fpaises-mas-grandes-del-mundo-large.jpg&w=1024&q=75" 
        alt="Countries" />
    </div>
  );
};

export default LandingPage;
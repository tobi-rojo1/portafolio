// src/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Asegúrate de crear este archivo para los estilos
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }
    return (
      <>

        <div className={`sidebar w-fit-content`} style={{'transition': '1s all ease'}}>
        <button
            onClick={() => handleClick()}
          >
            { open ? 'Cerrar' : 'Abrir'}
          </button>
          {
            open && (
              <>
               <h2>Tobias Aiello</h2>
            <ul>
                <li>
                  <Link to={"/about"}>
                  Acerca de mi
                  </Link>
                </li>
                <li>
                <Link to={"/projects"}>
                  Proyectos
                  </Link>
                </li>
                <li>
                <Link to={"/skills"}>
                  Habilidades 
                  </Link>
                </li>
                <li>
                <Link to={"/contact"}>
                  Contacto
                  </Link>
                </li>
            </ul>
              </>
            )
          }
           
        </div>
        
</>
    );

  };

export default Sidebar;

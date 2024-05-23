import React from "react";

const Nav =()=>{
    return(
        <>
            <header>
                <nav className="nav-navegation">
                    <div className="nav-user">
                        <div className="nav-logo-img"><img src="src/assets/img/scht-logo.png" alt="SCHT"/></div>
                        <div className="nav-content-img"><img src="src/assets/img/perfil.png" alt="user"/><div className="flex-content"><span>Andrian Quispe</span><p>Usuario</p></div></div>
                    </div>
                    <ul className="nav-menu">
                        <li className="flex-nav-direction">
                            <img src="src/assets/icons/direction.png" alt="direction"/>
                                <a href=""><b>Direccíon de Proyectos</b></a>
                                <img src="src/assets/icons/down-arrow.png" alt="arow"/>
                            {/* this is the sub nav hidden */}
                            <ul className="nav-menu_list">
                                <li><a href="">Proyecto Inicio</a></li>
                                <li><a href="">Administración SIC</a></li>
                            </ul>
                        </li>
                        <li className="flex-nav-direction">
                            <img src="src/assets/icons/direction.png" alt="direction"/>
                            <a href=""><b>Direccíon de Proyectos</b></a>
                            <img src="src/assets/icons/down-arrow.png" alt="arow"/>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;


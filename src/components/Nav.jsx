import React from "react";

const Nav =()=>{
    return(
        <>
            <header>
                <nav class="nav-navegation">
                    <div class="nav-user">
                        <div class="nav-logo-img"><img src="src/assets/img/scht-logo.png" alt="SCHT"/></div>
                        <div class="nav-content-img"><img src="src/assets/img/perfil.png" alt="user"/><div class="flex-content"><span>Andrian Quispe</span><p>Usuario</p></div></div>
                    </div>
                    <ul class="nav-menu">
                        <li>
                            <div class="flex-nav-direction">
                                <img src="src/assets/icons/direction.png" alt="direction"/>
                                <a href=""><p><b>Direccíon de Proyectos</b></p></a>
                                <img src="src/assets/icons/down-arrow.png" alt="arow"/>
                            </div>
                            <ul class="nav-menu_list">
                                <li><a href="">Proyecto Inicio</a></li>
                                <li><a href="">Administración SIC</a></li>
                            </ul>
                        </li>
                        <li></li>
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


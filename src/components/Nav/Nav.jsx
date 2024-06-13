import React, { useState } from "react";
import "./Nav.css";
import MenuContent from "./MenuContent";

const Nav =()=>{
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(true);
    
    let styles = {
        backgroundColor:"#E5F6FA",
    }
    let styleColor ={
        filter: `invert(29%) sepia(87%) saturate(2396%) hue-rotate(200deg) brightness(102%) contrast(107%)`
    }


    return(
        <>
            <header>
                <nav className="nav-navegation">
                    <div className="nav-user">
                        <div className="nav-logo-img"><img src="src/assets/img/scht-logo.png" alt="SCHT"/></div>
                        <div className="nav-content-img"><img src="src/assets/img/perfil.png" alt="user"/><div className="flex-content"><span>Andrian Quispe</span><p>Usuario</p></div></div>
                    </div>
                    <ul className="nav-menu">
                        <MenuContent  open={open1} setOpen={setOpen1}>
                            <li className="nav-info" style={open1 ? null:styles}>
                                <div className="flex-nav-direction">
                                    <img style={open1 ? null:styleColor}src="src/assets/icons/direction.png" alt="direction"/>
                                    <b className="margin-move-right" style={open1 ? null:styleColor}>Direccíon de Proyectos</b>
                                    <img style={open1 ? null:styleColor} src={open1 ?`src/assets/icons/down-arrow.png`:`src/assets/icons/up-arrow.png` } alt="arow"/>
                                </div>
                                    <ul className={`${open1 ? " drop-dowm_menu" : "drop-menu_list"}`}>
                                        <li><a href="">Proyecto inicio</a></li>
                                        <li><a href="">Administración SIC</a></li>
                                    </ul>
                            </li>
                        </MenuContent>
                        <MenuContent open={open2} setOpen={setOpen2}>
                            <li className="nav-info" style={open2 ? null:styles}>
                                <div className="flex-nav-direction">
                                    <img style={open2 ? null:styleColor} src="src/assets/icons/helmet.png" alt="helmet"/>
                                    <b style={open2 ? null:styleColor}>Supervisíon de Obra</b>
                                    <img style={open2 ? null:styleColor} src={open2 ?`src/assets/icons/down-arrow.png`:`src/assets/icons/up-arrow.png` } alt="arow"/>
                                </div>
                                <ul className={`${open2 ? " drop-dowm_menu" : "drop-menu_list"}`}>
                                    <li><a href="">Estatus General</a></li>
                                    <li><a href="">Control De Costos</a></li>
                                    <li><a href="">Control De Calidad</a></li>
                                    <li><a href="">Control De Documentario</a></li>
                                    <li><a href="">Acta de Reunión</a></li>
                                    <li><a href="">Diseño de Informe Mensual</a></li>
                                </ul>
                            </li>
                        </MenuContent>
                        <MenuContent open={open3} setOpen={setOpen3}>
                            <li className="nav-info" style={open3 ? null:styles}>
                                <div className="flex-nav-direction">
                                    <img style={open3 ? null:styleColor} src="src/assets/icons/ticket.png" alt="ticket"/>
                                    <b style={open3 ? null:styleColor}>Supervisíon Financiera</b>
                                    <img style={open3 ? null:styleColor} src={open3 ?`src/assets/icons/down-arrow.png`:`src/assets/icons/up-arrow.png` } alt="arow"/>
                                </div>
                                <ul className={`${open3 ? " drop-dowm_menu" : "drop-menu_list"}`}>
                                    <li><a href="">Control Financiero</a></li>
                                </ul>
                            </li>
                        </MenuContent> 
                        <MenuContent open={open4} setOpen={setOpen4} >
                            <li className="nav-info" style={open4 ? null:styles}>
                                <div className="flex-nav-direction">
                                    <img style={open4 ? null:styleColor} src="src/assets/icons/diagram.png" alt="helmet"/>
                                    <b style={open4 ? null:styleColor}>Gerencia de Proyectos</b>
                                    <img style={open4 ? null:styleColor} src={open4 ?`src/assets/icons/down-arrow.png`:`src/assets/icons/up-arrow.png` } alt="arow"/>
                                </div>
                                <ul className={`${open4 ? " drop-dowm_menu" : "drop-menu_list"}`}>
                                    <li><a href="">Control Financiero</a></li>
                                </ul>
                            </li>
                        </MenuContent>
                        <MenuContent open={open5} setOpen={setOpen5} >
                            <li className="nav-info" style={open5 ? null:styles}>
                                <div className="flex-nav-direction">
                                    <img style={open5 ? null:styleColor} src="src/assets/icons/circle-digram.png" alt="circle digram"/>
                                    <b className="margin-move-right" style={open5 ? null:styleColor}>Servicio de Informacion <span>al Cliente</span></b>
                                    <img style={open5 ? null:styleColor} src={open5 ?`src/assets/icons/down-arrow.png`:`src/assets/icons/up-arrow.png` } alt="arow"/>
                                </div>
                                <ul className={`${open5 ? " drop-dowm_menu" : "drop-menu_list"}`}>
                                    <li><a href="">Control Financiero</a></li>
                                </ul>
                            </li>
                        </MenuContent>
                        <MenuContent open={open6} setOpen={setOpen6} >
                            <li className="nav-info" style={open6 ? null:styles}>
                                <div className="flex-nav-direction">
                                    <img style={open6 ? null:styleColor} src="src/assets/icons/administration.png" alt="administration"/>
                                    <b className="margin-move-left" style={open6 ? null:styleColor}>Servicio de Informacion <span>al Cliente</span></b>
                                    <img style={open6 ? null:styleColor} src={open6 ?`src/assets/icons/down-arrow.png`:`src/assets/icons/up-arrow.png` } alt="arow"/>
                                </div>
                                <ul className={`${open6 ? " drop-dowm_menu" : "drop-menu_list"}`}>
                                    <li><a href="">Control Financiero</a></li>
                                </ul>
                            </li>
                        </MenuContent>
                    </ul>
                    <div className="sing-up">
                        <img src="/src/assets/icons/circle-left.png" alt="cirle-left" />
                        <p><b>CERRAR SESIÓN</b></p>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav;


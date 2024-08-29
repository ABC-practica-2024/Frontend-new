import React from 'react';
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";

export default function TopBar(){
    return (
        <div className="topbar">
            <div className="logo">
                <img src="src/utils/img.png" alt="logo" className="logo-image"/>
            </div>
            <div className="nav-buttons">
                <Link to='/login'>
                    <Button label="Autentificare" styleType="primary"/>
                </Link>
                <Link to='/register'>
                    <Button label="Inregistrare" styleType="primary"/>
                </Link>
            </div>
        </div>
    )
}
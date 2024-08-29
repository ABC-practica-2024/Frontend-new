import React from 'react';
import './Sidebar.css';
import Button from "../Button.jsx";
import {NavLink} from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <ul className='sidebar-items'>
                <li className="sidebar-item">
                    <button className="rectangle-16 sidebar-button" onClick={toggleSidebar}>
                        <img src="/icons/icon1.svg" alt="Layers Icon" className="icon"/>
                    </button>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/notifications">
                        <div className={`rectangle-23 ${isOpen ? 'expanded' : ''}`}>
                            <Button
                                label={
                                    <>
                                        <img src="/icons/icon2.svg" alt="Notifications Icon" className="icon"/>
                                        {isOpen && <span className="button-label">Notificari</span>}
                                    </>
                                }
                                styleType="sidebar"
                            />
                        </div>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/chat">
                        <div className={`rectangle-22 ${isOpen ? 'expanded' : ''}`}>
                            <Button
                                label={
                                    <>
                                        <img src="/icons/icon3.svg" alt="Chat Icon" className="icon"/>
                                        {isOpen && <span className="button-label">Chat</span>}
                                    </>
                                }
                                styleType="sidebar"
                            />
                        </div>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/deployed-code">
                        <div className={`rectangle-18 ${isOpen ? 'expanded' : ''}`}>
                            <Button
                                label={
                                    <>
                                        <img src="/icons/icon4.svg" alt="Artefact Icon" className="icon"/>
                                        {isOpen && <span className="button-label">Artefactele mele</span>}
                                    </>
                                }
                                styleType="sidebar"
                            />
                        </div>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/code-history">
                        <div className={`rectangle-19 ${isOpen ? 'expanded' : ''}`}>
                            <Button
                                label={
                                    <>
                                        <img src="/icons/icon5.svg" alt=" History Icon" className="icon"/>
                                        {isOpen && <span className="button-label">Istoric artefacte</span>}
                                    </>
                                }
                                styleType="sidebar"
                            />
                        </div>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/add-circle">
                        <div className={`rectangle-20 ${isOpen ? 'expanded' : ''}`}>
                            <Button
                                label={
                                    <>
                                        <img src="/icons/icon6.svg" alt="Add  Icon" className="icon"/>
                                        {isOpen && <span className="button-label">Adauga artefact nou</span>}
                                    </>
                                }
                                styleType="sidebar"
                            />
                        </div>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/settings">
                        <div className={`rectangle-21 ${isOpen ? 'expanded' : ''}`}>
                            <Button
                                label={
                                    <>
                                        <img src="/icons/icon7.svg" alt="Settings Icon" className="icon"/>
                                        {isOpen && <span className="button-label">Setari</span>}
                                    </>
                                }
                                styleType="sidebar"
                            />
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

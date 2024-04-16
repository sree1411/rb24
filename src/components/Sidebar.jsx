// Sidebar.js

import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`nav-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="logo">
                    <i className={`bi ${isOpen ? 'bi-emoji-smile' : 'bi-blockquote-right'}`} onClick={toggleSidebar}></i>
                </div>
                {
                    !isOpen && (<div className="sidebar-menu">
                    <ul>
                        <li>
                            <i className="bi bi-bag-dash"></i>
                            <span className="sm-text">Dashboard</span></li>
                        <li><i className="bi bi-shop-window"></i><span className="sm-text">MY Store</span></li>
                        <li><i className="bi bi-microsoft-teams"></i><span className="sm-text">Analytics</span></li>
                        <li><i className="bi bi-chat-dots-fill"></i><span className="sm-text">Message</span></li>
                        <li><i className="bi bi-microsoft-teams"></i><span className="sm-text">Teams</span></li>
                    </ul>
                </div>
            
               )
                }

{
                    isOpen && (<div className="sidebar-menu">
                    <ul>
                        <li>
                            <i className="bi bi-bag-dash"></i>
                            <span className="sm-text">Dashboard</span></li>
                        <li><i className="bi bi-shop-window"></i><span className="sm-text">MY Store</span></li>
                        <li><i className="bi bi-microsoft-teams"></i><span className="sm-text">Analytics</span></li>
                        <li><i className="bi bi-chat-dots-fill"></i><span className="sm-text">Message</span></li>
                        <li><i className="bi bi-microsoft-teams"></i><span className="sm-text">Teams</span></li>
                    </ul>
                </div>
            
               )
                }
                
             
            </div>
        </div>
    );
};

export default Sidebar;

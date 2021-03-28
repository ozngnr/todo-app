import React from 'react';

export default function NavBar({tab, setTab}){

  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item">
          <button 
            onClick={() => setTab("all")} 
            className="menu-button">All
          </button>
          {tab === "all" && <span className="menu-button_underline"></span>}
        </li>
        <li className="menu-item">
          <button 
            onClick={() => setTab("active")} 
            className="menu-button">Active
          </button>
          {tab === "active" && <span className="menu-button_underline"></span>}
          </li>
        <li className="menu-item">
          <button 
            onClick={() => setTab("completed")} 
            className="menu-button">Completed
          </button>
          {tab ==="completed" && <span className="menu-button_underline"></span>}
        </li>
      </ul>
    </nav>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const handleEnter = (target) => {
        target.style.color = 'green';
    }
    const handleOut = (target) => {
        target.style.color = 'black';
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onMouseEnter={(event) => { handleEnter(event.target) }} onMouseOut={(event) => { handleOut(event.target) }}>ALL</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Full_Stack_Development" onMouseEnter={(event) => { handleEnter(event.target) }} onMouseOut={(event) => { handleOut(event.target) }}>FULL STACK DEVELOPMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Data_Science" onMouseEnter={(event) => { handleEnter(event.target) }} onMouseOut={(event) => { handleOut(event.target) }}>DATA SCIENCE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Cybersecurity" onMouseEnter={(event) => { handleEnter(event.target) }} onMouseOut={(event) => { handleOut(event.target) }}>CYBER SECURITY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Career' onMouseEnter={(event) => { handleEnter(event.target) }} onMouseOut={(event) => { handleOut(event.target) }}>CAREER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
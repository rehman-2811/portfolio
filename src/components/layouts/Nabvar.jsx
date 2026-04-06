import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nabvar() {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark sticky-top shadow'>
            <div className="container">
                <Link className='navbar-brand fw-bold' to="/">
                    Abdul Rehman
                </Link>

                <button className='navbar-toggler'
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarnav"
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='#navbarnav'>
                    <ul className='navbar-nav gap-3 ms-auto'>
                        <li className='nav-item fw-bold'>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "nav-link text-warning active" : "nav-link"
                            }>
                                Home

                            </NavLink>

                        </li>

                         <li className='nav-item fw-bold'>
                            <NavLink to="project" className={({ isActive }) =>
                                isActive ? "nav-link text-warning active" : "nav-link"
                            }>
                                Project

                            </NavLink>
                            
                        </li>

                     
                    </ul>
                </div>

            </div>

        </nav>
    );
};

export default Nabvar

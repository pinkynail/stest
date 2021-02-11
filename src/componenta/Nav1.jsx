import React from 'react';
import cast from './Nav1.Module.css'

const Nav1 = () => {
    return (
        <div>
            <nav className={cast.Nav1}>
                <div>
                    <a> Profile </a>
                </div>
                <div>
                    <a> Messages </a>
                </div>
                <div>
                    <a> News </a>
                </div>
                <div>
                    <a> Music </a>
                </div>
                <div>
                    <a> Settings </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav1;
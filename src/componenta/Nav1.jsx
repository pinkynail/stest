import React from 'react'
import cast from './Nav1.Module.css'

const Nav1 = () => {
    return (
        <div>
            <nav className={cast.Nav1}>
                <div className={cast.item}>
                    <a> Profile </a>
                </div>
                <div className={cast.item}>
                    <a> Messages </a>
                </div>
                <div className={`${cast.item} ${cast.active}`}>
                    <a> News </a>
                </div>
                <div className={cast.item}>
                    <a> Music </a>
                </div>
                <div className={cast.item}>
                    <a> Settings </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav1;
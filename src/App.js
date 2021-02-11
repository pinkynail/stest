import React from 'react';
import './App.css';
import Head1 from "./componenta/Head1";
import Nav1 from "./componenta/Nav1";
import Profile from "./componenta/Profile";


const App = () => {
    return (
        <div className='grid'>
            <Head1 />
            <Nav1 />
            <Profile />
        </div>
    )
}

export default App;

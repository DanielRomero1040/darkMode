import React, {useState} from 'react';
import "./App.css";
import HomePage from './HomePage.js'

 const App = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
            <div className={darkMode ? 'darkMode': 'lightMode'}>
        <div className='home'>
                <HomePage darkMode={darkMode} handleClick={handleClick}/>
        </div>
            </div>
    )

}

export default App
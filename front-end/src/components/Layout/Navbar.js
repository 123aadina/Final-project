import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';


const Navbar = ({ icon, title }) => {
    const { t, i18n } = useTranslation();

    const handleOnClick = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}></i>
            </h1>
            <button onClick={() => handleOnClick('en')}>English</button>
            <button onClick={() => handleOnClick('de')}>Deutch</button>
            <button onClick={() => handleOnClick('fe')}>French</button>
            <button onClick={() => handleOnClick('fr')}>Farsi</button>
            <button onClick={() => handleOnClick('ar')}>Arbic</button>
            <button onClick={() => handleOnClick('tu')}>Turkish</button>
            <h1>
                <i className={title}></i>
            </h1>
            <ul>
                <li>
                    
                </li>
                <li>
                    
                </li>

            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    icon: 'fas fa-bars',
    title: 'hello'
};

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default Navbar

//<i class="fas fa-bars"></i>
//<Link to='/'>Home</Link>
//<Link to='/about'>About</Link>
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children}) => {

    const menustyle = {
        display: 'inline-block',
        margin: 20,
        marginBottom: 30
    }

    const blockstyle = {
        backgroundColor: 'AntiqueWhite',
        margin: 10
    }

    return (
        <div>
            <h1>Message Publisher</h1>
            <div style={blockstyle}>
                <h3 style={menustyle}><Link to='/'>Home</Link></h3>
                <h3 style={menustyle}><Link to='/messages'>Messages</Link></h3>
                <h3 style={menustyle}><Link to='/drafts'>Drafts</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;
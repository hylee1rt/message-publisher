import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



class App extends Component {
    render() {

        return (
            <div>
                <h1>Message Publisher Helllo</h1>
                <Link to="/newfile">
                    <button type="button" className='button-40'>New File</button>
                    </Link>
            </div>
        );
    }
}




export default App;
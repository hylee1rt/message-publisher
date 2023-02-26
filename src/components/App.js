import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



class App extends Component {
    render() {
        // this.state = {
        //     drafts: {

        //     }
        // }

        function addDraft() {
            // adding a draft
        }

        return (
            <div>
                <Link to="/newfile">
                    <button type="button" className='button-40'>New File</button>
                </Link>
            </div>
        );
    }
}




export default App;
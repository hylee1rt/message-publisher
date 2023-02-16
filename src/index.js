import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import App from './components/App';
import Messages from './components/Messages';
import Drafts from './components/Drafts';
import NewFile from './editor/NewFile';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './index.css';
import './editor/editor.css';


const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter history = {history}>
    <Routes>
        <Route path='/' element={<Header> <App/></Header>} />
        <Route path='/messages' element={<Header><Messages/></Header>} />
        <Route path='/drafts' element={<Header><Drafts/></Header>} />
        <Route path="/newfile" element={<Header><NewFile /></Header>} />	
    </Routes>
</BrowserRouter>
);


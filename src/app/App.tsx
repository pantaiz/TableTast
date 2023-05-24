import React from 'react';
import "tailwindcss/tailwind.css"
import './App.css';
import {ListPage} from "../features/ListPage/ListPage";
import {Navigate, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Navigate to={'/navigator'}/>}/>
                <Route path={'/navigator'} element={<ListPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

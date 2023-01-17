import './App.css';
import Functional from './component/functional';
import Class from './component/class';
import React, { useState } from 'react';

const App = () => {
    const [show, setshow] = useState(false);
    const [No, setshows] = useState(false);
    const btn2click = () => {
        setshow(!show);
    };
    const btn1click = () => {
        setshows(!No);
    };

    return (
        <div className="container">
            <div className="Box1"><h1>Styling Using Function And Class Component</h1></div>
            <div >
                <button className="Box3" onClick={btn1click} id="btn1">To see Styling in function component</button>
                <button className="Box2" onClick={btn2click} id="btn2">To see styling in class component</button>
            </div>
            <div className="box4">
                {show && <Functional />} {No && <Class />}
            </div>
        </div>
    );
};

export default App;
import React from 'react';
import 'css/App.css';

const ColorHandler = ({ color }) => {

    let colorOne, colorTwo, colorThree;

    if (color === 'rgb(255,0,0)') {
        colorOne = 255;
        colorTwo = 0;
        colorThree = 0;
    } else if (color === 'rgb(0,255,0)') {
        colorOne = 0;
        colorTwo = 255;
        colorThree = 0;
    } else {
        colorOne = 0;
        colorTwo = 0;
        colorThree = 255;
    }

    function handleChange(event) {
        console.log('EVENT : ', event.target.value);
    }

    return (
        <>
            <div className="color-handler">
                <button className="btn" type="button">-</button>
                <input onChange={handleChange} className="input-box" type="text" value={colorOne} />
                <button className="btn" type="button">+</button>
            </div>
            <div className="color-handler">
                <button className="btn" type="button">-</button>
                <input onChange={handleChange} className="input-box" type="text" value={colorTwo} />
                <button className="btn" type="button">+</button>
            </div>
            <div className="color-handler">
                <button className="btn" type="button">-</button>
                <input onChange={handleChange} className="input-box" type="text" value={colorThree} />
                <button className="btn" type="button">+</button>
            </div>
        </>
    )
}

export default ColorHandler;
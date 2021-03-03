import React from 'react';
import 'css/App.css';

const Pallete = ({ color }) => {

    return (
        <div style={{ backgroundColor: color }} className="palette">

            <div className="handlers">

                rgba(
                <div className="color-handler">
                    <button className="btn" type="button">-</button>
                    <input className="input-box" type="text" />
                    <button className="btn" type="button">+</button>
                </div>
                <div className="color-handler">
                    <button className="btn" type="button">-</button>
                    <input className="input-box" type="text" />
                    <button className="btn" type="button">+</button>
                </div>
                <div className="color-handler">
                    <button className="btn" type="button">-</button>
                    <input className="input-box" type="text" />
                    <button className="btn" type="button">+</button>
                </div>
                )

            </div>

        </div>
    )
}

export default Pallete;
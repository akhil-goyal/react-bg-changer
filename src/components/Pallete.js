import React from 'react';
import ColorHandler from './ColorHandler';
import 'css/App.css';

const Pallete = ({ color }) => {

    return (
        <div style={{ backgroundColor: color }} className="palette">

            <div className="handlers">

                rgba(
                    <ColorHandler color={color} />
                )

            </div>

        </div>
    )
}

export default Pallete;
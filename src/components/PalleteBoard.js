import React from 'react';
import Pallete from './Pallete';

const PaletteBoard = () => {

    const colorPalettes = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'];

    return (
        <>
            <ul className="palletes">
                {
                    colorPalettes.map((color, index) => (
                        <Pallete key={index} color={color} />
                    ))
                }
            </ul>
        </>
    )
}

export default PaletteBoard;
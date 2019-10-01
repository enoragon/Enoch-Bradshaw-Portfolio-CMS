import React from 'react';
import { IconContext } from "react-icons";

const Icon = ({ children, size, color, className, style, attr, href }) => (
    <IconContext.Provider value={{size, color, className, style, attr}}>
        <a  href={ href } target="_blank" rel="noopener noreferrer">
           { children }
        </a>
    </IconContext.Provider>
)

export default Icon;
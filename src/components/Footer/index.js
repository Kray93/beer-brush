import React from 'react';
import graphic from "../../images/footerGraphic.svg";
import "./style.css"



export default function BottomAppBar() {
    return (
        <footer className="footer">
           
            <img className="graphic" src={graphic} alt= "graphic" align="center" />
           
        </footer>
    );
}
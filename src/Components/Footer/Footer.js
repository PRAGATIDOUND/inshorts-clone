import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by -{""}
                <a href="">Pragati Dound</a>
            </span>
            <hr style={{width:"90%"}}/>
            <div className="iconContainer">
                <a href="">
                <i className="fab fa-instagram-square fa-2x"></i>
                </a>

                <a href="">
                <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href=""></a>
                <i class="fas fa-link fa-2x"></i>
            </div>

        </div>
    )
}

export default Footer

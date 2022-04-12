import React from 'react'
import Logo from '../logo/Logo'
import Addres from '../addres/Addres'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__inner container">
                <div className="footer__social">
                    <Logo />
                    <div className="social__links">
                        <div className="social__item facebook">
                            <a href="">Facebook</a>

                        </div>
                        <div className="social__item mail">
                            <a href="">Mail</a>
                        </div>
                        <div className="social__item instagram">
                            <a href="">Instagram</a>
                        </div>
                        <div className="social__item tiktok">
                            <a href="">Tiktok</a>
                        </div>
                        <div className="social__item Youtube">
                            <a href="">Youtube</a>
                        </div>
                    </div>
                </div>
                <Addres />
            </div>
        </footer>
    )
}

export default Footer
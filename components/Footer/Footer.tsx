import { useRouter } from "next/router";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="skl-footer">
            <div className="container">
                <div className="skl-footer__content">
                    <div className="skl-footer__menu-container">
                        <a href="/" className="skl-footer__menu-item">home</a>
                        <a href="/course" className="skl-footer__menu-item">course</a>
                        <a href="/profile" className="skl-footer__menu-item">profile</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="skl-footer">
            <div className="container">
                <div className="skl-footer__content">
                    <div className="skl-footer__menu-container">
                        <Link href="/" className="skl-footer__menu-item">home</Link>
                        <Link href="/course" className="skl-footer__menu-item">course</Link>
                        <Link href="/profile" className="skl-footer__menu-item">profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
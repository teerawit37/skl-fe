import Router, { useRouter } from "next/router";
import Image from 'next/image';
import AuthService from '../../services/auth.service';

const Navbar = () => {
    const router = useRouter();
    const handleLogout = () => {
        AuthService.signout();
        router.push('/signin');
    }
    return (
        <div className="skl-navbar">
            <div className="container">
                <div className="skl-navbar__menu-container">
                    <div className="d-flex">
                    <a href="/" className="skl-navbar__menu-item">home</a>
                    <a href="/course" className="skl-navbar__menu-item">course</a>
                    <a href="/profile" className="skl-navbar__menu-item">profile</a>
                    </div>

                    <div onClick={handleLogout} className="skl-navbar__menu-item">logout</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
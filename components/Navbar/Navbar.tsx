import { useRouter } from "next/router";
import AuthService from '../../services/auth.service';
import Link from "next/link";

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
                        <Link href="/" className="skl-navbar__menu-item">home</Link>
                        <Link href="/course" className="skl-navbar__menu-item">course</Link>
                        <Link href="/profile" className="skl-navbar__menu-item">profile</Link>
                    </div>

                    <div onClick={handleLogout} className="skl-navbar__menu-item">logout</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { LayoutProps } from "./pageWithLayouts";

const AppLayout: LayoutProps = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    );
}

export default AppLayout;
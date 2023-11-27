import Header from '../Header/Header'
import { Outlet } from "react-router-dom"
import Footer from '../footer/Footer'
const Layout = () => {
    return (
        <>
            <Header />
            <main className="p-11">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout

import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

export const AppLayout = () => {
    return(
        <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog">Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
            </Suspense>
    </div>
    )
}
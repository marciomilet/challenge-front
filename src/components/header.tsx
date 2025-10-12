import { NavLink } from "./nav-link";



export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <nav className="flex items-center gap-5">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/upload">Upload</NavLink>
                <NavLink href="/users">Users</NavLink>
                <NavLink href="/campaigns">Campaigns</NavLink>
            </nav>
        </div>
    )
}

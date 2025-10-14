import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2 px-5">
            <nav className="flex items-center gap-5">
                <Link to="/upload">Upload</Link>
                <Link to="/users">Users</Link>
                <Link to="/campaigns">Campaigns</Link>
            </nav>
        </div>
    )
}

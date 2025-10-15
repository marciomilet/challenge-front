import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex items-center justify-between gap-5 py-2 px-5 bg-zinc-900 border-b border-zinc-800">
            <nav className="flex items-center gap-5">
                <Link to="/upload" className="hover:text-zinc-300 transition-colors">Upload</Link>
                <Link to="/users" className="hover:text-zinc-300 transition-colors">Users</Link>
                <Link to="/campaigns" className="hover:text-zinc-300 transition-colors">Campaigns</Link>
            </nav>
        </div>
    )
}

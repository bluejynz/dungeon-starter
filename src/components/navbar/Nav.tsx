import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="m-auto p-5 min-w-full">
            <ul className="w-9/12 m-auto flex flex-wrap gap-6 justify-center text-center">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/char-creation">Create character</Link>
                </li>
                <li>
                    <Link to="/char-creation/dice-rolls">Roll dice</Link>
                </li>
                <li>
                    <Link to="/fighting">Fight</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

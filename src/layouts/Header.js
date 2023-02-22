import { Link } from 'react-scroll';
import Menu from './Menu';

export default function Header() {
    return (
        <div className="header">
            <nav className="nav-bar">
                <h1>
                    <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                        글적글적 연구소
                    </Link>
                </h1>

                <Menu></Menu>
            </nav>
        </div>
    );
}

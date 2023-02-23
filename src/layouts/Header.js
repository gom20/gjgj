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
                <div className="link-wrap">
                    <div className="page-link">
                        <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                            Intro
                        </Link>
                    </div>
                    <div className="page-link active">
                        <Link activeClass="active" className="test2" to="about" spy={true} smooth={true} duration={500}>
                            About
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test3" to="apply" spy={true} smooth={true} duration={500}>
                            Apply
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test4" to="contact" spy={true} smooth={true} duration={500}>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="menu-wrap">
                    <Menu></Menu>
                </div>
            </nav>
        </div>
    );
}

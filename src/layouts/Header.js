import Image from 'next/image';
import { Link } from 'react-scroll';
import Menu from './Menu';

export default function Header() {
    return (
        <div className="header">
            <nav className="nav-bar">
                <h1>
                    <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                        <Image priority src="/logo.png" height={50} width={125} alt="Follow us on Twitter"></Image>
                    </Link>
                </h1>
                <div className="link-wrap">
                    <div className="page-link">
                        <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                            HOME
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test2" to="why" spy={true} smooth={true} duration={500}>
                            WHY
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test3" to="about" spy={true} smooth={true} duration={500}>
                            ABOUT
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test4" to="review" spy={true} smooth={true} duration={500}>
                            수강후기
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test4" to="apply" spy={true} smooth={true} duration={500}>
                            무료 PDF
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test4" to="contact" spy={true} smooth={true} duration={500}>
                            CONTACT
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

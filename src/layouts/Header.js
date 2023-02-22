import { Link } from 'react-scroll';

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                                    intro
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="test2" to="about" spy={true} smooth={true} duration={500}>
                                    about
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="test3" to="review" spy={true} smooth={true} duration={500}>
                                    review
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="test3" to="apply" spy={true} smooth={true} duration={500}>
                                    apply
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="test4" to="contact" spy={true} smooth={true} duration={500}>
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

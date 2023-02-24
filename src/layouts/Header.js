import Image from 'next/image';
import { Link } from 'react-scroll';
import Menu from './Menu';

export default function Header() {
    return (
        <div className="header">
            <nav className="nav-bar">
                <h1>
                    <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                        <div className="logo-text">글적글적연구소</div>
                        {/* <Image priority src="/logo.png" className="logo-img" width={125} height={50} alt="logo"></Image> */}
                    </Link>
                </h1>
                <div className="link-wrap">
                    <div className="page-link ">
                        <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                            처음
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test2" to="why" spy={true} smooth={true} duration={500}>
                            이유
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test3" to="about" spy={true} smooth={true} duration={500}>
                            글적
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test4" to="review" spy={true} smooth={true} duration={500}>
                            후기
                        </Link>
                    </div>
                    <div className="page-link">
                        <Link activeClass="active" className="test4" to="apply" spy={true} smooth={true} duration={500}>
                            신청
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

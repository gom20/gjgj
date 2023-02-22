import { Link } from 'react-scroll';
export default function Footer() {
    return (
        <div className="footer">
            <Link to="test1" spy={true} smooth={true} offset={50} duration={500}>
                Test
            </Link>
        </div>
    );
}

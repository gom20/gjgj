import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="footer">
            <Image priority src="/logo-white.png" className="logo-img" width={125} height={50} alt="logo"></Image>
            <div className="content-wrap">
                <div className="content-text">
                    <p>
                        <b>atoz_story@naver.com 메일로 연락주세요.</b>
                    </p>
                    제가 관심있는 일이라는 생각이 들거나 함께 흥미로운 작업을 만들어보고 싶다면 연락주세요. 진행 과업, 기간, 페이 등이 정리되어 있으면
                    협의하기 좋습니다. 메일 확인은 생각보다 빨라 놀라실 수 있음을 미리 알려드립니다.
                </div>
                <div className="icon-wrap">
                    <Link href={'https://www.instagram.com/hyun.a.007'} target="_blank" className="link">
                        <InstagramIcon className="icon"></InstagramIcon>
                    </Link>
                    <Link href={'https://www.facebook.com/hyuna0070'} target="_blank" className="link">
                        <FacebookIcon className="icon"></FacebookIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
}

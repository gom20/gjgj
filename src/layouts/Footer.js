import Link from 'next/link';

export default function Footer() {
    return (
        <div className="footer">
            <div className="content-text">
                <div className="logo-text">글적글적연구소</div>
                <p className="bold-text">atoz_story@naver.com 메일로 연락주세요.</p>
                <p>제가 관심있는 일이라는 생각이 들거나 함께 흥미로운 작업을 만들어보고 싶다면 연락주세요.</p>
                <p>진행 과업, 기간, 페이 등이 정리되어 있으면 협의하기 좋습니다.</p>
                <p>메일 확인은 생각보다 빨라 놀라실 수 있음을 미리 알려드립니다.</p>
            </div>
            <div className="line">
                <div className="link-wrap">
                    <Link href={'https://www.instagram.com/hyun.a.007'} target="_blank" className="link" style={{ textDecoration: 'none' }}>
                        인스타그램
                    </Link>
                    <div className="link-divider">&nbsp;&nbsp;·&nbsp;&nbsp;</div>
                    <Link href={'https://www.facebook.com/hyuna0070'} target="_blank" className="link" style={{ textDecoration: 'none' }}>
                        페이스북
                    </Link>
                    <div className="link-divider">&nbsp;&nbsp;·&nbsp;&nbsp;</div>
                    <Link href={'https://blog.naver.com/atoz_story'} target="_blank" className="link" style={{ textDecoration: 'none' }}>
                        네이버 블로그
                    </Link>
                    <div className="link-divider">&nbsp;&nbsp;·&nbsp;&nbsp;</div>
                    <Link href={'https://brunch.co.kr/@atozstory'} target="_blank" className="link" style={{ textDecoration: 'none' }}>
                        다음 브런치
                    </Link>
                </div>
            </div>
        </div>
    );
}

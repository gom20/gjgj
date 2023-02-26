import Slider from 'react-slick';
export default function AboutSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const datas = [
        {
            key: '01',
            title: '브랜드 아이덴티티를 구축했습니다.',
            desc: '차별화되고 독보적인 브랜드로 성장하기 위해 브랜드의 키-아이덴티티를 구축합니다. 창업의 시작점을 바탕으로 브랜드의 존재이유, 미션과 비전을 구체화했습니다. 더불어 매력적인 브랜드의 스토리, 슬로건, 핵심가치, 톤앤매너를 중심으로 팀원들과 소통했습니다.',
        },
        {
            key: '02',
            title: '브랜드를 담은 웹페이지와 제작물 등을 기획했습니다.',
            desc: '브랜드를 잘 담은 콘텐츠(공식몰, 제품 상세페이지, 공식 SNS 채널)를 기획하고 구성했습니다. 이를 통해 브랜드를 알리고 상품이나 서비스 홍보에 기여했습니다.',
        },
        {
            key: '03',
            title: '콘텐츠 중심으로 고객을 움직였습니다.',
            desc: '차별화되고 독보적인 브랜드로 성장하기 위해 브랜드의 키-아이덴티티를 구축합니다. 창업의 시작점을 바탕으로 브랜드의 존재이유, 미션과 비전을 구체화했습니다. 더불어 매력적인 브랜드의 스토리, 슬로건, 핵심가치, 톤앤매너를 중심으로 팀원들과 소통했습니다.',
        },
        {
            key: '04',
            title: '제가 한 일로 성과를 달성해왔습니다.',
            desc: '와디즈 크라우드 펀딩 프로젝트 전체 기획 및 콘텐츠 구성을 맡아 1695% 펀딩 달성을 했습니다. 브랜드 공식계정(공식몰, 블로그, 인스타그램, 페이스북) 기획 및 콘텐츠를 제작하여 OKR을 달성했습니다.',
        },
    ];

    return (
        <Slider {...settings} dotsClass="dots_custom">
            {datas.map((data, index) => {
                return (
                    <div className="item" key={data.key}>
                        <div className="item-number">{data.key}</div>
                        <div className="item-title">{data.title}</div>
                        <div className="item-text">{data.desc}</div>
                    </div>
                );
            })}
        </Slider>
    );
}

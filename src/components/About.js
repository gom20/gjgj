import { motion } from 'framer-motion';
import Image from 'next/image';
import { Element } from 'react-scroll';
export default function About() {
    const renderPortfolioImage = (firstIdx, lastIdx) => {
        const result = [];
        for (let cnt = 0; cnt < 2; cnt++) {
            for (let i = firstIdx; i <= lastIdx; i++) {
                const path = '/portfolio/' + i + '.png';
                result.push(
                    <div className="item" key={cnt + '|' + i}>
                        <Image priority src={path} width={300} height={170} className="item-img" alt="portfolio"></Image>
                    </div>
                );
            }
        }
        return result;
    };

    return (
        <Element name="about" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="about">
                <section id="about">
                    <div className="history-container">
                        <div className="title">글적글적 연구소의 발자취</div>
                        <div className="item-wrap">
                            <div className="item">
                                <div className="item-title">브랜드 아이덴티티를 구축했습니다.</div>
                                <div className="item-text">
                                    차별화되고 독보적인 브랜드로 성장하기 위해 브랜드의 키-아이덴티티를 구축합니다. 창업의 시작점을 바탕으로 브랜드의
                                    존재이유, 미션과 비전을 구체화했습니다. 더불어 매력적인 브랜드의 스토리, 슬로건, 핵심가치, 톤앤매너를 중심으로
                                    팀원들과 소통했습니다.
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-title">브랜드를 담은 웹페이지와 제작물 등을 기획했습니다.</div>
                                <div className="item-text">
                                    브랜드를 잘 담은 콘텐츠(공식몰, 제품 상세페이지, 공식 SNS 채널)를 기획하고 구성했습니다. 이를 통해 브랜드를 알리고
                                    상품이나 서비스 홍보에 기여했습니다.
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-title">콘텐츠 중심으로 고객을 움직였습니다.</div>
                                <div className="item-text">
                                    브랜디드 콘텐츠의 전체적인 기획 및 내용 구성과 게시문구 작성을 진행합니다. 진행한 콘텐츠 형식으로는 영상,
                                    카드뉴스, 단컷, 글 등이 있으며, 운영한 SNS 채널은 인스타그램, 페이스북, 브런치, 블로그 등이 있습니다. 궁극적으로
                                    콘텐츠를 통해 브랜드 인지도와 신뢰도를 높이며 핵심고객의 행동(구매, 참여 등)을 유도하고 잠재고객을 설득합니다.
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-title">제가 한 일로 성과를 달성해왔습니다.</div>
                                <div className="item-text">
                                    와디즈 크라우드 펀딩 프로젝트 전체 기획 및 콘텐츠 구성을 맡아 1695% 펀딩 달성을 했습니다. 브랜드 공식계정(공식몰,
                                    블로그, 인스타그램, 페이스북) 기획 및 콘텐츠를 제작하여 OKR을 달성했습니다.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-container">
                        <div className="slider">
                            <motion.div className="item-wrap">{renderPortfolioImage(1, 8)}</motion.div>
                        </div>

                        <div className="slider">
                            <motion.div className="item-wrap">{renderPortfolioImage(9, 16)}</motion.div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

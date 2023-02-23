import { motion } from 'framer-motion';
import Image from 'next/image';
import { Element } from 'react-scroll';
export default function Intro() {
    return (
        <Element name="intro" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="intro">
                    <div className="title">단 30일안에 글쓰기, 브랜딩, 커리어 전략까지 완벽 대비 PDF</div>
                    <div className="sub-title">지금 시작하세요.</div>

                    <div className="content-wrap">
                        <div className="desc-wrap">
                            <div className="desc">
                                글쓰기는 부담스럽습니다 브랜딩은 어렵습니다. 커리어 전략은 막막합니다. 하고자 하는 의지만으로 모든 것이 술술 풀리지
                                않습니다. 시작하고자 하는 의지를 초반부터 꺾어버리는 글쓰기, 브랜딩, 커리어 전략. 한 번에 해결할 수 없을까요?
                                글적글적연구소에서는 가능합니다. 이 PDF를 따라 30일 챌린지를 시작해보세요. 어느새 글쓰기는 술술, 브랜딩은 덤으로, 내가
                                원하는 커리어의 첫 단계도 완성한 스스로를 발견할 수 있을 거예요. <b>지금 시작하세요.</b>
                            </div>
                            <div className="analysis"></div>
                        </div>
                        <Image src="/intro.png" className="desc-img" width={300} height={530} alt="intro"></Image>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

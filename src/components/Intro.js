import useScrollCount from '@/hooks/useScrollCount';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import { Element, Link } from 'react-scroll';
export default function Intro() {
    const challengeCount = useScrollCount(30, 0, 2000, 1000);
    const subjectCount = useScrollCount(30, 0, 2000, 2000);
    const satisfactionCount = useScrollCount(100, 0, 3000, 2500);

    return (
        <Element name="intro" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="intro">
                    <motion.div
                        className="title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0 }}
                        viewport={{ once: true }}>
                        단 30일 안에
                    </motion.div>
                    <motion.div
                        className="title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}>
                        <span className="em">글쓰기, 브랜딩, 커리어 전략까지</span> 완벽 대비
                    </motion.div>
                    <motion.div
                        className="sub-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}>
                        글쓰기 챌린지 전자책 지금 받아가세요.
                    </motion.div>

                    <div className="content-wrap">
                        <div className="desc-wrap">
                            <motion.div
                                className="desc"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.5 }}
                                viewport={{ once: true }}>
                                글쓰기는 부담스럽습니다 브랜딩은 어렵습니다. 커리어 전략은 막막합니다. 하고자 하는 의지만으로 모든 것이 술술 풀리지
                                않습니다. 시작하고자 하는 의지를 초반부터 꺾어버리는 글쓰기, 브랜딩, 커리어 전략. 한 번에 해결할 수 없을까요?
                                글적글적연구소에서는 가능합니다.
                                <b>
                                    이 PDF를 따라 30일 챌린지를 시작해보세요. 어느새 글쓰기는 술술, 브랜딩은 덤으로, 내가 원하는 커리어의 첫 단계도
                                    완성한 스스로를 발견할 수 있을 거예요. 지금 시작하세요.
                                </b>
                            </motion.div>
                            <div className="analysis">
                                <div className="item-wrap">
                                    <div className="item">
                                        <div className="item-title">글쓰기 챌린지</div>
                                        <div className="item-value">
                                            <div {...challengeCount} />
                                            <div>일</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-wrap">
                                    <div className="item">
                                        <div className="item-title">글쓰기 주제</div>
                                        <div className="item-value">
                                            <div {...subjectCount} />
                                            <div>개</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-wrap">
                                    <div className="item">
                                        <div className="item-title">글쓰기 강의 만족도</div>
                                        <div className="item-value">
                                            <div {...satisfactionCount} />
                                            <div>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="apply-button">
                                <Link activeClass="active" to="apply" spy={true} smooth={true} duration={1000}>
                                    무료전자책 신청하기
                                </Link>
                            </button>
                        </div>
                        <div className="intro-img">
                            <Image priority src="/intro.png" width={711} height={575} alt="intro" layout="responsive"></Image>
                        </div>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

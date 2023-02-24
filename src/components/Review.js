import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import { Element } from 'react-scroll';
export default function Review() {
    const renderReview = (firstIdx, lastIdx) => {
        const result = [];

        for (let i = firstIdx; i <= lastIdx; i = i + 2) {
            const path1 = '/review/' + i + '.png';
            const path2 = '/review/' + (i + 1) + '.png';
            result.push(
                <div className="item" key={i}>
                    <div className="item-img-wrap">
                        <Image priority src={path1} className="item-img" alt="review" width={300} height={300}></Image>
                    </div>
                    <div className="item-img-wrap">
                        <Image priority src={path2} className="item-img" alt="review" width={300} height={300}></Image>
                    </div>
                </div>
            );
        }
        return result;
    };
    return (
        <Element name="review" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="review">
                    <div className="review-container">
                        <div className="title">
                            글쓰기 강좌 수강생들의 <b>생생한 이야기</b>
                        </div>
                        <div className="sub-title">
                            그저 그런 1일1포스팅을 완료하는 글쓰기가 아니라 고퀄리티 포스팅이 되도록 첨삭하여, 브랜딩이 되는 글을 완성하도록
                            도와드립니다.
                        </div>
                        <div className="item-wrap">{renderReview(1, 4)}</div>
                        <div className="item-wrap">{renderReview(5, 8)}</div>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

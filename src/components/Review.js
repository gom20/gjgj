import { motion } from 'framer-motion';
import Image from 'next/image';
import { Element } from 'react-scroll';
export default function Review() {
    const renderReview = (firstIdx, lastIdx) => {
        const result = [];

        for (let i = firstIdx; i <= lastIdx; i++) {
            const path = '/review/' + i + '.png';
            result.push(
                <div className="item-img-wrap">
                    <Image src={path} className="item-img" alt="review" width={300} height={300}></Image>
                </div>
            );
        }
        return result;
    };
    return (
        <Element name="review" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="review">
                    <div class="title">수강 후기</div>
                    <div class="item-wrap">{renderReview(1, 4)}</div>
                    <div class="item-wrap">{renderReview(5, 8)}</div>
                </section>
            </motion.div>
        </Element>
    );
}

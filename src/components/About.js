import { motion } from 'framer-motion';
import Image from 'next/image';
import { Element } from 'react-scroll';
import AboutSlider from './AboutSlider';
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
                        <div className="sub-title">글적글적 걸어온 길</div>
                        <motion.div
                            className="title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}>
                            글적글적 연구소의 <b>발자취</b>
                        </motion.div>
                        <div className="item-wrap">
                            <AboutSlider></AboutSlider>
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

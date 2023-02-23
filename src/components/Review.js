import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
export default function Review() {
    return (
        <Element name="review" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="review">
                    <div class="title">수강 후기</div>
                    <div class="item-wrap">
                        <img src="/review/1.png" className="item-img"></img>
                        <img src="/review/2.png" className="item-img"></img>
                        <img src="/review/3.png" className="item-img"></img>
                        <img src="/review/4.png" className="item-img"></img>
                    </div>
                    <div class="item-wrap">
                        <img src="/review/5.png" className="item-img"></img>
                        <img src="/review/6.png" className="item-img"></img>
                        <img src="/review/7.png" className="item-img"></img>
                        <img src="/review/8.png" className="item-img"></img>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

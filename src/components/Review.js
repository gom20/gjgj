import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
export default function Review() {
    return (
        <Element name="review" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="contact">
                <section id="review"> 글적글적연구소 수강생들의 찐 후기가 들어갈 자리입니다.</section>
            </motion.div>
        </Element>
    );
}

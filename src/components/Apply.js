import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
export default function Apply() {
    return (
        <Element name="apply" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="apply">
                <section id="apply"> 무료 PDF 신청하기</section>
            </motion.div>
        </Element>
    );
}

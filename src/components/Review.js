import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
export default function Review() {
    return (
        <Element name="review" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="review">
                <section id="review">
                    <h1>Why?</h1>
                </section>
            </motion.div>
        </Element>
    );
}

import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
export default function Why() {
    return (
        <Element name="why" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="why">
                <section id="why">
                    <h1>Why?</h1>
                </section>
            </motion.div>
        </Element>
    );
}

import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export default function Contact() {
    return (
        <Element name="contact" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="contact">
                <section id="contact"> Contact</section>
            </motion.div>
        </Element>
    );
}

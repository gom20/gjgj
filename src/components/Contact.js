import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export default function Contact() {
    return (
        <Element name="test1" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="contact">
                <section id="about"> Contact</section>
            </motion.div>
        </Element>
    );
}

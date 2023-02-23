import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        if (process.env.NEXT_PUBLIC_EMAIL_KEY) {
            alert('환경변수 잘 들어감');
        } else {
            alert('환경변수 못찾음');
        }
        // emailjs.sendForm('service_2ncutkp', 'template_8p22p29', form.current, process.env.NEXT_PUBLIC_EMAIL_KEY).then(
        //     (result) => {
        //         console.log(result.text);
        //     },
        //     (error) => {
        //         console.log(error.text);
        //     }
        // );
    };

    return (
        <Element name="contact" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="contact">
                <section id="contact">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="from_name" />
                        <label>Email</label>
                        <input type="email" name="from_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </section>
            </motion.div>
        </Element>
    );
}

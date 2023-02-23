import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Element } from 'react-scroll';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert('이메일 전송 테스트');
        return;
        emailjs.sendForm('service_2ncutkp', 'template_8p22p29', form.current, process.env.NEXT_PUBLIC_EMAIL_KEY).then(
            (result) => {
                alert('메시지가 전송되었습니다.');
            },
            (error) => {
                alert('메시지가 전송에 실패했어요.');
            }
        );
    };

    return (
        <Element name="contact" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="contact">
                <section id="contact">
                    <h1>Contact</h1>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <TextField id="outlined-basic" label="이름" variant="outlined" name="from_name" size="small" className="contact-input" />
                        <TextField id="outlined-basic" label="이메일" variant="outlined" name="from_email" size="small" className="contact-input" />
                        <TextField
                            id="outlined-multiline-static"
                            label="메시지"
                            multiline
                            rows={4}
                            name="message"
                            size="small"
                            className="contact-input"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            보내기
                        </Button>
                    </form>
                </section>
            </motion.div>
        </Element>
    );
}

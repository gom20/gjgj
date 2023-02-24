import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Element } from 'react-scroll';
export default function Apply() {
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
        <Element name="apply" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="apply">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="title">30일 글쓰기 챌린지</div>
                        <div className="sub-title">무료 PDF 신청하기</div>
                    </motion.div>

                    <form ref={form} onSubmit={sendEmail} className="apply-form">
                        <TextField id="outlined-basic" label="이름" variant="outlined" name="from_name" size="small" className="apply-input" />
                        <TextField id="outlined-basic" label="이메일" variant="outlined" name="from_email" size="small" className="apply-input" />
                        <Button type="submit" variant="contained" color="primary">
                            보내기
                        </Button>
                    </form>
                </section>
            </motion.div>
        </Element>
    );
}

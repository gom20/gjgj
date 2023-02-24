import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
                        <div className="title">글쓰기, 브랜딩, 커리어 전략까지</div>
                        <div className="sub-title">완벽 대비 전자책 신청하기</div>
                    </motion.div>

                    <Image priority src="/apply-img.png" width={300} height={280} alt="apply"></Image>

                    <form ref={form} onSubmit={sendEmail} className="apply-form">
                        <input name="from_name" className="apply-input" placeholder="이름을 입력해주세요" />
                        <input name="from_email" className="apply-input" placeholder="이메일을 입력해주세요" />
                        <button type="submit" className="apply-button">
                            신청하기
                        </button>
                    </form>
                </section>
            </motion.div>
        </Element>
    );
}

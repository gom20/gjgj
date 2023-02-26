import emailjs from '@emailjs/browser';
import { Button, createTheme, styled, TextField, ThemeProvider } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import { useRef, useState } from 'react';
import { Element } from 'react-scroll';
export default function Apply() {
    const [isApplied, setApplied] = useState(false);
    const form = useRef();

    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
        palette: {
            yellow: createColor('#f6c350'),
        },
    });

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#f6c350',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#f6c350',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#f6c350',
            },
        },
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setApplied(true);
        emailjs.sendForm('service_2ncutkp', 'template_8p22p29', form.current, process.env.NEXT_PUBLIC_EMAIL_KEY).then(
            (result) => {
                alert('신청이 완료되었습니다.');
            },
            (error) => {
                alert('신청에 실패하였습니다. atoz_story@naver.com 메일로 직접 신청해주세요.');
            }
        );
    };

    return (
        <Element name="apply" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <section id="apply">
                    <div className="sub-title">무료 PDF 신청하기</div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="title">글쓰기, 브랜딩, 커리어 전략까지</div>
                        <div className="title-desc">완벽 대비 전자책 신청하기</div>
                    </motion.div>
                    <div className="form-container">
                        <div className="apply-img">
                            <Image priority src="/applypdf-img.png" width={2160} height={1620} alt="apply" layout="responsive"></Image>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="apply-form">
                            <CssTextField label="이름" name="from_name" id="custom-css-outlined-input" size="medium" className="apply-input" />
                            <CssTextField
                                type="email"
                                label="이메일"
                                name="from_email"
                                id="custom-css-outlined-input"
                                size="medium"
                                className="apply-input"
                            />
                            <ThemeProvider theme={theme}>
                                <div className="apply-button">
                                    <Button
                                        disabled={isApplied ? true : false}
                                        type="submit"
                                        variant="contained"
                                        color="yellow"
                                        size="large"
                                        style={{ width: '100%' }}
                                        disableElevation={true}>
                                        신청하기
                                    </Button>
                                </div>
                            </ThemeProvider>
                        </form>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

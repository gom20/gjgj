import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import * as React from 'react';
import { Element } from 'react-scroll';
import EditIcon from '@mui/icons-material/Edit';

import SearchIcon from '@mui/icons-material/Search';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />)(
    ({ theme }) => ({
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0px solid rgba(0, 0, 0, .125)',
}));

export default function Why() {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Element name="why" className="element">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="why">
                <section id="why">
                    <div className="problem-container">
                        <div className="title">
                            이러한 고민을 <b>해결해드립니다.</b>
                        </div>
                        <div className="accordion-container">
                            <div className="item-wrap">
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>&quot;한 건 많은데, 나의 이야기를 정리하기 힘들어요&quot;</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            오래도록 업무를 해와서 한 건 많은데, 막상 한 일들을 글로 정리하는 게 어렵다는 분들이 많습니다. 여기서
                                            중요한 것은, 하고 싶은 이야기와 읽고 싶은 이야기는 다르다는 겁니다. 글적글적연구소에서는 그 포인트를
                                            정확하게 짚어서 개요부터 함께 고민하는 시간을 가집니다.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>&quot;나를 알리는 글을 쓰는 방법이 따로 있나요&quot;</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            수많은 블로그 글쓰기 강의가 있지만, 맛집을 소개해서 방문자수만 많게 만드는 것이 능사는 아닙니다. 브랜딩을
                                            위해서는 많은 사람들이 스쳐&apos;나의 업무&apos;를 소개하는 글이어야 합니다. 나의 SNS에 매일 찾아오고 오래
                                            머무는 팬을 만들어야 합니다.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>&quot;브랜딩하고 싶은데, 방법을 모르겠어요ㅠ&quot;</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            원 소스 멀티 유즈. 하나의 콘텐츠로 여러 채널에 뿌리라는 말을 많이 합니다. 시간과 비용을 최소화하는 일은
                                            언제나 중요하니까요. 앞으로 어떤 방향으로 나아가고 싶은지, 지금까지 해온 일들을 앞으로 하고 싶은 일과
                                            어떻게 자연스럽게 연결할 수 있는지, 내가 원하는 나의 모습은 무엇인지. 깊게 고민해주세요. 방향은 이곳에서
                                            제시해드립니다. 가장 효율적인 방법으로요.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                        <Typography>&quot;브랜딩이 소득으로 연결될 수 있을까요?&quot;</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            이미 글적글적연구소에서 함께한 분들 중 소득 창출하고 하고 계신 분들이 많습니다. 원고작가, 디자이너, 강사
                                            등. 오래도록 프리랜서로 일해왔기에 갖고있는 네트워크로 조금 더 수월하게 시작할 수 있도록 돕겠습니다.
                                            이곳에서 출발선을 앞당겨보세요.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                        <Typography>&quot;이 강의를 들어야 할지 아직 확신이 없습니다.&quot;</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            지금 당장 브랜딩글쓰기를 시작해서 월급만큼 벌 수 있다고 호언장담하지 않겠습니다. 브랜딩에도 단계가
                                            필요하니까요. 하지만 이곳에서 함께 쓰는 글들이, 사골처럼 두고두고 우려먹을 수 있는 액기스가 될 것이라고
                                            확신합니다. 걱정은 뒤로하고 행동하십시오. 끊임없이 방향을 제시하고 잡아드리겠습니다.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className="point-container">
                        <div className="title">글적글적연구소 3 POINTS</div>
                        <div className="item-wrap">
                            <div className="item">
                                <div className="item-title">글쓰기</div>
                                <EditIcon className="item-img"></EditIcon>
                                <div className="item-text">
                                    콘텐츠가 중요한 시대입니다. 그리고 콘텐츠의 토대는 &apos;글&apos;입니다. 논술강사 10년의 경력으로 한 글자, 한 글자
                                    첨삭해드립니다.
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-title">커리어 전략</div>
                                <SearchIcon className="item-img"></SearchIcon>
                                <div className="item-text">브랜딩이 커리어가 될 수 있도록, 장기적인 관점으로 커리어 전략을 짚어드립니다.</div>
                            </div>
                            <div className="item">
                                <div className="item-title">브랜딩</div>
                                <HistoryEduIcon className="item-img"></HistoryEduIcon>
                                <div className="item-text">
                                    글쓰기가 필요한 이유. 바로 브랜딩 때문입니다. 정확한 방향으로, 진정성있게 나를 알리는 방법을 알려드립니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </Element>
    );
}

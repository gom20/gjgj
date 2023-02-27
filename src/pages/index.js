import About from '@/components/About';
import Apply from '@/components/Apply';
import Intro from '@/components/Intro';
import Review from '@/components/Review';
import Why from '@/components/Why';
import Head from 'next/head';
export default function Home() {
    return (
        <>
            <Head>
                <title>글적글적연구소</title>
                <meta name="description" content="글적글적연구소" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:url" content="https://gjgj.vercel.app/" />
                <meta property="og:title" content="글적글적연구소" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/7158623/221453077-901bf7b4-3183-4a6b-acfb-c0a900f2f295.png"
                />
                <meta property="og:description" content="글쓰기 챌린지 워크북 받아가세요." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Intro />
                <Why />
                <About />
                <Review />
                <Apply />
            </main>
        </>
    );
}

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

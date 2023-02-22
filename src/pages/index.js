import About from '@/components/About';
import Apply from '@/components/Apply';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>글적글적 연구소</title>
                <meta name="description" content="글적글적 연구소" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <Intro />
                <About />
                <Apply />
                <Contact />
            </main>
        </>
    );
}

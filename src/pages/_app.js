import Content from '@/layouts/Content';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import Layout from '@/layouts/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Header></Header>
            <Content>
                <Component {...pageProps} />
            </Content>
            <Footer></Footer>
        </Layout>
    );
}

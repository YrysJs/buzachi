import '../shared/styles/globals.css';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import Header from '../widgets/layout/header/Header';
import Footer from '../widgets/layout/footer/Footer';
import { useRouter } from 'next/router';
import { Layout } from '@/shared/ui/layout';

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout header={<Header locale={locale} />} content={<Component locale={locale} {...pageProps} /> } footer={<Footer locale={locale}/>} />
    </>
  )
}


export default appWithTranslation(App)
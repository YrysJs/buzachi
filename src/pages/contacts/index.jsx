import { api } from '../../shared/api';
import { useTranslation  } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';

const Contacts = (data) => {
    const { t } = useTranslation ()

    console.log(data);

    return (
        <>
            <Head>
                <title>{t("head.title")} - {t("head.contacts")}</title>
            </Head>
            <section className="relative">
                <div className="bg-gray_50 h-[35vh]  sm:h-full absolute top-0 left-0 w-full sm:w-[45%]"></div>
                <div className="container flex flex-wrap items-center justify-between py-16 md:py-24">
                    <div className="mb-16 md: mb-0 relative">
                        <h3 className="text-gray_900 font-extrabold text-2xl sm:text-3xl mb-8">{t('contacts.title')}</h3>
                        <h4 className="text-gray_500 text-base mb-6">
                            { data.address }
                        </h4>
                        <a className="flex items-center gap-3 mb-3 text-base text-gray_500" href={`tel:${data.phone.replace(/[\s\(\)+]/g, '')}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1 3C1 1.89543 1.89543 1 3 1H6.27924C6.70967 1 7.09181 1.27543 7.22792 1.68377L8.72574 6.17721C8.88311 6.64932 8.66938 7.16531 8.22427 7.38787L5.96701 8.5165C7.06925 10.9612 9.03878 12.9308 11.4835 14.033L12.6121 11.7757C12.8347 11.3306 13.3507 11.1169 13.8228 11.2743L18.3162 12.7721C18.7246 12.9082 19 13.2903 19 13.7208V17C19 18.1046 18.1046 19 17 19H16C7.71573 19 1 12.2843 1 4V3Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{data.phone}</span>
                        </a>
                        <a className="flex items-center gap-3 mb-3 text-base text-gray_500" href={`mailto:${data.email}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>test@test.com</span>
                        </a>
                    </div>
                    <div className="w-[100%] sm:w-[340px] md:w-[450px] smd:w-[480px] lg:w-[638px] xl:w-[688px] h-[418px] mt-16 md: mt-0 relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5813.870612863835!2d76.89356078649989!3d43.23181601479249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1703570604230!5m2!1sru!2skz" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps({ locale }) {
    const response = await api.get('/contacts', {
        headers: { 'Accept-Language' : locale }
    })

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            ...response.data
        },
    }
}

export default Contacts
import Image from "next/image"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { api } from "@/shared/api"


const NewsDetails = ({data}) => {
    const { t } = useTranslation()
    console.log(data);
    return (
        <>
            <Head>
                <title>{t("head.title")} - {t("head.news")}</title>
            </Head>
            <section className="container font-Mon">
                <div className="flex flex-col md:flex-row sm:h-[initial] md:h-[406px] pt-6 lg:py-7">
                    <div className="py-6 lg:pr-6 md:flex-[4] lg:flex-[3] flex flex-col gap-3 justify-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl/2 lg:text-3xl font-bold">
                            {data.title}
                        </h1>
                    </div>
                    <div className="relative h-[308px] md:h-[initial] md:flex-[3] lg:flex-[3]">
                        <Image src={data.image} fill={true} alt="text" objectFit="cover" />
                        {/* <video className="w-full h-full object-cover" controls>
                            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                        </video> */}
                    </div>
                </div>
                <div className="max-w-[900px] mx-auto text-base sm:text-xl smd:text-2xl text-gray_900 py-6 md:py-12" dangerouslySetInnerHTML={{__html: data.text}}>
                </div>
            </section>
        </>
    )
}

export default NewsDetails

export async function getServerSideProps(context) {
    const { locale } = context
    const response = await api.get('/articles/'+context.params.id, {
        headers: { 'Accept-Language' : locale }
    })
    console.log(response);
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            ...response.data,
        },
    }
}
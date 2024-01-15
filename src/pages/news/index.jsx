import { Pagination } from "@/shared/ui/pagination"
import Link from "next/link"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { api } from "@/shared/api";

const News = (data) => {
    const { t } = useTranslation()
    const formatedDate = (val) => {
        const dateObj = new Date(val);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObj.getDate().toString().padStart(2, "0");
        const formattedDate = day + "." + month + "." + year;
    
        return formattedDate;
      };

    console.log(data)
    return (
        <>
            <Head>
                <title>{t("head.title")} - {t("head.news")}</title>
            </Head>
            <div className="container py-6 md:py-7">
                <h3 className="text-2xl md:text-4xl font-bold text-gray_900 font-Mon">
                    {t('news.title')}
                </h3>
                <div className="grid sm:grid-cols-1 smd:grid-cols-2 gap-x-[66px] gap-y-[40px] py-12 font-Int">
                    {data.articles.data.map(item => {
                        return (
                            <Link key={item.id} href={`/news/${item.id}`}>
                                <div className="text-gray_500 text-xs mb-2">{formatedDate(item.created_at)}</div>
                                <h3 className="text-gray_500 hover:text-gray_900 font-semibold text-xl">{item.title}</h3>
                            </Link>
                        )
                    })}
                </div>
                <Pagination totalCount={data.articles.total} currentPage={1}/>
            </div>
        </>
    )
}

export default News;

export async function getServerSideProps(context) {
    const { locale, query } = context
    const response = await api.get(`/articles?page=${query.page || 1}`, {
        params: query,
        headers: { 'Accept-Language' : locale }
    });
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            ...response.data,
        },
    }
}
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { api } from "@/shared/api";
import clsx from "clsx";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1236,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  customPaging: function (i) {
    return (
      <div className={clsx('custom-dot', {})}></div>
    );
  },
  appendDots: (dots) => (
    <div>
      <ul className='custom-dots' style={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: "relative", top: "-50px"}}>
        {dots}
      </ul>
    </div>
  )
};

const Home = ({quotes, products, articles}) => {
  const { t } = useTranslation()


  const formatedDate = (val) => {
    const dateObj = new Date(val);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    const formattedDate = day + "." + month + "." + year;

    return formattedDate;
  };

  const getDate = () => {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;

      const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

      return formattedDate;
  }

  return (
    <>
      <Head>
        <title>{t("head.title")} - {t("head.home")}</title>
      </Head>
      <main>
      <section className="bg-main-hero bg-no-repeat bg-center lg:bg-right font-Mon h-[100vh] bg-cover">
        <div className="container">
          <div className="max-w-[560px] pt-10 lg:pt-[73px] text-gray_900 pr-3 sm:pr-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              {t('main.hero_title')}
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl">
              {t('main.hero_text')}
            </p>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10 bg-gray_900 !font-Mon">
        <div className="container flex flex-col xl:flex-row items-start md:items-center justify-between gap-4 xl:gap-0">
          <div>
            <h3 className="text-2xl font-extrabold text-gray_50">{t('main.quotes_title')}</h3>
            <p className="text-sm text-gray_50">{t('main.quotes_date')}: {getDate()}</p>
          </div>
          <div className="lg:shrink xl:shrink-0 self-stretch bg-gray_50 h-[1px] w-[auto] xl:h-[auto] xl:w-[1px]"></div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[26px]">
            {quotes.map(item => {
              return (
                <div key={item.name} className="py-2 px-2 md:px-4 rounded-lg bg-gray_800 flex gap-2 md:gap-4 items-center justify-between">
                  <span className="text-lg md:text-2xl font-medium text-[#fff]">
                    {item.name}
                  </span>
                  <span className="text-lg md:text-2xl font-extrabold text-[#fff]">
                    {item.cost}
                  </span>
                  <span className="hidden md:block">
                    {item.is_up === false && (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19 13L12 20L5 13M19 5L12 12L5 5"
                            stroke="#F87171"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    {item.is_up === true && <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 11L12 4L19 11M5 19L12 12L19 19"
                          stroke="#34D399"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>}
                  </span>
                  <span className="block md:hidden">
                    {item.is_up === false && <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M12.6668 8.66665L8.00016 13.3333L3.3335 8.66665M12.6668 3.33331L8.00016 7.99998L3.3335 3.33331"
                          stroke="#F87171"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>}
                    {item.is_up === true && <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3.3335 7.33335L8.00016 2.66669L12.6668 7.33335M3.3335 12.6667L8.00016 8.00002L12.6668 12.6667"
                          stroke="#34D399"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="container grid md:grid-cols-3 gap-7 text-center py-6 md:py-10 lg:py-[60px] text-gray_900 font-Mon">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center">
          {t('main.stats_text')}
        </h3>
        <div className="bg-gray_100 flex flex-col items-center gap-2 py-6 rounded-lg">
          <h3 className="text-4xl md:text-5xl montserrat-text font-extrabold">30 {t('main.stats_year')}</h3>
          <p className="text-base sm:text-xl md:text-2xl">{t('main.stats_year_text')}</p>
        </div>
        <div className="bg-gray_100 flex flex-col items-center gap-2 py-6 rounded-lg">
          <h3 className="text-4xl md:text-5xl font-extrabold">3</h3>
          <p className="text-base sm:text-xl md:text-2xl">{t('main.stats_count')}</p>
        </div>
      </section>
      <section className="py-6 md:py-10 lg:py-[60px] font-Mon">
        <h3 className="container text-2xl sm:text-3xl md:text-4xl font-bold">
          {t('main.products_title')}
        </h3>
        <div className="my-[28px] overflow-hidden">
          <Slider {...settings}>
            { products.map(item => {
              return ( 
                <div key={item.id} className="relative py-8 smd:py-0 min-h-[436px]">
                  <div className="block smd:hidden">
                    <img
                      className="absolute w-[130px] h-[130px] object-contain right-[-30px] z-10 smd:z-0 top-[0px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="hidden smd:block">
                    <img
                      className="absolute z-10 smd:z-0 top-[30px] left-[100px] w-[244px] h-[244px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="relative min-h-[336px] mx-auto smd:mr-[30px] w-[90%] smd:w-[70%] bg-gray_100 p-4 smd:p-6 rounded-lg">
                    <h3 className="text-base sm:text-2xl font-extrabold text-gray_900 mb-[10px] pr-8 sm:pr-0">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-2xl text-gray_900 pr-8 sm:pr-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
      <section className="container flex flex-col gap-7 py-6 md:py-10 lg:py-[60px] font-Mon">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {t('main.main_about.title')}
        </h3>
        <div className="grid lg:grid-cols-3 gap-4 smd:gap-7">
          <div className="bg-gray_100 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
              {t('main.main_about.mission')}
            </h3>
            <p className="text-base md:text-2xl">
            {t('main.main_about.mission_text')}
            </p>
          </div>
          <div className="bg-gray_100 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">{t('main.main_about.target')}</h3>
            <p className="text-base md:text-2xl">
              {t('main.main_about.target_text')}
            </p>
          </div>
          <div className="bg-gray_100 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
              {t('main.main_about.values')}
            </h3>
            <p className="text-base md:text-2xl">
            {t('main.main_about.values_text')}
            </p>
          </div>
        </div>
        <div className="bg-gray_100 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg w-full">
          <h3 className="font-extrabold text-xl md:text-2xl mb-2.5 font-Mon">
          {t('main.main_about.strategy')}
          </h3>
          <p className="text-base md:text-2xl">
          {t('main.main_about.strategy_text')}
          </p>
        </div>
      </section>
      <section className="container py-6 md:py-10 lg:py-[60px] font-Mon">
        <h3 className="text-2xl sm:text-4xl font-bold">{t('main.news_title')}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 smd:gap-7 mt-7 font-Int">
          { articles.map(item => {
            return (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div className="text-sm text-gray_500 mb-2">{formatedDate(item.created_at)}</div>
                <h4 className="text-xl font-semibold text-gray_500 hover:text-gray_900">
                  {item.title}
                </h4>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
    </>
  );
}


export default Home;

export async function getStaticProps({ locale }) {
  const response = await api.get('/main', {
    headers: { 'Accept-Language' : locale }
  })

  return {
      props: {
          ...(await serverSideTranslations(locale, ['common'])),
          ...response.data
      },
  }
}
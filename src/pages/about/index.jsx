import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/head";


const About = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("head.title")} - {t("head.about")}</title>
      </Head>
      <section className="bg-about-hero-ds mix-blend-exclusion h-[100vh] bg-contain bg-no-repeat bg-left-bottom font-Mon">
        <div className="container">
          <div className="md:ml-auto max-w-[575px] pt-4 sm:pt-7 md:pt-10 lg:pt-[73px]">
            <h1 className="text-2xl md:text-4xl lg:text-5xll font-extrabold md:text-right mb-4">
              {t('about.hero_title')}
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl leading-[18px] md:leading-7 md:text-right">
              {t('about.hero_text')}
            </p>
          </div>
        </div>
      </section>
      <section className="container pb-[52px] pt-[30px] md:pb-0 md:pt-0 font-Mon">
        <div className="p-4 sm:py-6 sm:px-12 bg-gray_800 text-gray_50 rounded-lg">
          {t('about.hero_content')}
        </div>
      </section>
      <section className="container flex flex-col gap-7 py-6 md:py-10 lg:py-[60px] font-Mon">
        <div className="grid lg:grid-cols-3 gap-7">
          <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
              {t('about.about_card.mission')}
            </h3>
            <p className="text-base md:text-2xl">
              {t('about.about_card.mission_text')}
            </p>
          </div>
          <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">{t('about.about_card.target')}</h3>
            <p className="text-base md:text-2xl">
            {t('about.about_card.target_text')}
            </p>
          </div>
          <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
            {t('about.about_card.values')}
            </h3>
            <p className="text-base md:text-2xl">
            {t('about.about_card.values_text')}
            </p>
          </div>
        </div>
        <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg w-full">
          <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
            {t('about.about_card.strategy')}
          </h3>
          <p className="text-base md:text-2xl">
          {t('about.about_card.strategy_text')}
          </p>
        </div>
      </section>
      <section className="container py-6 sm:py-10 lg:py-[60px] overflow-x-hidden font-Mon">
        <h3 className="relative z-[50] text-2xl md:text-4xl font-bold mb-6 md:mb-[47px] lg:mb-[67px]">
          {t('about.field.title')}
        </h3>
        <div className="relative">
          <div className="absolute top-[-230px] scale-50 lg:scale-100 left-[-150px] md:left-[100px] lg:left-[300px] xl:left-[initial] xl:top-[initial] xl:right-[initial]">
            <img
              className="max-w-[initial]"
              src="/assets/img/about-map.png"
              alt=""
            />
            <div
              onClick={() => setTabIndex(1)}
              className={clsx(
                "absolute top-[215px] left-[195px] cursor-pointer",
                {
                  ["scale-[1.2]"]: tabIndex === 1,
                }
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1508 12.1508C23.3518 3.94975 36.6482 3.94975 44.8492 12.1508C53.0503 20.3518 53.0503 33.6482 44.8492 41.8492L30 56.6985L15.1508 41.8492C6.94975 33.6482 6.94975 20.3518 15.1508 12.1508ZM30 33C33.3137 33 36 30.3137 36 27C36 23.6863 33.3137 21 30 21C26.6863 21 24 23.6863 24 27C24 30.3137 26.6863 33 30 33Z"
                  fill={tabIndex === 1 ? "#111827" : "#4B5563"}
                />
              </svg>
            </div>
            <div
              onClick={() => setTabIndex(2)}
              className={clsx(
                "absolute top-[255px] left-[240px] cursor-pointer",
                {
                  ["scale-[1.2]"]: tabIndex === 2,
                }
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1508 12.1508C23.3518 3.94975 36.6482 3.94975 44.8492 12.1508C53.0503 20.3518 53.0503 33.6482 44.8492 41.8492L30 56.6985L15.1508 41.8492C6.94975 33.6482 6.94975 20.3518 15.1508 12.1508ZM30 33C33.3137 33 36 30.3137 36 27C36 23.6863 33.3137 21 30 21C26.6863 21 24 23.6863 24 27C24 30.3137 26.6863 33 30 33Z"
                  fill={tabIndex === 2 ? "#111827" : "#4B5563"}
                />
              </svg>
            </div>
            <div
              onClick={() => setTabIndex(3)}
              className={clsx(
                "absolute top-[285px] left-[190px] cursor-pointer",
                {
                  ["scale-[1.2]"]: tabIndex === 3,
                }
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1508 12.1508C23.3518 3.94975 36.6482 3.94975 44.8492 12.1508C53.0503 20.3518 53.0503 33.6482 44.8492 41.8492L30 56.6985L15.1508 41.8492C6.94975 33.6482 6.94975 20.3518 15.1508 12.1508ZM30 33C33.3137 33 36 30.3137 36 27C36 23.6863 33.3137 21 30 21C26.6863 21 24 23.6863 24 27C24 30.3137 26.6863 33 30 33Z"
                  fill={tabIndex === 3 ? "#111827" : "#4B5563"}
                />
              </svg>
            </div>
          </div>
          <div className="relative p-0 sm:p-4 md:p-8 lg:p-10 xl:p-12 xl:bg-gray_100 rounded-lg max-w-[870px] w-full xl:ml-auto">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setTabIndex(1)}
                className={clsx(
                  "w-fit border-l-2 border-gray_400 hover:border-gray_600 px-4 py-2 text-gray_500 hover:text-gray_600 text-base md:text-lg font-bold",
                  {
                    ["border-gray_900 text-gray_900"]: tabIndex === 1,
                  }
                )}
              >
                {t('about.field.vostok')}
              </button>
              <button
                onClick={() => setTabIndex(2)}
                className={clsx(
                  "w-fit border-l-2 border-gray_400 hover:border-gray_600 px-4 py-2 text-gray_500 hover:text-gray_600 text-base md:text-lg font-bold",
                  {
                    ["border-gray_900 text-gray_900"]: tabIndex === 2,
                  }
                )}
              >
                {t('about.field.morskoi')}
              </button>
              <button
                onClick={() => setTabIndex(3)}
                className={clsx(
                  "w-fit border-l-2 border-gray_400 hover:border-gray_600 px-4 py-2 text-gray_500 hover:text-gray_600 text-base md:text-lg font-bold",
                  {
                    ["border-gray_900 text-gray_900"]: tabIndex === 3,
                  }
                )}
              >
                {t('about.field.north')}
              </button>
            </div>
            {tabIndex === 1 && (
              <div className="flex flex-col gap-3 text-xs md:text-base text-gray_900 mt-4">
                <p>
                  {t('about.field.vostok_one')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                {t('about.field.vostok_two')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                {t('about.field.vostok_three')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                {t('about.field.vostok_four')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                {t('about.field.vostok_five')}
                </p>
              </div>
            )}
            {tabIndex === 2 && (
              <div className="flex flex-col gap-3 text-xs md:text-base text-gray_900 mt-4">
                <p>
                  {t('about.field.morskoi_one')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.morskoi_two')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.morskoi_three')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.morskoi_four')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                {t('about.field.morskoi_five')}
                </p>
              </div>
            )}
            {tabIndex === 3 && (
              <div className="flex flex-col gap-3 text-xs sm:text-base text-gray_900 mt-4">
                <p>
                  {t('about.field.north_one')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.north_two')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.north_three')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.north_four')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.north_five')}
                </p>
                <div className="w-[36px] h-[2px] bg-gray_400"></div>
                <p>
                  {t('about.field.north_six')}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="container py-6 sm:py-10 lg:py-[60px] font-Mon">
        <h3 className="text-2xl md:text-4xl font-bold mb-6">{t('about.principles.title')}:</h3>
        <div className="flex">
          <div className="w-full xl:max-w-[878px] grid grid-cols-10 gap-6 justify-between">
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_100 rounded-lg col-span-10">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>
              {t('about.principles.chip_1')}
              </p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_200 rounded-lg col-span-4">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>{t('about.principles.chip_2')}</p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_50 rounded-lg col-span-6">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>
              {t('about.principles.chip_3')}
              </p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_100 rounded-lg col-span-6">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>
              {t('about.principles.chip_4')}
              </p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_200 rounded-lg col-span-4">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>{t('about.principles.chip_5')}</p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_50 rounded-lg col-start-1 col-span-5">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>{t('about.principles.chip_6')}</p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_100 rounded-lg col-span-5">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>
              {t('about.principles.chip_7')}
              </p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_200 rounded-lg col-start-1 col-span-6">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>{t('about.principles.chip_8')}</p>
            </div>
            <div className="p-2 md:p-4 flex gap-4 text-xs sm:text-xl items-center leading-4 md:leading-6 text-gray_900 bg-gray_50 rounded-lg col-span-4">
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
              </div>
              <p>
              {t('about.principles.chip_9')}
              </p>
            </div>
          </div>
          <div className="hidden xl:block">
            <img src="/assets/img/about-princip.png" alt="" />
          </div>
        </div>
      </section>
      <section className="container flex flex-col xl:flex-row gap-2 xl:gap-6 font-Mon">
        <div className="bg-gray_50 p-4 md:p-7 rounded-lg xl:max-w-[520px]">
          <h3 className="font-bold text-xl md:text-2xl leading-6">
          {t('about.secure.title')}
          </h3>
          <p className="my-6 font-semibold text-base md:text-xl leading-[18px] md:leading-6">
          {t('about.secure.title_text_1')}
          </p>
          <p className="font-semibold text-base md:text-xl leading-[18px] md:leading-6">
          {t('about.secure.title_text_2')}
          </p>
        </div>
        <div className="p-4 md:p-6">
          <ul className="flex flex-col gap-y-2 md:gap-y-4 list-disc text-base md:text-lg font-medium leading-4 md:leading-5 text-gray_900">
            <li>
            {t('about.secure.item_1')}
            </li>
            <li>
            {t('about.secure.item_2')}
            </li>
            <li>
            {t('about.secure.item_3')}
            </li>
            <li>
            {t('about.secure.item_4')}
            </li>
            <li>
            {t('about.secure.item_5')}
            </li>
            <li>
            {t('about.secure.item_6')}
            </li>
            <li>
            {t('about.secure.item_7')}
            </li>
            <li>
            {t('about.secure.item_8')}
            </li>
          </ul>
        </div>
      </section>
      <section className="container pt-6 md:pt-10 pb-4 md:pb-[37px] font-Mon">
        <div className="bg-gray_50 p-4 md:p-7 rounded-lg">
          <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6">
          {t('about.util.title')}
          </h3>
          <p className="font-semibold text-base md:text-xl">
          {t('about.util.text')}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;


export async function getStaticProps({ locale }) {
  return {
      props: {
          ...(await serverSideTranslations(locale, ['common'])),
      },
  }
}
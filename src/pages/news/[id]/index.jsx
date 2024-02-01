import Image from "next/image";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { api } from "@/shared/api";
import parse from 'html-react-parser'
import React from 'react'
import { useState, useRef } from "react";
import clsx from "clsx";

const NewsDetails = ({ data }) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <Head>
        <title>
          {t("head.title")} - {t("head.news")}
        </title>
      </Head>
      <section className="container font-Mon">
        <div className={clsx('grid sm:h-[initial] pt-6 lg:py-7', {
          'smd:grid-cols-2 smd:gap-12': data.image !== null || data.video !== null,
          'w-fit mx-auto' : data.image == null && data.video == null
        })}>
          <div className="py-6 flex flex-col gap-3 justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl/2 lg:text-3xl font-bold">
              {data.title}
            </h1>
          </div>
          <div className={clsx('relative', {
            'sm:h-[374px]': data.image !== null || data.video !== null,
            'hidden' : data.image == null && data.video == null
          })}>
            <div className={clsx('w-full h-[250px] sm:h-[374px] object-cover absolute z-10 duration-500', {
              'z-[-1] hide-preview': isPlaying,
              'z-10 show-preview': !isPlaying,
            })}>
              { data.image && <Image src={data.image} fill={true} alt="text" objectFit="cover" />}
              {data.video && <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-[50%] cursor-pointer" onClick={handlePlayPause}>
                <img src="/assets/img/play.webp" alt="" />  
              </div>}
            </div>
            { data.video && 
              <video className="w-full h-[250px] sm:h-[374px] object-cover" controls ref={videoRef} onEnded={handleVideoEnded}>
                  <source src={data.video} />
              </video>
            }
          </div>
        </div>
        <div
          className="max-w-[900px] flex flex-col gap-6 smd:gap-12 mx-auto text-base sm:text-xl smd:text-2xl text-gray_900 py-6 md:py-12"
        >
          <ModifiedJSX html={data.text}/>
        </div>
      </section>
    </>
  );
};

const ModifiedJSX = ({ html }) => {
  const parsedHTML = parse(html);
  const applyStyles = (element) => {
    if (React.isValidElement(element)) {
      const elementType = element.type;
      if (elementType === "ul") {
        return React.cloneElement(
          element,
          { className: "custom-ul" },
          React.Children.map(element.props.children, applyStyles)
        );
      } else if (elementType === "li") {
        return React.cloneElement(element, {
          className:
            "my-2 text-base sm:text-2xl flex items-center before:mr-6 before:min-w-[8px] before:lg:min-w-[12px] before:h-[8px] before:lg:h-[12px] before:bg-gray_900 before:rounded-full",
        });
      } else if (elementType === "p") {
        return React.cloneElement(element, {
          className: "text-base sm:text-2xl text-left font-normal",
        });
      } else if (elementType === "table") {
        return React.cloneElement(element, { className: "page-tables" });
      }
    }

    return element;
  };
  const jsx = React.Children.map(parsedHTML, applyStyles);
  return <>{jsx}</>;
};

export default NewsDetails;

export async function getServerSideProps(context) {
  const { locale } = context;
  const response = await api.get("/articles/" + context.params.id, {
    headers: { "Accept-Language": locale },
  });
  console.log(response);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...response.data,
    },
  };
}

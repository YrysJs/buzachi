import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import { api } from "@/shared/api";
import { useEffect, useState } from "react";

const navigationPath = [
  {
    text: "header.home",
    path: "/",
  },
  {
    text: "header.about",
    path: "/about",
  },
  {
    text: "header.news",
    path: "/news?page=1",
  },
  {
    text: "header.contacts",
    path: "/contacts",
  },
];

const Footer = ({locale}) => {
  const pathName = usePathname();
  const { t } = useTranslation();
  const [data, setData] = useState({
    email: '',
    phone: ''
  })

  useEffect(() => {
    const fetchData = async () => {
        const response = await api.get('/contacts', {
            headers: { 'Accept-Language' : locale }
        })

        setData(response.data);
    };

    fetchData();
  }, []);

  

  return (
    <footer>
      <div className="container">
        {pathName !== "/contacts" ? (
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gray_100 py-4 px-4 sm:py-6 sm:px-12 my-6 md:my-10 lg:my-[60px] rounded-lg font-Mon">
            <div className="relative min-w-[310px] min-h-[310px] md:w-[492px] md:h-[400px]">
              <img
                src="/assets/img/footer-form.png"
                className="mt-[24px] w-[95%] h-[95%]"
                alt="footer_form"
              />
            </div>
            <div className="max-w-[693px] w-[100%] flex flex-col gap-4">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray_900">
                {t("footer.title")}
              </h3>
              <a
                className="block w-full py-2 md:py-4 bg-gray_300 text-center rounded-lg font-semibold text-base md:text-xl"
                href={`tel:${data.phone.replace(/[\s\(\)+]/g, '')}`}
              >
                {t("footer.phone_text")}
              </a>
              <a
                className="block w-full py-2 md:py-4 bg-gray_300 text-center rounded-lg font-semibold text-base md:text-xl"
                href={`mailto:${data.email}`}
              >
                Email
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
        
        <div className="py-6 md:py-6 lg:py-12 px-0 mdpx-8">
          <div className="flex items-start md:items-center justify-between mb-8">
            <div className="flex items-start md:items-center gap-[30px]">
              <Link href="/" className="w-[30px] h-[30px] relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M16.7732 9.82177C21.0455 7.93361 25.083 5.7683 26.7089 0.571533H0V27.4215H4.66073C4.66073 15.2957 11.1008 12.3249 16.7732 9.82177Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M17.7576 11.6925C12.1665 14.161 6.80127 16.1617 6.80127 27.4214H28.0004V3.55957C25.2906 8.12406 21.6777 9.96891 17.7576 11.6925Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </Link>
              <nav>
                <ul className="grid grid-cols-2 sm:flex flex-wrap gap-1 md:gap-10 text-base font-noraml font-Int">
                  {navigationPath.map((route) => {
                    return (
                      <li key={route.path}>
                        <Link
                          href={route.path}
                          className={
                            pathName == route.path
                              ? "text-gray_900"
                              : "text-[gray]"
                          }
                        >
                          {t(route.text)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="pr-1">
              <Link href="/" className="w-[24px] h-[24px] relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <h3 className="text-gray_400 text-base w-[50%] md:w-fit ml-0 md:ml-auto">
            © 2020 Workflow, Inc. All rights reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

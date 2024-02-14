import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import { useRouter } from "next/router"
import { i18n, useTranslation } from "next-i18next"
import Select from 'react-select'

const navigationPath = [
    {
        text: 'header.home',
        path: '/'
    },
    {
        text: 'header.about',
        path: '/about'
    },
    {
        text: 'header.news',
        path: '/news?page=1'
    },
    {
        text: 'header.contacts',
        path: '/contacts'
    }
]

const lang = [
    {
        value: 'ru',
        label: 'Русский',
        locale: 'ru'
    },
    {
        value: 'kz',
        label: 'Қазақша',
        locale: 'kz'
    },
    {
        value: 'en',
        label: 'English',
        locale: 'en'
    },
]

const customStyles = {
    control: (base, state) => ({
        ...base,
        border: 'none',
        boxShadow: 'none'
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#E5E7EB' : 'white',
        color: 'black'
    }),
};


export default function Header({locale}) {
    const [menuState, setMenuState] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const {t} = useTranslation()

    const handleChange = (selectedOption) => {
        const locale = selectedOption.value;
        router.push(router.asPath, undefined, { locale });
        i18n.changeLanguage(locale);
    };

    return (
        <header className="py-6 md:py-8 lg:py-10 xl:py-12 sticky top-0 left-0 smd:static bg-[#fff] z-[9999] w-full">
            <div className="container flex flex-col smd:flex-row justify-between smd:items-center">
                <Link href='/' className="w-[198px] h-[30px] relative z-[9999] block">
                    <Image src="/assets/img/logo.svg" fill={true} alt="logo" />
                </Link>
                <button onClick={() => setMenuState(!menuState)} className="absolute right-4 mt-1 block smd:hidden">
                    {
                        menuState ? 
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M18 18.25L6 6.25M18 6.25L6 18.25" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                            : 
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    }
                </button>
                <nav className="hidden smd:block">
                    <ul className="flex gap-10 text-base font-medium">
                        {
                            navigationPath.map( (route) => {
                                return (
                                <li key={route.path}>
                                    <Link href={route.path} className={clsx('font-Mon', {
                                        ['text-gray_900'] : router.asPath == route.path,
                                        ['text-gray_500'] : router.asPath !== route.path,})
                                        }>
                                        {t(route.text)}
                                    </Link>
                                </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <Select 
                    instanceId="header"
                    className="hidden smd:block font-Int font-medium"
                    styles={customStyles}
                    value={lang.find(item => item.locale === locale)}
                    options={lang}
                    onChange={handleChange}
                    getOptionLabel={(option) => t(option.label)}
                    getOptionValue={(option) => option.value}
                />
                <div className={clsx('block smd:hidden grid w-full grid-rows-none duration-500	', {
                    ['show-menu overflow-visible animated-menu'] : menuState,
                    ['hide-menu overflow-hidden'] : !menuState,
                })}>
                    <nav className="py-6">
                        <ul className="flex flex-col gap-6 text-lg font-medium font-Mon">
                            {
                                navigationPath.map( (route) => {
                                    return (
                                    <li key={route.path}>
                                        <Link href={route.path} className={pathname == route.path ? 'text-gray_900':'text-[gray]'} onClick={() => setMenuState(false)}>
                                            {t(route.text)}
                                        </Link>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="text-sm py-4 flex justify-between font-Mon font-semibold">
                        <Link href={router.asPath} locale={"ru"} className={`uppercase ${locale === 'ru' ? 'text-gray_900':'text-gray_500'}`} onClick={() => setMenuState(false)}>Русский</Link>
                        <Link href={router.asPath} locale={"kz"} className={`uppercase ${locale === 'kz' ? 'text-gray_900':'text-gray_500'}`} onClick={() => setMenuState(false)}>Казахский</Link>
                        <Link href={router.asPath} locale={"en"} className={`uppercase ${locale === 'en' ? 'text-gray_900':'text-gray_500'}`} onClick={() => setMenuState(false)}>English</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

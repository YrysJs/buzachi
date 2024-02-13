exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 5857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2547);
/* harmony import */ var _shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _widgets_layout_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4948);
/* harmony import */ var _widgets_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(662);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_ui_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_layout_header_Header__WEBPACK_IMPORTED_MODULE_4__, _widgets_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_5__]);
([_widgets_layout_header_Header__WEBPACK_IMPORTED_MODULE_4__, _widgets_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const App = ({ Component, pageProps })=>{
    const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ui_layout__WEBPACK_IMPORTED_MODULE_7__/* .Layout */ .A, {
                header: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_layout_header_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    locale: locale
                }),
                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    locale: locale,
                    ...pageProps
                }),
                footer: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    locale: locale
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.appWithTranslation)(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://185.233.3.103:8080/api" || 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* reexport safe */ _axios__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7200);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* reexport */ layout_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/shared/ui/layout/Layout.jsx

const Layout = ({ header = /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {}), content = /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {}), footer = /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {}) })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            header,
            content,
            footer
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/shared/ui/layout/index.js



/***/ }),

/***/ 662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3172);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_api__WEBPACK_IMPORTED_MODULE_4__]);
_shared_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const navigationPath = [
    {
        text: "header.home",
        path: "/"
    },
    {
        text: "header.about",
        path: "/about"
    },
    {
        text: "header.news",
        path: "/news?page=1"
    },
    {
        text: "header.contacts",
        path: "/contacts"
    }
];
const Footer = ({ locale })=>{
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        email: "",
        phone: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const fetchData = async ()=>{
            const response = await _shared_api__WEBPACK_IMPORTED_MODULE_4__/* .api */ .h.get("/contacts", {
                headers: {
                    "Accept-Language": locale
                }
            });
            setData(response.data);
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                pathName !== "/contacts" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col-reverse lg:flex-row justify-between items-center bg-gray_100 py-4 px-4 sm:py-6 sm:px-12 my-6 md:my-10 lg:my-[60px] rounded-lg font-Mon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative min-w-[310px] min-h-[310px] md:w-[492px] md:h-[400px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/img/footer-form.png",
                                className: "mt-[24px] w-[95%] h-[95%]",
                                alt: "footer_form"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-[693px] w-[100%] flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-bold text-2xl md:text-3xl lg:text-4xl text-gray_900",
                                    children: t("footer.title")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "block w-full py-2 md:py-4 bg-gray_300 text-center rounded-lg font-semibold text-base md:text-xl",
                                    href: `tel:${data.phone.replace(/[\s\(\)+]/g, "")}`,
                                    children: t("footer.phone_text")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "block w-full py-2 md:py-4 bg-gray_300 text-center rounded-lg font-semibold text-base md:text-xl",
                                    href: `mailto:${data.email}`,
                                    children: "Email"
                                })
                            ]
                        })
                    ]
                }) : "",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-6 md:py-6 lg:py-12 px-0 mdpx-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-start md:items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start md:items-center gap-[30px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            className: "w-[30px] h-[30px] relative block",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 28 28",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M16.7732 9.82177C21.0455 7.93361 25.083 5.7683 26.7089 0.571533H0V27.4215H4.66073C4.66073 15.2957 11.1008 12.3249 16.7732 9.82177Z",
                                                        fill: "#D1D5DB"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M17.7576 11.6925C12.1665 14.161 6.80127 16.1617 6.80127 27.4214H28.0004V3.55957C25.2906 8.12406 21.6777 9.96891 17.7576 11.6925Z",
                                                        fill: "#D1D5DB"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "grid grid-cols-2 sm:flex flex-wrap gap-1 md:gap-10 text-base font-noraml font-Int",
                                                children: navigationPath.map((route)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: route.path,
                                                            className: pathName == route.path ? "text-gray_900" : "text-[gray]",
                                                            children: t(route.text)
                                                        })
                                                    }, route.path);
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pr-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "https://kz.linkedin.com/company/buzachi-neft-llp?trk=public_post_reshare-text",
                                        className: "w-[24px] h-[24px] relative block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z",
                                                fill: "#9CA3AF"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-gray_400 text-base w-[50%] md:w-fit ml-0 md:ml-auto",
                            children: "\xa9 2020 Workflow, Inc. All rights reserved."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6593);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_5__, react_select__WEBPACK_IMPORTED_MODULE_8__]);
([clsx__WEBPACK_IMPORTED_MODULE_5__, react_select__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const navigationPath = [
    {
        text: "header.home",
        path: "/"
    },
    {
        text: "header.about",
        path: "/about"
    },
    {
        text: "header.news",
        path: "/news?page=1"
    },
    {
        text: "header.contacts",
        path: "/contacts"
    }
];
const lang = [
    {
        value: "ru",
        label: "Русский",
        locale: "ru"
    },
    {
        value: "kz",
        label: "Казахский",
        locale: "kz"
    },
    {
        value: "en",
        label: "English",
        locale: "en"
    }
];
const customStyles = {
    control: (base, state)=>({
            ...base,
            border: "none",
            boxShadow: "none"
        }),
    option: (provided, state)=>({
            ...provided,
            backgroundColor: state.isSelected ? "#E5E7EB" : "white",
            color: "black"
        })
};
function Header({ locale }) {
    const [menuState, setMenuState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const handleChange = (selectedOption)=>{
        const locale = selectedOption.value;
        router.push(router.asPath, undefined, {
            locale
        });
        next_i18next__WEBPACK_IMPORTED_MODULE_7__.i18n.changeLanguage(locale);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "py-6 md:py-8 lg:py-10 xl:py-12 sticky top-0 left-0 smd:static bg-[#fff] z-[9999] w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex flex-col smd:flex-row justify-between smd:items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "w-[198px] h-[30px] relative z-[9999] block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/assets/img/logo.svg",
                        fill: true,
                        alt: "logo"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setMenuState(!menuState),
                    className: "absolute right-4 mt-1 block smd:hidden",
                    children: menuState ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M18 18.25L6 6.25M18 6.25L6 18.25",
                                stroke: "#9CA3AF",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M4 6H20M4 12H20M4 18H20",
                                stroke: "#9CA3AF",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "hidden smd:block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "flex gap-10 text-base font-medium",
                        children: navigationPath.map((route)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: route.path,
                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])("font-Mon", {
                                        ["text-gray_900"]: router.asPath == route.path,
                                        ["text-gray_500"]: router.asPath !== route.path
                                    }),
                                    children: t(route.text)
                                })
                            }, route.path);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    instanceId: "header",
                    className: "hidden smd:block font-Int font-medium",
                    styles: customStyles,
                    value: lang.find((item)=>item.locale === locale),
                    options: lang,
                    onChange: handleChange,
                    getOptionLabel: (option)=>t(option.label),
                    getOptionValue: (option)=>option.value
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])("block smd:hidden grid w-full grid-rows-none duration-500	", {
                        ["show-menu overflow-visible animated-menu"]: menuState,
                        ["hide-menu overflow-hidden"]: !menuState
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "py-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex flex-col gap-6 text-lg font-medium font-Mon",
                                children: navigationPath.map((route)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: route.path,
                                            className: pathname == route.path ? "text-gray_900" : "text-[gray]",
                                            onClick: ()=>setMenuState(false),
                                            children: t(route.text)
                                        })
                                    }, route.path);
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-sm py-4 flex justify-between font-Mon font-semibold",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: router.asPath,
                                    locale: "ru",
                                    className: `uppercase ${locale === "ru" ? "text-gray_900" : "text-gray_500"}`,
                                    onClick: ()=>setMenuState(false),
                                    children: "Русский"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: router.asPath,
                                    locale: "kz",
                                    className: `uppercase ${locale === "kz" ? "text-gray_900" : "text-gray_500"}`,
                                    onClick: ()=>setMenuState(false),
                                    children: "Казахский"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: router.asPath,
                                    locale: "en",
                                    className: `uppercase ${locale === "en" ? "text-gray_900" : "text-gray_500"}`,
                                    onClick: ()=>setMenuState(false),
                                    children: "English"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2547:
/***/ (() => {



/***/ })

};
;
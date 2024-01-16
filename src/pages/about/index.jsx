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
      <section className="bg-[#fff] h-[100vh] bg-contain bg-no-repeat bg-left-bottom font-Mon overflow-hidden">
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
        <div className="about-hero xl:lg-[-10%] mt-[-10%] w-[1195px] relative">
          <img className="w-full" src="/assets/img/about-hero.png" alt="" />
          <div className="l1 absolute top-[30%] right-[-20%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="450" height="337" viewBox="0 0 450 337" fill="none">
              <g style={{ mixBlendMode: 'exclusion'}}>
              <path d="M1.61826 318.214C1.26171 318.425 1.14359 318.885 1.35443 319.241L4.79021 325.051C5.00105 325.408 5.46103 325.526 5.81753 325.315C6.17406 325.104 6.29219 324.644 6.08135 324.288L3.02732 319.123L8.19192 316.069C8.54846 315.858 8.66658 315.399 8.45574 315.042C8.24491 314.685 7.78497 314.567 7.42844 314.778L1.61826 318.214ZM443.262 0.998625C443.764 3.65943 444.219 6.32609 444.629 8.99764L446.112 8.77015C445.7 6.08182 445.241 3.39835 444.736 0.720736L443.262 0.998625ZM446.545 25.0934C447.002 30.4806 447.279 35.8797 447.377 41.2828L448.877 41.2556C448.778 35.8194 448.5 30.3871 448.039 24.9664L446.545 25.0934ZM447.139 57.4938C446.884 62.8879 446.453 68.2783 445.85 73.6573L447.34 73.8244C447.947 68.4138 448.381 62.9913 448.638 57.5648L447.139 57.4938ZM443.533 89.7079C442.594 95.0217 441.487 100.316 440.215 105.585L441.673 105.937C442.952 100.639 444.065 95.3134 445.01 89.9689L443.533 89.7079ZM435.928 121.229C434.347 126.382 432.606 131.502 430.708 136.581L432.113 137.106C434.021 131.999 435.772 126.851 437.362 121.669L435.928 121.229ZM424.585 151.596C422.406 156.524 420.076 161.404 417.597 166.23L418.932 166.915C421.423 162.063 423.766 157.157 425.957 152.203L424.585 151.596ZM409.779 180.438C407.049 185.081 404.177 189.665 401.166 194.182L402.414 195.014C405.441 190.473 408.327 185.866 411.072 181.199L409.779 180.438ZM391.795 207.423C388.563 211.731 385.199 215.968 381.704 220.128L382.852 221.093C386.365 216.912 389.747 212.654 392.995 208.324L391.795 207.423ZM370.928 232.264C367.244 236.193 363.435 240.041 359.506 243.802L360.543 244.885C364.492 241.106 368.319 237.238 372.022 233.29L370.928 232.264ZM347.496 254.695C343.42 258.199 339.229 261.614 334.926 264.934L335.843 266.122C340.167 262.785 344.377 259.354 348.474 255.833L347.496 254.695ZM321.833 274.501C317.411 277.558 312.884 280.519 308.253 283.379L309.041 284.656C313.694 281.782 318.243 278.807 322.686 275.735L321.833 274.501ZM294.225 291.554C289.508 294.144 284.694 296.633 279.785 299.015L280.44 300.365C285.372 297.972 290.208 295.471 294.947 292.869L294.225 291.554ZM265.043 305.723C260.109 307.823 255.087 309.818 249.979 311.705L250.498 313.112C255.629 311.217 260.674 309.212 265.63 307.103L265.043 305.723ZM234.625 316.961C229.499 318.58 224.294 320.093 219.01 321.495L219.394 322.944C224.701 321.537 229.929 320.018 235.077 318.391L234.625 316.961ZM203.242 325.293C198.013 326.427 192.712 327.456 187.341 328.374L187.594 329.852C192.987 328.931 198.31 327.898 203.56 326.759L203.242 325.293ZM171.278 330.761C165.941 331.437 160.539 332.006 155.074 332.465L155.199 333.96C160.686 333.499 166.109 332.928 171.467 332.249L171.278 330.761ZM138.944 333.489C133.594 333.72 128.186 333.847 122.722 333.868L122.728 335.368C128.211 335.347 133.639 335.22 139.009 334.988L138.944 333.489ZM106.41 333.614C101.083 333.429 95.706 333.144 90.2789 332.757L90.172 334.253C95.6173 334.642 101.013 334.928 106.358 335.113L106.41 333.614ZM74.1052 331.31C68.7597 330.737 63.3683 330.065 57.9318 329.292L57.7206 330.777C63.174 331.552 68.5825 332.226 73.9452 332.802L74.1052 331.31ZM41.9779 326.754C36.6819 325.822 31.3451 324.796 25.9682 323.673L25.6615 325.141C31.0538 326.268 36.4063 327.297 41.7181 328.231L41.9779 326.754ZM10.17 320.12C7.51822 319.481 4.85701 318.819 2.18657 318.133L1.81347 319.586C4.49113 320.274 7.15963 320.938 9.81882 321.578L10.17 320.12ZM1.23653 317.568C0.523451 317.99 0.287219 318.91 0.708882 319.623L7.58041 331.243C8.00208 331.956 8.92199 332.193 9.63508 331.771C10.3482 331.349 10.5844 330.429 10.1627 329.716L4.05468 319.387L14.3839 313.279C15.0969 312.857 15.3331 311.938 14.9115 311.224C14.4898 310.511 13.5699 310.275 12.8568 310.697L1.23653 317.568ZM442.525 1.13757C443.025 3.78997 443.479 6.44824 443.888 9.11139L446.853 8.6564C446.44 5.95967 445.98 3.26781 445.473 0.581792L442.525 1.13757ZM445.797 25.1569C446.253 30.5274 446.529 35.9098 446.627 41.2965L449.627 41.2419C449.528 35.7893 449.248 30.3403 448.786 24.9029L445.797 25.1569ZM446.39 57.4583C446.135 62.8363 445.706 68.2106 445.104 73.5737L448.086 73.908C448.694 68.4815 449.129 63.043 449.387 57.6002L446.39 57.4583ZM442.794 89.5774C441.858 94.8758 440.754 100.155 439.486 105.409L442.402 106.113C443.685 100.8 444.801 95.4593 445.748 90.0994L442.794 89.5774ZM435.211 121.009C433.634 126.148 431.898 131.253 430.005 136.318L432.815 137.368C434.729 132.248 436.484 127.086 438.079 121.889L435.211 121.009ZM423.9 151.293C421.726 156.207 419.402 161.074 416.93 165.887L419.599 167.258C422.097 162.393 424.446 157.474 426.643 152.507L423.9 151.293ZM409.132 180.058C406.409 184.689 403.545 189.261 400.542 193.766L403.038 195.43C406.073 190.878 408.967 186.258 411.718 181.579L409.132 180.058ZM391.196 206.973C387.972 211.27 384.616 215.496 381.13 219.646L383.426 221.576C386.948 217.384 390.338 213.115 393.595 208.774L391.196 206.973ZM370.381 231.751C366.706 235.67 362.907 239.508 358.987 243.26L361.061 245.427C365.02 241.638 368.857 237.761 372.569 233.803L370.381 231.751ZM347.007 254.127C342.941 257.622 338.761 261.028 334.468 264.34L336.301 266.716C340.635 263.371 344.856 259.931 348.962 256.402L347.007 254.127ZM321.406 273.884C316.995 276.934 312.479 279.888 307.859 282.741L309.435 285.294C314.099 282.413 318.659 279.431 323.112 276.352L321.406 273.884ZM293.864 290.897C289.158 293.481 284.356 295.964 279.457 298.341L280.767 301.04C285.711 298.641 290.558 296.135 295.308 293.526L293.864 290.897ZM264.749 305.033C259.826 307.128 254.816 309.119 249.719 311.001L250.758 313.815C255.901 311.916 260.956 309.907 265.924 307.793L264.749 305.033ZM234.399 316.246C229.285 317.862 224.09 319.371 218.817 320.77L219.587 323.669C224.905 322.259 230.144 320.736 235.303 319.106L234.399 316.246ZM203.083 324.56C197.865 325.692 192.575 326.718 187.215 327.635L187.72 330.592C193.124 329.668 198.458 328.633 203.719 327.492L203.083 324.56ZM171.184 330.017C165.858 330.692 160.466 331.26 155.011 331.718L155.262 334.707C160.759 334.246 166.193 333.673 171.561 332.993L171.184 330.017ZM138.911 332.74C133.571 332.97 128.174 333.097 122.719 333.118L122.73 336.118C128.224 336.097 133.661 335.969 139.041 335.737L138.911 332.74ZM106.436 332.864C101.118 332.68 95.7504 332.396 90.3323 332.009L90.1186 335.001C95.5729 335.391 100.978 335.677 106.332 335.862L106.436 332.864ZM74.1851 330.565C68.8483 329.992 63.4654 329.321 58.0373 328.549L57.615 331.519C63.0769 332.296 68.4939 332.971 73.8652 333.547L74.1851 330.565ZM42.1078 326.015C36.8197 325.085 31.4907 324.061 26.1216 322.939L25.5081 325.876C30.9082 327.004 36.2685 328.034 41.5882 328.97L42.1078 326.015ZM10.3457 319.391C7.6975 318.753 5.03993 318.091 2.37313 317.407L1.6269 320.312C4.30822 321.001 6.98035 321.666 9.64317 322.307L10.3457 319.391Z" fill="white"/>
              </g>
            </svg>
          </div>
          <div class="l2 absolute top-[30%] right-[-20%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="326" viewBox="0 0 82 326" fill="none">
              <g style={{ mixBlendMode: 'exclusion'}}>
              <path d="M31.5037 322.939C31.4702 323.213 31.6652 323.463 31.9393 323.496L36.4061 324.042C36.6802 324.076 36.9295 323.881 36.9631 323.607C36.9966 323.333 36.8015 323.083 36.5274 323.05L32.557 322.564L33.0424 318.594C33.076 318.32 32.8809 318.07 32.6068 318.037C32.3327 318.003 32.0833 318.198 32.0498 318.473L31.5037 322.939ZM0.184844 2.29366C1.74227 2.86549 3.27773 3.49415 4.79117 4.17786L5.20286 3.26654C3.66774 2.57304 2.10993 1.93521 0.529511 1.35494L0.184844 2.29366ZM13.5528 8.89229C16.3336 10.6389 19.0304 12.5817 21.6426 14.7074L22.2738 13.9318C19.6316 11.7817 16.9018 9.81489 14.0847 8.04547L13.5528 8.89229ZM29.0234 21.417C31.3272 23.7418 33.5552 26.2173 35.7068 28.8324L36.4791 28.1971C34.309 25.5596 32.0604 23.061 29.7337 20.7131L29.0234 21.417ZM41.7326 36.7983C43.6068 39.4874 45.4135 42.2891 47.1523 45.1942L48.0103 44.6806C46.2603 41.7567 44.4411 38.9356 42.553 36.2266L41.7326 36.7983ZM52.0189 53.929C53.534 56.8495 54.9882 59.854 56.3812 62.9345L57.2924 62.5225C55.8924 59.4263 54.4303 56.4057 52.9065 53.4685L52.0189 53.929ZM60.2821 72.1588C61.4968 75.2327 62.6554 78.3689 63.7575 81.5607L64.7028 81.2343C63.596 78.0292 62.4324 74.8792 61.2121 71.7912L60.2821 72.1588ZM66.8374 91.107C67.7899 94.2732 68.6899 97.4846 69.5373 100.735L70.5049 100.483C69.6546 97.2207 68.7512 93.9974 67.795 90.8189L66.8374 91.107ZM71.8906 110.463C72.6156 113.704 73.2901 116.977 73.9139 120.276L74.8965 120.09C74.2707 116.781 73.5939 113.497 72.8665 110.245L71.8906 110.463ZM75.6189 130.155C76.1336 133.447 76.5989 136.758 77.0147 140.084L78.007 139.96C77.5899 136.624 77.1232 133.303 76.6069 130.001L75.6189 130.155ZM78.1071 150.036C78.4216 153.359 78.6871 156.69 78.9033 160.026L79.9012 159.961C79.6843 156.616 79.4181 153.275 79.1027 149.942L78.1071 150.036ZM79.4039 170.035C79.5216 173.377 79.5897 176.717 79.608 180.05L80.608 180.045C80.5896 176.702 80.5213 173.352 80.4033 170L79.4039 170.035ZM79.5124 190.068C79.4295 193.421 79.2955 196.763 79.1101 200.087L80.1085 200.142C80.2945 196.808 80.429 193.456 80.5121 190.093L79.5124 190.068ZM78.3919 210.084C78.097 213.43 77.7485 216.752 77.3462 220.044L78.3388 220.165C78.7425 216.862 79.0922 213.529 79.3881 210.172L78.3919 210.084ZM75.9577 229.949C75.4302 233.276 74.8451 236.565 74.2022 239.81L75.1832 240.004C75.8286 236.746 76.4159 233.445 76.9454 230.106L75.9577 229.949ZM72.0524 249.605C71.2582 252.89 70.401 256.121 69.4804 259.29L70.4407 259.569C71.3657 256.385 72.2268 253.139 73.0244 249.84L72.0524 249.605ZM66.4488 268.831C65.3406 272.031 64.1617 275.153 62.9118 278.189L63.8365 278.57C65.094 275.515 66.2796 272.375 67.3937 269.159L66.4488 268.831ZM58.8144 287.308C57.322 290.355 55.7482 293.293 54.0928 296.114L54.9552 296.62C56.624 293.777 58.2096 290.816 59.7125 287.748L58.8144 287.308ZM48.6761 304.504C46.7105 307.267 44.6499 309.882 42.4941 312.335L43.2453 312.995C45.4251 310.515 47.5067 307.873 49.491 305.083L48.6761 304.504ZM35.491 319.424C34.2512 320.534 32.9849 321.595 31.692 322.606L32.308 323.394C33.6188 322.369 34.9021 321.293 36.1579 320.169L35.491 319.424ZM31.0074 322.879C30.9404 323.427 31.3304 323.926 31.8786 323.993L40.8121 325.085C41.3603 325.152 41.8591 324.762 41.9261 324.214C41.9931 323.665 41.603 323.167 41.0548 323.1L33.114 322.129L34.0849 314.188C34.1519 313.64 33.7618 313.141 33.2136 313.074C32.6654 313.007 32.1667 313.397 32.0996 313.945L31.0074 322.879ZM0.0125103 2.76302C1.55844 3.33063 3.08272 3.95471 4.58532 4.63352L5.40871 2.81088C3.86275 2.11248 2.29376 1.47007 0.701845 0.885573L0.0125103 2.76302ZM13.2868 9.3157C16.0496 11.051 18.7298 12.9817 21.327 15.0952L22.5893 13.544C19.9322 11.3817 17.1858 9.40287 14.3506 7.62206L13.2868 9.3157ZM28.6683 21.7689C30.9606 24.0822 33.1783 26.5462 35.3207 29.1501L36.8652 27.8794C34.6858 25.2307 32.427 22.7206 30.0889 20.3612L28.6683 21.7689ZM41.3224 37.0842C43.1896 39.7634 44.9901 42.5553 46.7233 45.4509L48.4393 44.4238C46.6837 41.4906 44.8582 38.6597 42.9632 35.9407L41.3224 37.0842ZM51.575 54.1592C53.0858 57.0715 54.5362 60.0678 55.9257 63.1406L57.748 62.3165C56.3444 59.2125 54.8784 56.1838 53.3503 53.2382L51.575 54.1592ZM59.8171 72.3425C61.029 75.4094 62.1851 78.5388 63.2849 81.7239L65.1754 81.0711C64.0664 77.8593 62.9002 74.7025 61.6771 71.6075L59.8171 72.3425ZM66.3586 91.2511C67.3093 94.4112 68.2076 97.6166 69.0534 100.861L70.9887 100.357C70.1369 97.0887 69.2318 93.8594 68.2738 90.6749L66.3586 91.2511ZM71.4026 110.572C72.1264 113.808 72.7998 117.075 73.4226 120.369L75.3878 119.997C74.7609 116.682 74.0831 113.393 73.3544 110.136L71.4026 110.572ZM75.1249 130.233C75.6388 133.519 76.1034 136.825 76.5186 140.146L78.5031 139.898C78.0855 136.557 77.618 133.23 77.1009 129.924L75.1249 130.233ZM77.6094 150.084C77.9234 153.401 78.1884 156.728 78.4043 160.058L80.4001 159.929C80.183 156.579 79.9163 153.232 79.6005 149.895L77.6094 150.084ZM78.9042 170.053C79.0217 173.39 79.0898 176.725 79.1081 180.053L81.108 180.042C81.0896 176.694 81.0212 173.339 80.903 169.983L78.9042 170.053ZM79.0126 190.055C78.9298 193.404 78.796 196.74 78.6109 200.059L80.6077 200.17C80.7941 196.831 80.9287 193.474 81.0119 190.105L79.0126 190.055ZM77.8939 210.04C77.5995 213.381 77.2515 216.697 76.8499 219.983L78.8351 220.226C79.2395 216.917 79.5898 213.578 79.8861 210.216L77.8939 210.04ZM75.4639 229.871C74.9373 233.191 74.3533 236.474 73.7118 239.712L75.6736 240.101C76.3203 236.837 76.9087 233.529 77.4392 230.184L75.4639 229.871ZM71.5664 249.487C70.774 252.766 69.9187 255.989 69.0002 259.15L70.9208 259.708C71.848 256.517 72.7111 253.264 73.5104 249.957L71.5664 249.487ZM65.9763 268.668C64.8711 271.858 63.6956 274.972 62.4494 277.999L64.2989 278.76C65.5602 275.696 66.7491 272.547 67.8662 269.322L65.9763 268.668ZM58.3654 287.088C56.8782 290.124 55.3103 293.052 53.6615 295.861L55.3865 296.873C57.062 294.018 58.6534 291.046 60.1615 287.968L58.3654 287.088ZM48.2687 304.214C46.3123 306.964 44.2624 309.565 42.1185 312.005L43.6209 313.325C45.8127 310.831 47.9049 308.176 49.8984 305.373L48.2687 304.214ZM35.1575 319.051C33.9258 320.154 32.6679 321.208 31.3839 322.212L32.6161 323.788C33.9358 322.755 35.2275 321.673 36.4914 320.542L35.1575 319.051Z" fill="white"/>
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section className="container pb-[52px] pt-[30px] md:pb-0 md:pt-0 font-Mon">
        <div className="p-4 sm:py-6 sm:px-12 bg-gray_800 text-gray_50 rounded-lg text-sm md:text-lg">
          {t('about.hero_content')}
        </div>
      </section>
      <section className="container flex flex-col gap-7 py-6 md:py-10 lg:py-[60px] font-Mon">
        <div className="grid lg:grid-cols-3 gap-7">
          <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
              {t('about.about_card.mission')}
            </h3>
            <p className="text-base md:text-lg">
              {t('about.about_card.mission_text')}
            </p>
          </div>
          <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">{t('about.about_card.target')}</h3>
            <p className="text-base md:text-lg">
            {t('about.about_card.target_text')}
            </p>
          </div>
          <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg">
            <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
            {t('about.about_card.values')}
            </h3>
            <p className="text-base md:text-lg">
            {t('about.about_card.values_text')}
            </p>
          </div>
        </div>
        <div className="bg-gray_50 p-4 sm:p-6 md:p-9 lg:p-12 rounded-lg w-full">
          <h3 className="font-extrabold text-xl md:text-2xl mb-2.5">
            {t('about.about_card.strategy')}
          </h3>
          <p className="text-base md:text-lg">
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
                  "w-fit border-l-2 border-gray_400 hover:border-gray_600 px-4 py-2 text-gray_500 hover:text-gray_600 text-base md:text-2xl font-bold",
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
                  "w-fit border-l-2 border-gray_400 hover:border-gray_600 px-4 py-2 text-gray_500 hover:text-gray_600 text-base md:text-2xl font-bold",
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
                  "w-fit border-l-2 border-gray_400 hover:border-gray_600 px-4 py-2 text-gray_500 hover:text-gray_600 text-base md:text-2xl font-bold",
                  {
                    ["border-gray_900 text-gray_900"]: tabIndex === 3,
                  }
                )}
              >
                {t('about.field.north')}
              </button>
            </div>
            {tabIndex === 1 && (
              <div className="flex flex-col gap-3 text-sm md:text-base text-gray_900 mt-4 bg-gray_100 p-4 md:p-0">
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
              <div className="flex flex-col gap-3 text-sm md:text-base text-gray_900 mt-4 bg-gray_100 p-4 md:p-0">
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
              <div className="flex flex-col gap-3 text-sm sm:text-base text-gray_900 mt-4 bg-gray_100 p-4 md:p-0">
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
          <div className="w-full xl:max-w-[878px] grid grid-cols-10 gap-3 smd:gap-6 justify-between">
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
          <p className="my-6 font-medium text-base md:text-xl leading-[18px] md:leading-6">
          {t('about.secure.title_text_1')}
          </p>
          <p className="font-medium text-base md:text-xl leading-[18px] md:leading-6">
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
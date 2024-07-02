import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-auto !bg-white px-[3.582%] pb-[50px] lg:ml-[40vw]">
      <div>
        <div className="px-0 py-10">
          <div className="cursor-pointer">
            <div className="inline-block w-[calc(100%-50px)] align-middle ">
              <span className="text-sb-3xl font-normal">Hakkımızda</span>
            </div>
            <div className="inline-block w-[50px] text-left align-middle">
              <div className="h-16 w-16 cursor-pointer rounded-full p-[.8rem] ">
                <span>
                  <RxCaretDown className="h-16 w-16 align-middle hover:bg-caret-hover" />
                </span>
              </div>
            </div>
            <div className="hidden">
              <Link to="/">Tarihçe</Link>
              <Link to="/">Şirketimiz</Link>
              <Link to="/">Mağazalarımız</Link>
              <Link to="/">Starbucks'tan Haberler</Link>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="cursor-pointer">
            <div className="inline-block w-[calc(100%-50px)] align-middle ">
              <span className="text-sb-3xl font-normal">Kahve</span>
            </div>
            <div className="inline-block w-[50px] text-left align-middle">
              <div className="h-16 w-16 cursor-pointer  rounded-full p-[.8rem]">
                <span>
                  <RxCaretDown className="h-16 w-16 align-middle hover:bg-caret-hover" />
                </span>
              </div>
            </div>
            <div className="hidden">
              <Link to="/">Starbucks Reserve</Link>
              <Link to="/">Kahve Tedariği & Kavurma & Harmanlama</Link>
              <Link to="/">Kavurma Profiline Göre Kahveler</Link>
              <Link to="/">Nasıl Mükemmel Kahve Hazırlanır</Link>
              <Link to="/">Kahve SSS</Link>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="cursor-pointer">
            <div className="inline-block w-[calc(100%-50px)] align-middle ">
              <span className="text-sb-3xl font-normal">Sosyal Sorumluluk</span>
            </div>
            <div className="inline-block w-[50px] text-left align-middle">
              <div className="h-16 w-16 cursor-pointer rounded-full p-[.8rem] hover:bg-caret-hover">
                <span>
                  <RxCaretDown className="h-16 w-16 align-middle hover:bg-caret-hover" />
                </span>
              </div>
            </div>
            <div className="hidden">
              <Link to="/">Etik ticaret</Link>
              <Link to="/">Topluma katkı</Link>
              <Link to="/">Yardım Çalışmaları</Link>
              <Link to="/">Çevre</Link>
              <Link to="/">Çeşitlilik</Link>
              <Link to="/">Sürdürülebilirlik</Link>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="cursor-pointer">
            <div className="inline-block w-[calc(100%-50px)] align-middle">
              <span className="text-sb-3xl font-normal">
                Starbucks Delivers
              </span>
            </div>
            <div className="inline-block w-[50px] text-left align-middle">
              <div className="h-16 w-16 cursor-pointer rounded-full p-[.8rem] hover:bg-caret-hover">
                <span>
                  <RxCaretDown
                    className="fill-current text-right !align-middle "
                    viewBox="0 0 24 24"
                  />
                </span>
              </div>
            </div>
            <div className="hidden">
              <Link to="/">Getiryemek</Link>
              <Link to="/">Yemeksepeti</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-5">
        <ul className="mb-[15px] !flex ">
          <li className="mr-1">
            <Link to="\" className="!relative !inline-block min-h-11 min-w-11">
              <svg
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 overflow-visible fill-current align-middle"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M15.4043684,4.8 L12.7777895,4.8 C11.2364211,4.8 9.98636842,5.96104896 9.98636842,7.39365487 L9.98636842,9.44903723 L8.59515789,9.44903723 C8.48763158,9.44903723 8.4,9.53002017 8.4,9.6303686 L8.4,11.7623327 C8.4,11.862241 8.48763158,11.9432239 8.59515789,11.9432239 L9.98636842,11.9432239 L9.98636842,19.0186686 C9.98636842,19.1190171 10.074,19.2 10.1815263,19.2 L12.9639474,19.2 C13.0719474,19.2 13.1591053,19.1190171 13.1591053,19.0186686 L13.1591053,11.9432239 L15.1765263,11.9432239 C15.2778947,11.9432239 15.3626842,11.8714836 15.3707368,11.7772969 L15.5649474,9.64533284 C15.5748947,9.53970292 15.4844211,9.44903723 15.3702632,9.44903723 L13.1591053,9.44903723 L13.1591053,7.93632863 C13.1591053,7.58202824 13.4688947,7.29462681 13.8502105,7.29462681 L15.4043684,7.29462681 C15.5123684,7.29462681 15.6,7.21320374 15.6,7.11329543 L15.6,4.98133138 C15.6,4.88142307 15.5123684,4.8 15.4043684,4.8 Z" />
                <circle cx="50%" cy="50%" fill="transparent" r="75%" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="\" className="!relative !inline-block min-h-11 min-w-11">
              <svg
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 overflow-visible fill-current align-middle "
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M15,5 L9,5 C6.790861,5 5,6.790861 5,9 L5,9 L5,15 C5,17.209139 6.790861,19 9,19 L9,19 L15,19 C17.209139,19 19,17.209139 19,15 L19,15 L19,9 C19,6.790861 17.209139,5 15,5 L15,5 Z M14.7647059,6.23529412 C16.4215601,6.23529412 17.7647059,7.57843987 17.7647059,9.23529412 L17.7647059,9.23529412 L17.7647059,14.7647059 L17.7596132,14.9409787 C17.6683668,16.5157859 16.3623868,17.7647059 14.7647059,17.7647059 L14.7647059,17.7647059 L9.23529412,17.7647059 L9.05902133,17.7596132 C7.48421408,17.6683668 6.23529412,16.3623868 6.23529412,14.7647059 L6.23529412,14.7647059 L6.23529412,9.23529412 L6.24038681,9.05902133 C6.33163324,7.48421408 7.63761323,6.23529412 9.23529412,6.23529412 L9.23529412,6.23529412 Z M11.7941176,8.70588235 C9.86112102,8.70588235 8.29411765,10.2728857 8.29411765,12.2058824 C8.29411765,14.138879 9.86112102,15.7058824 11.7941176,15.7058824 C13.7271143,15.7058824 15.2941176,14.138879 15.2941176,12.2058824 C15.2941176,10.2728857 13.7271143,8.70588235 11.7941176,8.70588235 Z M11.7941176,9.94117647 C13.0448802,9.94117647 14.0588235,10.9551198 14.0588235,12.2058824 C14.0588235,13.4566449 13.0448802,14.4705882 11.7941176,14.4705882 C10.5433551,14.4705882 9.52941176,13.4566449 9.52941176,12.2058824 C9.52941176,10.9551198 10.5433551,9.94117647 11.7941176,9.94117647 Z M15.7058824,7.47058824 C15.2510596,7.47058824 14.8823529,7.83929491 14.8823529,8.29411765 C14.8823529,8.74894038 15.2510596,9.11764706 15.7058824,9.11764706 C16.1607051,9.11764706 16.5294118,8.74894038 16.5294118,8.29411765 C16.5294118,7.83929491 16.1607051,7.47058824 15.7058824,7.47058824 Z" />
                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="\" className="!relative !inline-block min-h-11 min-w-11">
              <svg
                aria-hidden="true"
                focusable="false"
                className="absolute left-1/2 top-1/2 h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 overflow-visible fill-current align-middle "
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M16.1700158,7 L8.82998416,7 C7.26701245,7 6,8.25308368 6,9.79887301 L6,13.201127 C6,14.7469163 7.26701245,16 8.82998416,16 L16.1700158,16 C17.7329875,16 19,14.7469163 19,13.201127 L19,9.79887301 C19,8.25308368 17.7329875,7 16.1700158,7 Z M11.3262463,9.28078768 L14.5709798,11.3486057 C14.7141036,11.4390048 14.689657,11.6696954 14.5443107,11.7571306 L11.3218015,13.7217059 C11.1822335,13.8056832 11.0555556,13.6925608 11.0555556,13.5162084 L11.0555556,9.4838152 C11.0555556,9.30499291 11.1857894,9.19236451 11.3262463,9.28078768 Z" />
                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="\" className="!relative !inline-block min-h-11 min-w-11">
              <img src="https://content.sbuxtr.com/images/twitter-icon.svg" />
            </Link>
          </li>
          <li>
            <Link to="\" className="!relative !inline-block min-h-11 min-w-11">
              <svg
                aria-hidden="true"
                focusable="false"
                className="absolute left-1/2 top-1/2 h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 overflow-visible fill-current align-middle "
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import data from "../data/homepageCardData.js";
import HomepageCard from "../components/HomepageCard";
import HomepageBanner from "../components/HomepageBanner.jsx";
import Footer from "../components/Footer.jsx";

export default function Homepage() {
   return (
      <main className="relative z-[1] flex h-full flex-col">
         <div className="video-shadow relative z-[1] flex shrink-0 flex-col !bg-white lg:fixed lg:bottom-0 lg:left-0 lg:top-0 lg:w-[40vw]">
            <div className="flex grow flex-col">
               <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  height="600"
                  className="min-h-full max-w-full bg-video-color object-contain object-center align-baseline"
               >
                  <source src="https://d2eiylesx4iyph.cloudfront.net/files/8liimn1h4-web-leftside-rewards-TR-1150x1260px-1-1-SFE.mp4" />
               </video>
               <h1 className="absolute bottom-[40px] left-[40px] !my-[18px] text-sb-header-l font-medium">
                  Günaydın ☀️
               </h1>
            </div>
         </div>
         <div className="grow lg:ml-[40vw] lg:pt-[83px]">
            <div className="relative flex min-h-0 min-w-0 flex-auto ">
               <div className="p-[10px] lg:px-16 lg:py-8">
                  <HomepageBanner />
                  {data.map((item, key) => (
                     <HomepageCard content={item} key={key} />
                  ))}
               </div>
            </div>
            <div className="m-0 !my-[5.6rem] w-full text-center lg:px-[4.8rem]"></div>
            <hr className="m-0 !mb-[2.4rem] border-t-2 lg:!mb-16 " />
         </div>
      </main>
   );
}

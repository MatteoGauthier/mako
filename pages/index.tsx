/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import ActionBox from "../components/ActionBox"
import Description from "../components/Description"
import Footer from "../components/Footer"
import ShareBox from "../components/ShareBox"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <div>
      <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <div className="max-w-screen-xl mx-auto space-y-3">
          <p className="font-bold text-4xl">
            <span className="text-pink-500 mr-2">1023</span>
            plateformes sont référencés,
            <br /> trouver un code referral en vitesse
          </p>
          <p className="text-gray-400">Chercher la plateforme sur laquelle vous chercher un code partenaire</p>
        </div>
        <form className="flex justify-between max-w-screen-sm bg-white bg-opacity-10 mt-10 mb-20 rounded-xl py-2 mx-auto px-5">
          <input
            type="text"
            className="bg-transparent outline-none flex w-full"
            placeholder="UberEats, Binance"
            name="n"
            value=""
          />
          <input className="pl-4" type="image" src="/assetssearch.svg" name="" value="" />
        </form>

        <div className="max-w-screen-xl mx-auto">
          <div className="text-center font-display mb-14">
            <h2 className="text-[28px] text-wit font-semibold mb-[6px]">Disponible sur 1223 plateformes et services</h2>
            <p className="text-grey">findReferrer permet à chacun de lister une nouvelle plateforme</p>
          </div>
          <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 z-10 w-12 h-full dp-swiper-gradient-l tick-left"></div>
            <div className="absolute top-0 right-0 z-10 w-12 h-full dp-swiper-gradient-r tick-right"></div>
            <Slider />
          </div>
        </div>

        <Description />
        <ActionBox />
        <ShareBox />
        <Footer />

        <img className="hidden lg:block absolute w-100 inset-x-1/5 inset-y-15 pointer-events-none" src="/assets/circle.svg" />
        <img
          className="hidden lg:block absolute w-100 inset-x-3/5 inset-y-1/3 overflow-hidden pointer-events-none"
          src="/assets/rectangle.svg"
        />
        <img
          className="hidden lg:block absolute overflow-y-hidden w-100 inset-x-1/5 inset-y-2/3 pointer-events-none"
          src="/assets/line.svg"
        />
      </main>
    </div>
  )
}

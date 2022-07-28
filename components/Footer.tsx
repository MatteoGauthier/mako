/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react"

export default function Footer() {
  return (
    <footer className="border-t-2 flex max-w-screen-xl px-2 sm:px-6 lg:px-8 mx-auto flex-col md:flex-row justify-between py-5 border-opacity-20 border-gray-200 mt-20">
      <p className="text-gray-400">
        Fait avec passion par <span className="text-white">Edward</span>
        {" & "}
        <span className="text-white">Mattèo</span> de <span className="text-white">squale.agency</span>
      </p>
      <div className="flex mt-10 md:mt-0 justify-around space-x-5">
        <img src="/assets/share-box/logo-instagram.svg" />
        <img src="/assets/share-box/logo-twitter.svg" />
      </div>
    </footer>
  )
}

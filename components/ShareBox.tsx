/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react"

export default function ShareBox() {
  const adress = "https://findreferrer.com"
  return (
    <div>
      <img
        className="mx-auto transform -translate-x-1/2 md:-translate-x-full translate-y-10"
        src="/assets/share-box/women-draw.svg"
        alt=""
      />
      <div className=" max-w-screen-xl bg-gray-50 rounded-xl bg-opacity-5 border-white border-2 border-opacity-10 flex flex-row flex-wrap justify-around py-10 mx-auto backdrop-filter backdrop-blur shadow-inner">
        <div className="m-5 text-center md:text-left">
          <p className="text-2xl font-semibold"> Vous avez aimé FindReferrer</p>
          <p className="md:px-2 text-gray-400"> Partagez le site à vos amis</p>
        </div>
        <div
          id="copyBlock"
          className="bg-white bg-opacity-20 rounded flex flex-wrap justify-around p-5 space-x-5 items-center m-5 transition"
        >
          <span className="text-center">{adress}</span>
          <button type="button" className="focus:outline-none" name="button">
            <img src="/assets/share-box/copy.svg" className="w-6" alt="copy picture" />
          </button>
        </div>
        <div className="flex justify-around space-x-5 mx-5 my-10">
          <a href="https://www.instagram.com/squale.agency/">
            <img src="/assets/share-box/logo-instagram.svg" alt="logo instagram" />
          </a>
          <a href="https://twitter.com/SqualeAgency">
            <img src="/assets/share-box/logo-twitter.svg" alt="logo twitter" />
          </a>
          <a href="https://squale.agency/">
            <img src="/assets/share-box/globe.svg" alt="logo website" />
          </a>
        </div>
      </div>
    </div>
  )
}

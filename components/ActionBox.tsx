/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react"

export default function ActionBox() {
  return (
    <div>
      <div className="border-white border-2 border-opacity-10 bg-gray-50 rounded-xl bg-opacity-5 backdrop-filter backdrop-blur shadow-inner max-w-screen-xl mx-auto ">
        <div className="flex flex-col md:items-start mx-5 mt-5 space-y-2">
          <div className="flex flex-col items-center md:flex-row space-x-3 align-middle">
            <p className="text-2xl font-semibold">Diffuser vos codes de parrainage</p>
            <svg
              className="mt-3.5"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current text-blue-500 blueball" width="10" height="10" rx="5" />
            </svg>
            <svg
              className="mt-3.5"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current text-pink-500 pinkball" width="10" height="10" rx="5" />
            </svg>
            <svg
              className="mt-3.5"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="fill-current text-green-500 greenball" width="10" height="10" rx="5" />
            </svg>
          </div>
          <p className="text-gray-400">{"actionbox.desc"}</p>
        </div>
        <ul className="flex flex-col justify-around space-y-5 items-start mx-10 my-5 font-semibold text-lg cursor-default">
          <li>
          Proposer une <span className=" bg-blue-500 rounded-xl px-1">plateforme</span>
          </li>
          <li>
          Devenir <span className="bg-pink-500 rounded-xl px-1">parrain</span>
          </li>
          <li className="flex ">
          Gagnez des <span className="bg-green-500 rounded-xl ml-1 px-1 h-full">récompences</span>
            <img src="/assets/action-box/cup.svg" alt="cup" />
          </li>
        </ul>
      </div>
    </div>
  )
}

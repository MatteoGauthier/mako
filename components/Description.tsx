/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react"

export default function Description() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center font-display mb-14">
          <h2 className="text-[28px] text-wit font-semibold mb-[6px]">
            En quelques clics vous obtenez un code de parrainage
          </h2>
          <p className="text-grey">Notre volonté est de vous permettre d’obtenir des codes parrainage simplement</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around mx-1/5 items-center sm:items-baseline mb-20">
        <div className="flex flex-col items-center">
          <img className="w-2/3" src="/assets/description/red.svg" alt="" />
          <p className="text-pink-300 w-2/3">Les codes de parrainage proviennent de la communauté</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-3/4" src="/assets/description/blue.svg" alt="" />
          <p className="text-blue-300 w-2/3">Gagnez des récompenses en utilisant des codes</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-2/3" src="/assets/description/green.svg" alt="" />
          <p className="text-green-300 w-2/3">Les codes de parainage vous sont proposés aléatoirement</p>
        </div>
      </div>
    </div>
  )
}

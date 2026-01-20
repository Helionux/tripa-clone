import React from 'react'
import { Globe } from 'lucide-react'
import Image from 'next/image'

export default function Navabar() {

    const Links = [
    {
        href: "/", 
        name: "Decouvrir"
    },
    {
        href: "/avis",
        name: "Avis"
    },
    {
        href: "/plus",
        name: "Plus"
    }

]


  return (
      <header className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between  bg-white/95 py-3">
              <div className="font-bold text-2xl">
                  <Image src="/logo.svg" alt="Logo" width={150} height={100}/>
              </div>
              
            <nav className="hidden md:flex gap-3">
                {
                    Links.map((link, index) => (
                        <a href={link.href} key={index} className=" px-3 py-2 rounded-[100px] hover:bg-gray-200 text-[#002b11] font-bold font-trip">{link.name}</a>
                    ))
                }
              </nav>
              <div className="flex gap-3 font-trip font-bold">
                  <button className="px-4 py-1 rounded-[100px] hover:bg-gray-200 flex items-center gap-2 divide-y">
                      <Globe size={16}/>|
                    USD</button>
                  <button className="px-4 py-2 rounded-[100px] text-white bg-[#002b11]">Se connecter</button>
              </div>
          </div>  
    </header>
  )
}
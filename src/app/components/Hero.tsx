import { Bed, Camera, House, Search, UtensilsCrossed } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const subLinks = [
    {
      name: "Tout rechercher",
      path: "/search",
      icon: <House />
    },
    {
      name: "Hotels",
      path: "/hotel",
      icon: <Bed />
    },
    {
      name: "Activites",
      path: "/activite",
      icon: <Camera />
    },
    {
      name: "Restaurants",
      path: "/restaurant",
      icon: <UtensilsCrossed/>
    }
  ]
  return (
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col flex-wrap items-center justify-center ">
              <div>
                  <h1 className="text-center text-[54px] leading-12 md:text-6xl md:leading-17.5 mt-15 font-semibold max-w-3xl font-lexend text-[#002b11]">Quelle destination ?</h1>
              </div>
              <div className="flex flex-col">
                <nav className="flex flex-row gap-7 mt-12 text-[#002b11] font-lexend font-bold">
                  {
                    subLinks.map((link, idx) => (
                      <Link href={link.path} key={idx} className="flex items-center gap-1.5 text-[#002b11] border-b-2 border-transparent hover:border-[#002b11] transition-colors duration-300 pb-2">{link.icon}{link.name}</Link>
                    ))
                  }
          </nav>
          <div className=" max-w-7xl flex items-center mt-5 py-3 border pl-4 gap-2 bg-white border-gray-500/30 h-11.5 rounded-full overflow-hidden w-full">
            <Search />
            <input type="text" className="w-full  h-full outline-none text-sm text-gray-500" />
            <button type="submit" className="bg-[#00eb5a] w-32 h-9 rounded-full text-sm text-black font-bold  mr-1.5">Search</button>
        </div>
              </div>
        </div>
    </section>
  )
}

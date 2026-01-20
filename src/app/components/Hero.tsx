import { Bed, Camera, House, Search, UtensilsCrossed } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import caption from '../../../public/caption.jpg'
export default function Hero() {
  const subLinks = [
    {
      name: "Tout rechercher",
      path: "/search",
      icon: <House />
    },
    {
      name: "Hôtels",
      path: "/hotel",
      icon: <Bed />
    },
    {
      name: "Activités",
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
        </div>
            <div className="w-3/4  flex items-center mt-5  border pl-4 gap-2 bg-white border-gray-500/30 h-14 rounded-full overflow-hidden ">
                <Search />
                <input type="text" className="w-full h-full outline-none text-[16px] text-gray" placeholder="Des endroits a visiter,des activiés, des hôtels..."/>
                <button type="submit" className="bg-[#00eb5a] w-32 px-4 py-2.5 border-black border rounded-full text-[16px] text-black font-bold  mr-1.5">Search</button>
        </div>

        <div className="w-full mx-auto grid grid-cols-2 gap-6 p-4 bg-[#00eb5a] rounded-2xl mt-20">
          <div className="w-full max-w-full"> 
            <Image src={caption} alt="Caption" width={100} height={100} className="w-full object-fit rounded-2xl"/>
          </div>
          
          <div className="border items-center justify-center">
            <h1 className="text-center text-[54px] tracking-normal leading-12 md:text-6xl md:leading-17.5 mt-15 font-semibold max-w-3xl font-lexend text-[#002b11]">Trouvez des activités selon vos envies</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

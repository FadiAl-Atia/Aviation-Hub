import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
 import Logo from "../assets/images/Aviation Hub.png"



export default function Navbar() {
return (
   <header className="flex items-center justify-between bg-white">
  <div className="flex items-center gap-6">
    <img src={Logo} alt="Aviation Hub Logo"  className="h-[150px] w-[200px] object-contain scale-125 hover:scale-145 transition-transform hover:rotate-10"/>
    <nav className="flex items-center gap-[59px] text-base font-semibold text-gray-700">
      <a href="#" className="transition-transform hover:scale-105 hover:text-orange-400">Home</a>
      <a href="#" className="transition-transform hover:scale-105 hover:text-orange-400">Services</a>
      <a href="#" className="transition-transform hover:scale-105 hover:text-orange-400">About</a>
    </nav>
  </div>
  <div className="flex items-center text-base font-medium text-gray-700">
    <a href="#" className="text-gray-700 mr-[52px] transition-transform hover:scale-105 hover:text-orange-400">Signup</a>
  </div>
</header>
)
}




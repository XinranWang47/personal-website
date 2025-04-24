import './App.css'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


function App() {

  return (
    <div className='flex justify-end'>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 px-4 py-2 bg-blue-50 shadow-md rounded-xl">
          <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-black hover:bg-blue-200 font-medium transition-colors duration-200 cursor-pointer">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-black hover:bg-blue-200 font-medium transition-colors duration-200 cursor-pointer">About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-black hover:bg-blue-200 font-medium transition-colors duration-200 cursor-pointer">Skills</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-black hover:bg-blue-200 font-medium transition-colors duration-200 cursor-pointer">Projects</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-black  hover:bg-blue-200 font-medium transition-colors duration-200 cursor-pointer">Experience</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-black hover:bg-blue-200 font-medium transition-colors duration-200 cursor-pointer">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default App

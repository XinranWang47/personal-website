import './App.css'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {Link} from 'react-scroll'


function App() {

  return (
    <div>
      <div className='flex justify-end sticky top-1 z-50'>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 px-6
        py-3 bg-blue-50 shadow-md rounded-full">
          <NavigationMenuItem>
              <Link to='home' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1"  spy={true} activeClass='bg-blue-200 text-black'>Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='about' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='skills' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>Skills</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='projects' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>Projects</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='experience' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>Experience</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='contact' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <section id='home' className='h-screen'>this is home page.</section>
      <section id='about' className='h-screen'>this is about page</section>
      <section id='skills' className='h-screen'>this is skills page</section>
      <section id='projects' className='h-screen'>this is projects page</section>
      <section id='experience' className='h-screen'>this is experience page</section>
      <section id='contact' className='h-screen'>this is contact page</section>
    </div>
  )
}

export default App

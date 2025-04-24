import './App.css'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {Link} from 'react-scroll'
import HomeSection from './pages/home'
import AboutSection from './pages/about'
import Skills from './pages/skills'


function App() {

  return (
    <div className='bg-yellow-50'>
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
              <Link to='skills' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black' offset={-60}>Skills</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='projects' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>Projects</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to='contact' className="text-gray-700 font-medium transition-colors duration-200 cursor-pointer p-1" spy={true} activeClass='bg-blue-200 text-black'>Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <section id='home' className='h-screen'>
        <HomeSection/>
      </section>
      <section id='about' className='h-screen'>
        <AboutSection/>
      </section>
      <section id='skills' className='h-screen'>
        <Skills/>
      </section>
      <section id='projects' className='h-screen'>this is projects page</section>
      <section id='contact' className='h-screen'>this is contact page</section>
    </div>
  )
}

export default App

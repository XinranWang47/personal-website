
import { FaHtml5,FaCss3,FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript,SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

export default function Skills(){
  return (
    <div className="mt-25">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Tech Stacks</h1>
      <div className="flex flex-col gap-2 items-start md:ml-15 lg:ml-40">
        <span className="flex items-center gap-2"><FaHtml5 size={70}/><p>Proficient in using <strong className="text-blue-800">HTML</strong> to structure web pages and create semantic tags for accessibility.</p></span>
        <span className="flex items-center gap-2"><FaCss3 size={70}/><p>Skilled in styling web pages with <strong className="text-blue-800">CSS</strong>, including layouts, typography, and responsive design using Flexbox and Grid.</p></span>
        <span className="flex items-center gap-2"><IoLogoJavascript size={70}/><p>Experienced in <strong className="text-blue-800">JavaScript</strong> to implement dynamic interactions, event handling, and data manipulation on web pages.</p></span>
        <span className="flex items-center gap-2"><FaReact size={70}/><p> Experienced in building user interfaces and applications with <strong className="text-blue-800">React</strong>, including components and lifecycle methods.</p></span>
        <span className="flex items-center gap-2"><SiTypescript size={65}/><p>Proficient in <strong className="text-blue-800">TypeScript</strong> to enhance code maintainability, type safety, and reduce common JavaScript errors.</p></span>
        <span className="flex items-center gap-2"><SiTailwindcss size={65}/><p>Skilled in using <strong className="text-blue-800">Tailwind CSS</strong> to rapidly build responsive and customizable web layouts with utility-first classes.</p></span>
        <span className="flex items-center gap-2"><DiNodejs size={80}/><p>Familiar with using <strong className="text-blue-800">Node.js</strong> for backend development, and building APIs and handling server-side requests with <strong className="text-blue-800">Express.js</strong>.</p></span>
      </div>
    </div>
  )
}
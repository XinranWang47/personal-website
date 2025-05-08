
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin,FaFileDownload } from "react-icons/fa"

export default function HomeSection() {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
        Hi, I'm Aurora 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        A self-taught Frontend Developer passionate about building responsive and user-friendly web applications.
      </p>
      <p className="text-lg md:text-xl text-gray-600 mb-6">I enjoy turning ideas into real-world products with clean code and creative design.</p>
      <p className="text-md md:text-lg text-gray-800 font-medium mb-8 underline">
        Currently looking for junior frontend roles in the UK 🇬🇧
      </p>

      <div className="flex gap-4">
        <a href="https://drive.google.com/uc?export=download&id=1HFhVi3LqySE0iaDoC6BFKNiylRNnEQA-" download>
          <Button variant="default" className="cursor-pointer">
            Download CV<FaFileDownload />
          </Button>
        </a>
        <a href="https://github.com/XinranWang47" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
            <FaGithub /> GitHub
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/aurora-wang-4177a0280/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
            <FaLinkedin /> LinkedIn
          </Button>
        </a>
      </div>
    </section>
  )
}

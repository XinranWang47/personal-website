import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center px-6 py-12 text-gray-800">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">About Me</h2>
        <Avatar className="mb-8 w-46 h-50">
          <AvatarImage src="../photo.jpg" className="w-full h-full object-cover rounded-full"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Hi, I'm Aurora Wang, a self-taught Frontend Developer with a passion for creating responsive and user-friendly web applications. My journey into tech started in December 2024 when I decided to dive deep into the world of web development.
        </p>

        <p>
          📚 <strong>Learning Journey:</strong> I began my self-taught journey through online platforms like Udemy, YouTube, and other resources. Initially, I focused on mastering the fundamentals—HTML, CSS, and JavaScript. As I progressed, I moved on to more advanced topics like React, Tailwind CSS, TypeScript and modern front-end tools to build real-world projects.Additionally, I have also learned some basic back-end technologies, such as Node.js and Express.js, to gain a more comprehensive understanding of full-stack development.
        </p>

        <p>
          💻 <strong>Hands-On Projects:</strong> Throughout my learning, I worked on multiple personal projects to solidify my skills, ranging from static websites to dynamic applications. These projects gave me valuable experience in frontend development, and I continue to build on them as I learn more.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

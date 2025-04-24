import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Projects(){
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Mid-Large Projects</h2>
      <div className="flex justify-around">
      <Card className="w-65">
        <CardHeader>
          <CardTitle className="text-2xl">Aurora's Blog</CardTitle>
          <CardDescription>TypeScript+ React + Tailwind</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A responsive article management system, implementing CRUD operations.</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>
          GitHub repo: <a target="_blank" rel="noopener noreferrer" href="https://github.com/XinranWang47/blog-platform.git" className="text-blue-800 underline">🔗Link</a>
          </p>
          <p>
          Live demo: <a href="" className="text-blue-800 underline">🔗Link</a>
          </p>
        </CardFooter>
      </Card>
      <Card className="w-65">
        <CardHeader>
          <CardTitle className="text-2xl">Personal Website</CardTitle>
          <CardDescription>TypeScript+ React + Tailwind</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A responsive article management system, implementing CRUD operations.</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>
          GitHub repo: <a target="_blank" rel="noopener noreferrer" href="https://github.com/XinranWang47/personal-website.git" className="text-blue-800 underline">🔗Link</a>
          </p>
          <p>
          Live demo: <a href="" className="text-blue-800 underline">🔗Link</a>
          </p>
        </CardFooter>
      </Card>
      <Card className="w-65">
        <CardHeader>
          <CardTitle className="text-2xl">Aurora's Blog</CardTitle>
          <CardDescription>TypeScript+ React + Tailwind</CardDescription>
        </CardHeader>
        <CardContent>
          <p>A responsive article management system, implementing CRUD operations.</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>
          GitHub repo: <a href="https://github.com/XinranWang47/blog-platform.git" className="text-blue-800 underline">🔗Link</a>
          </p>
          <p>
          Live demo: <a href="" className="text-blue-800 underline">🔗Link</a>
          </p>
        </CardFooter>
      </Card>
      </div>
      <h2 className="text-3xl font-bold mb-8 mt-8 text-blue-800">Small Projects(Snapshot)</h2>
      <div className="flex justify-around">
      <Card className="w-55">
        <CardHeader>
          <CardTitle className="text-2xl">To-do List</CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <p>
          GitHub repo: <a target="_blank" rel="noopener noreferrer" href="https://github.com/XinranWang47/to-do-list.git" className="text-blue-800 underline">🔗Link</a>
          </p>
          <p>
          Live demo: <a target="_blank" rel="noopener noreferrer" href="https://xinranwang47.github.io/to-do-list/" className="text-blue-800 underline">🔗Link</a>
          </p>
        </CardFooter>
      </Card>
      <Card className="w-55">
        <CardHeader>
          <CardTitle className="text-2xl">Counter</CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <p>
          GitHub repo: <a target="_blank" rel="noopener noreferrer" href="https://github.com/XinranWang47/counter.git" className="text-blue-800 underline">🔗Link</a>
          </p>
          <p>
          Live demo: <a target="_blank" rel="noopener noreferrer" href="https://xinranwang47.github.io/counter/" className="text-blue-800 underline">🔗Link</a>
          </p>
        </CardFooter>
      </Card>
      <Card className="w-55">
        <CardHeader>
          <CardTitle className="text-2xl">Weather Check</CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <p>
          GitHub repo: <a target="_blank" rel="noopener noreferrer" href="https://github.com/XinranWang47/weather-check.git" className="text-blue-800 underline">🔗Link</a>
          </p>
          <p>
          Live demo: <a target="_blank" rel="noopener noreferrer" href="https://xinranwang47.github.io/weather-check/" className="text-blue-800 underline">🔗Link</a>
          </p>
        </CardFooter>
      </Card>
      </div>
    </div>
  )
}
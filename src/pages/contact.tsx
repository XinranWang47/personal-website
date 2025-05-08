
export default function Contact(){
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex flex-col justify-center items-center gap-2 flex-1">
        <h2 className="text-3xl font-bold mb-8 mt-8 text-blue-800">Get in Touch</h2>
        <p>Thank you for stopping by! If you have any advice, opportunities, or just want to say hi, I'd really appreciate it!</p>
        <p>📧 Email: <a href="mailto:xinranwang56@gmail.com" className="text-blue-800 underline">xinranwang56@gmail.com</a></p>
        <p>📞 Telephone: <span className="text-blue-800 underline">+44 7547567832</span></p>
        <p>🏠 Address: 138 Russell Avenue, Noel Park, London, N22 6PS</p>
      </div>
      <div>
        <footer className="text-gray-500 text-center p-4">©{new Date().getFullYear()} Aurora Wang</footer>
      </div>
    </div>
  )
}
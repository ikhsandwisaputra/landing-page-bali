export default function Footer() {
    return (
        <footer className="bg-zinc-800 text-white p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/src/assets/img/logo-wi.png" alt="Logo" className="h-20 w-36 mr-2" />
          </div>
  
          {/* Menu */}
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition duration-300">About</a>
            <a href="#" className="hover:text-gray-400 transition duration-300">Places</a>
            <a href="#" className="hover:text-gray-400 transition duration-300">Subscribe</a>
          </nav>
        </div>
      </footer>
    )
}
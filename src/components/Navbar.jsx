import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth <= 768; // Ubah nilai sesuai kebutuhan breakpoint untuk mode mobile

      // Logika untuk menentukan apakah latar belakang harus ditampilkan
      const shouldShowBackground = scrollPosition > 50 && !isMobile;
      setShouldShowBackground(shouldShowBackground);

      // Logika untuk menentukan apakah menu harus ditampilkan
      if (!isMobile) {
        setMenuOpen(shouldShowBackground);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Pastikan ini hanya dijalankan sekali pada mounting komponen

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 p-4 bg-gray-800 z-50 md:${shouldShowBackground ? 'bg-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/src/assets/img/logo-wi.png" alt="Logo" className="md:h-20 md:w-48 h-10 w-20 mr-2 object-cover" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Add your mobile menu button icon (e.g., hamburger icon) */}
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-800 p-4">
            <a href="#" className="block text-white mb-2 hover:text-gray-400 transition duration-300">About</a>
            <a href="#" className="block text-white mb-2 hover:text-gray-400 transition duration-300">Places</a>
            <a href="#" className="block text-white hover:text-gray-400 transition duration-300 border-2 border-white px-2 py-2">Subscribe</a>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">Places</a>
          <a href="#" className="text-white hover:text-gray-400 transition duration-300 border-2 border-white px-2 py-2">Subscribe</a>
        </div>
      </div>
    </nav>
  );
}

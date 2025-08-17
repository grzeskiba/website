import Image from 'next/image';
import { images } from '../images';

export function Navbar() {
  return (
    <nav className="shadow-md fixed w-full top-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">grgskb.com</div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Me
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <Image src={images.light} alt="dark mode" className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button id="menu-btn" className="text-gray-700 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="hidden md:hidden px-4 pb-4">
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
          About
        </a>
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
          Services
        </a>
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
          Contact
        </a>
      </div>
    </nav>
  );
}

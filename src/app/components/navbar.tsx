import Image from 'next/image';
import { images, links } from '@/app/constants';

export function Navbar() {
  return (
    <header>
      <nav className="border-b-1 border-b-default-500 fixed w-full top-0">
        <div className="max-w-3xl mx-auto px-4 sm:pl-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href={links.home} className="">
              <div className="flex-shrink-0 text-xl font-bold">grgskb.com</div>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href={links.home} className="text-default-900">
                Home
              </a>
              <a href={links.contact} className="">
                Contact
              </a>
              <a href={links.projects} className="">
                Projects
              </a>
              <a href="#" className="text-blue-50">
                <Image src={images.light} alt="dark mode" className="w-5 h-5" />
              </a>
            </div>

            <div className="md:hidden">
              <button id="menu-btn" className="text-blue-700 focus:outline-none">
                ☰
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden px-4 pb-4">
          <a href="#" className="block py-2">
            Home
          </a>
          <a href="#" className="block py-2">
            About
          </a>
          <a href="#" className="block py-2">
            Services
          </a>
          <a href="#" className="block py-2">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

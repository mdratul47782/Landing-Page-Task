import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {/* Logo and Quote */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src="/e72e6d3782262b6707712334b8111b69.png"
              alt="Jade Reforestry Logo"
              className="h-12"
            />
            <span className="font-bold text-lg">JADE REFORESTRY</span>
          </div>
          <p className="mt-4 text-sm">
            "De beste tijd om een boom te planten was 20 jaar geleden. De op één
            na beste tijd is nu."
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Over Ons
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Agroforestry
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Projecten & Foto s
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-bold mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-4">NEEM CONTACT OP</h3>
          <p className="text-sm">Boxtelseweg 27B, 5481VE Schijndel</p>
          <p className="mt-2 text-sm">info@jadereforestry.com</p>
          <p className="mt-2 text-sm">+31 6 128 464 80</p>
          <p className="mt-2 text-sm">BTW-ID NL003147799B90</p>
          <p className="mt-2 text-sm">KVK 77106903</p>
          <p className="mt-2 text-sm">IBAN NL11 RABO 0352 2704 89</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
        © Jade Reforestry | 2024 | jadereforestry.nl | Web Design by Online
        Marketing Bakery
      </div>
    </footer>
  );
};

export default Footer;

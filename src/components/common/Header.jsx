import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [language, setLanguage] = useState("Tiếng Việt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl bg-white/90 backdrop-blur-lg px-10 flex items-center justify-between shadow-md transition-all duration-300 z-50 border-b border-gray-200 ${scrolled ? "py-2 h-16 shadow-lg" : "py-5 h-24"}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="HYRATEK" className="h-10" onError={(e) => (e.target.style.display = 'none')} />
      </div>

      {/* Navigation */}
      <nav className="lg:flex items-center space-x-8 font-medium hidden lg:block">
        {[{ name: "Công ty", sub: ["Về chúng tôi", "Bộ phương tiện truyền thông", "Công nghệ của chúng tôi"] },
          { name: "Hệ sinh thái", sub: ["Hyra Zone", "Hyra Network"] },
          { name: "Dịch vụ" },
          { name: "Tuyển dụng" },
          { name: "Tin tức" },
          { name: "Liên hệ chúng tôi" }
        ].map((item, index) => (
          <div 
            key={index} 
            className="relative cursor-pointer group"
            onMouseEnter={() => setDropdownOpen(item.name)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <div className="flex items-center space-x-1 text-gray-800 hover:text-[#E91E63] transition-all">
              <span className="text-lg">{item.name}</span>
              {item.sub && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
            </div>
            {item.sub && dropdownOpen === item.name && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-56 transition-opacity duration-200 opacity-100 scale-100">
                {item.sub.map((subItem, subIndex) => (
                  <div key={subIndex} className="px-6 py-3 text-gray-800 hover:text-[#E91E63] hover:bg-gray-100">{subItem}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      {/* Language Selector */}
      <div
        className="relative flex items-center space-x-2 cursor-pointer hidden lg:flex"
        onMouseEnter={() => setDropdownOpen("language")}
        onMouseLeave={() => setDropdownOpen(null)}
      >
        <img src="/flag-vn.png" alt="Vietnamese" className="h-5 w-5" onError={(e) => (e.target.style.display = 'none')} />
        <span className="text-lg font-medium">{language}</span>
        <ChevronDown size={16} />
        {dropdownOpen === "language" && (
          <div className="absolute top-full right-0 bg-white shadow-md rounded-lg mt-1 py-2 w-32 transition-opacity duration-200">
            <div className="px-4 py-2 hover:bg-gray-200" onClick={() => setLanguage("English")}>🇬🇧 English</div>
            <div className="px-4 py-2 hover:bg-gray-200" onClick={() => setLanguage("Tiếng Việt")}>🇻🇳 Tiếng Việt</div>
          </div>
        )}
      </div>
    </header>
  );
}

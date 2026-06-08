import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-stds", label: "About STDs" },
    { path: "/statistics", label: "Statistics" },
    { path: "/types", label: "Types of STDs" },
    { path: "/prevention", label: "Prevention" },
    { path: "/testing-centers", label: "Testing Centers" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">Project SAFE</span>
              <span className="text-xs text-gray-600">Sexual Awareness For Everyone</span>
            </div>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors font-medium ${
                  location.pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

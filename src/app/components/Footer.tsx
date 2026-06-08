import { Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Project SAFE</h3>
                <p className="text-xs">Sexual Awareness For Everyone</p>
              </div>
            </div>
            <p className="text-sm">
              Dedicated to increasing awareness about sexually transmitted diseases
              and promoting healthy sexual practices.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-stds" className="hover:text-teal-400 transition-colors">About STDs</a></li>
              <li><a href="/types" className="hover:text-teal-400 transition-colors">Types of STDs</a></li>
              <li><a href="/prevention" className="hover:text-teal-400 transition-colors">Prevention</a></li>
              <li><a href="/testing-centers" className="hover:text-teal-400 transition-colors">Testing Centers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Get Help</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Emergency Hotline: 911</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Project SAFE. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Created by Shanice Tagoon, Earl John Timbang, and Meld-Ve Tocmo
          </p>
        </div>
      </div>
    </footer>
  );
}

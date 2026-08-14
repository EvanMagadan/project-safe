import { Link } from "react-router-dom";
import { Shield, BookOpen, Activity, MapPin, AlertCircle, Users } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Project SAFE</h1>
            <p className="text-xl mb-8 opacity-90">
              Sexual Awareness For Everyone - an educational website dedicated to
              increasing awareness about sexually transmitted diseases (STDs) and
              promoting healthy sexual practices. Our goal is to provide accurate,
              reliable, and easy-to-understand information that helps individuals
              make informed decisions about their sexual health.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/about-stds"
                className="px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Learn About STDs
              </Link>
              <Link
                to="/testing-centers"
                className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Find Testing Centers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50 border-y-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-amber-900 mb-2">Knowledge is Protection: Learn, Prevent, Get Tested</h2>
              <p className="text-amber-800">
                Every day, thousands of people worldwide are diagnosed with sexually
                transmitted diseases. Early detection, proper treatment, and
                preventive measures can significantly reduce complications and
                improve quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-gray-900">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Increase awareness about STDs",
                description: "Provide comprehensive, accurate information about sexually transmitted diseases.",
              },
              {
                icon: Shield,
                title: "Educate on prevention, testing, and treatment",
                description: "Empower individuals with knowledge about how to protect themselves and others.",
              },
              {
                icon: Users,
                title: "Reduce stigma surrounding sexual health",
                description: "Create an open, judgment-free space for sexual health education.",
              },
              {
                icon: Activity,
                title: "Encourage regular health checkups",
                description: "Promote the importance of routine testing and early detection.",
              },
              {
                icon: MapPin,
                title: "Provide access to local healthcare",
                description: "Connect people with testing and treatment resources in Southern Leyte.",
              },
            ].map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4 text-gray-900">Take Control of Your Health</h2>
              <p className="text-gray-600 mb-6">
                Knowledge is the first step toward prevention and treatment. Explore
                our comprehensive resources to learn about different types of STDs,
                prevention methods, and where to get tested in Southern Leyte.
              </p>
              <div className="space-y-4">
                <Link
                  to="/types"
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-blue-900 mb-1">Learn About Different STDs</h3>
                  <p className="text-sm text-blue-700">
                    HIV/AIDS, Gonorrhea, Syphilis, Chlamydia, and more
                  </p>
                </Link>
                <Link
                  to="/prevention"
                  className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <h3 className="text-green-900 mb-1">Prevention Guidelines</h3>
                  <p className="text-sm text-green-700">
                    Learn how to protect yourself and reduce risk
                  </p>
                </Link>
                <Link
                  to="/statistics"
                  className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <h3 className="text-purple-900 mb-1">Local Statistics</h3>
                  <p className="text-sm text-purple-700">
                    View data and trends for Southern Leyte
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-8 rounded-2xl">
              <h3 className="mb-4 text-gray-900">Why Get Tested?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Many STDs show no symptoms initially</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Early detection allows for timely treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Prevents complications and long-term health problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span>Reduces transmission to others</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

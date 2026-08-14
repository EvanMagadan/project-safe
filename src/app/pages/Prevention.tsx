import { CheckCircle, XCircle, Shield } from "lucide-react";

export function Prevention() {
  const dos = [
    {
      title: "Practice Safe Sex",
      description: "Use condoms correctly during every sexual encounter to reduce the risk of infection.",
    },
    {
      title: "Get Tested Regularly",
      description: "Regular screening helps detect infections early.",
    },
    {
      title: "Communicate with Partners",
      description: "Discuss sexual health openly and honestly.",
    },
    {
      title: "Seek Medical Advice",
      description: "Consult healthcare professionals if symptoms appear or after possible exposure.",
    },
    {
      title: "Get Vaccinated",
      description: "Receive recommended vaccines, especially for Hepatitis B.",
    },
  ];

  const donts = [
    {
      title: "Do Not Share Needles",
      description: "Sharing needles can spread HIV, Hepatitis B, and other infections.",
    },
    {
      title: "Do Not Engage in Unprotected Sex",
      description: "Unprotected sexual activity increases infection risk.",
    },
    {
      title: "Do Not Self-Medicate",
      description: "Improper treatment can worsen infections and cause complications.",
    },
    {
      title: "Do Not Ignore Symptoms",
      description: "Early treatment can prevent severe health problems.",
    },
    {
      title: "Do Not Delay Testing",
      description: "Prompt testing ensures faster diagnosis and treatment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="mb-4 text-gray-900">Prevention and Safety</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Protecting yourself and others from sexually transmitted diseases starts
            with knowledge and making informed choices. Follow these guidelines to
            reduce your risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-gray-900">DO'S: What You Should Do</h2>
            </div>

            <div className="space-y-4">
              {dos.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg"
                >
                  <h3 className="text-green-900 mb-2">{item.title}</h3>
                  <p className="text-green-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-gray-900">DON'TS: What to Avoid</h2>
            </div>

            <div className="space-y-4">
              {donts.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg"
                >
                  <h3 className="text-red-900 mb-2">{item.title}</h3>
                  <p className="text-red-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="mb-6 text-gray-900">Key Prevention Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-blue-900 mb-2">Barrier Protection</h3>
              <p className="text-blue-700">Use condoms and dental dams correctly and consistently during sexual activity.</p>
            </div>
            <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="text-purple-900 mb-2">Regular Testing</h3>
              <p className="text-purple-700">Get tested at least once a year if sexually active, or more frequently if you have multiple partners.</p>
            </div>
            <div className="p-6 bg-teal-50 border border-teal-200 rounded-lg">
              <h3 className="text-teal-900 mb-2">Know Your Status</h3>
              <p className="text-teal-700">Both you and your partner(s) should know your STD status before engaging in sexual activity.</p>
            </div>
            <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
              <h3 className="text-indigo-900 mb-2">Limit Partners</h3>
              <p className="text-indigo-700">Reducing the number of sexual partners decreases your exposure to potential infections.</p>
            </div>
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-green-900 mb-2">Vaccination</h3>
              <p className="text-green-700">Get vaccinated against preventable STDs like Hepatitis B and HPV when available.</p>
            </div>
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="text-orange-900 mb-2">Education</h3>
              <p className="text-orange-700">Stay informed about STDs, their symptoms, and how they spread to make better decisions.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="mb-4">Take Control of Your Health Today</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Prevention is always better than treatment. By following these guidelines
            and getting regular checkups, you can protect yourself and your partners
            from STDs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/testing-centers"
              className="px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Find Testing Centers
            </a>
            <a
              href="/faq"
              className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
            >
              Common Questions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

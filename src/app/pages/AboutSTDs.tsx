import { AlertCircle, Info, Shield } from "lucide-react";

export function AboutSTDs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="mb-8 text-gray-900">About Sexually Transmitted Diseases</h1>

          <section className="mb-10">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-gray-900 mb-3">What are STDs?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Sexually Transmitted Diseases (STDs), also known as Sexually
                  Transmitted Infections (STIs), are infections that are primarily
                  spread through sexual contact, including vaginal, anal, and oral
                  sex. Some STDs can also be transmitted through blood contact,
                  sharing needles, and from mother to child during pregnancy or
                  childbirth.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-gray-900 mb-3">Common Symptoms</h2>
                <p className="text-gray-700 mb-4">
                  Many STDs may not show symptoms immediately. Common signs include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Painful urination",
                    "Unusual discharge from penis or vagina",
                    "Genital sores or ulcers",
                    "Itching around the genital area",
                    "Lower abdominal pain",
                    "Skin rashes",
                    "Swollen lymph nodes",
                    "Fever and fatigue",
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-yellow-900">
                    <strong>Important:</strong> Many people with STDs do not experience
                    symptoms, especially in the early stages. This is why regular
                    testing is crucial for sexually active individuals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-gray-900 mb-4">Causes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-blue-900 mb-2">Bacteria</h3>
                <p className="text-sm text-blue-700">Gonorrhea, Syphilis, Chlamydia</p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="text-purple-900 mb-2">Viruses</h3>
                <p className="text-sm text-purple-700">HIV, Herpes, Hepatitis B</p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-green-900 mb-2">Parasites</h3>
                <p className="text-sm text-green-700">Trichomoniasis</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-gray-900 mb-3">Risk Factors</h2>
                <p className="text-gray-700 mb-4">
                  Understanding risk factors can help you make informed decisions about
                  your sexual health:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Unprotected sexual activity",
                      description:
                        "Engaging in sexual activity without proper barrier protection increases risk",
                    },
                    {
                      title: "Multiple sexual partners",
                      description:
                        "Having multiple partners increases exposure to potential infections",
                    },
                    {
                      title: "Sharing needles",
                      description:
                        "Using shared needles for drugs or other purposes can transmit blood-borne infections",
                    },
                    {
                      title: "Lack of regular testing",
                      description:
                        "Not getting tested regularly means infections can go undetected and untreated",
                    },
                    {
                      title: "Previous history of STDs",
                      description:
                        "Having had an STD before may increase susceptibility to future infections",
                    },
                  ].map((factor, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-400">
                      <h4 className="text-gray-900 mb-1">{factor.title}</h4>
                      <p className="text-sm text-gray-600">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 p-6 bg-teal-50 rounded-lg border border-teal-200">
            <h3 className="text-teal-900 mb-2">Take Action</h3>
            <p className="text-teal-800 mb-4">
              If you are sexually active or believe you may have been exposed to an
              STD, it's important to get tested. Early detection and treatment can
              prevent serious complications.
            </p>
            <a
              href="/testing-centers"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Find Testing Centers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

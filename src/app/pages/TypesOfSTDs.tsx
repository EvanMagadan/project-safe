import { useState } from "react";
import { Zap, Bug, AlertCircle, Shield, Activity } from "lucide-react";

export function TypesOfSTDs() {
  const [selectedDisease, setSelectedDisease] = useState<string | null>("hiv");

  const diseases = [
    {
      id: "hiv",
      name: "HIV/AIDS",
      type: "Virus",
      icon: Zap,
      color: "red",
      description:
        "Human Immunodeficiency Virus (HIV) is a virus that attacks the body's immune system, specifically the CD4 cells, which help the body fight infections. When untreated, HIV weakens the immune system over time, making the person more vulnerable to serious illnesses and infections.",
      symptoms:
        "Common symptoms of HIV may include fever, fatigue, weight loss, night sweats, and swollen lymph nodes. However, some people may not experience symptoms in the early stages, which is why many individuals may not know they are infected right away.",
      transmission:
        "HIV is transmitted through unprotected sexual contact, sharing contaminated needles, blood transfusions (rare due to screening), and from mother to child during pregnancy, childbirth, or breastfeeding.",
      prevention:
        "Although there is no cure, Antiretroviral Therapy (ART) helps control the virus. Prevention includes condom use, regular testing, PrEP, and avoiding needle sharing.",
    },
    {
      id: "gonorrhea",
      name: "Gonorrhea",
      type: "Bacteria",
      icon: Bug,
      color: "orange",
      description:
        "Gonorrhea is a bacterial infection caused by Neisseria gonorrhoeae. It mainly affects the genital tract, but it can also infect the rectum, throat, and eyes if exposed.",
      symptoms:
        "Symptoms may include painful urination, thick yellow or green discharge, and pelvic or abdominal pain. In some cases, especially in women, symptoms may be mild or absent, which can lead to delayed treatment and complications.",
      transmission:
        "It is transmitted through sexual contact with an infected person.",
      prevention:
        "Gonorrhea can be treated with antibiotics prescribed by a healthcare provider, although proper medical guidance is important due to antibiotic resistance. Prevention includes practicing safe sex and regular STD testing.",
    },
    {
      id: "syphilis",
      name: "Syphilis",
      type: "Bacteria",
      icon: Bug,
      color: "purple",
      description:
        "Syphilis is a sexually transmitted bacterial infection caused by Treponema pallidum. It progresses in stages and can become severe if left untreated.",
      symptoms:
        "Early symptoms often include painless sores at the infection site, followed by skin rashes, fever, and fatigue. Because the early sores are painless, many people do not notice them, allowing the infection to spread.",
      transmission:
        "Syphilis is transmitted through direct contact with infected sores during sexual activity.",
      prevention:
        "It can be cured with penicillin antibiotics if detected early. Prevention includes condom use, avoiding sexual contact with infected individuals, and regular screening.",
    },
    {
      id: "chlamydia",
      name: "Chlamydia",
      type: "Bacteria",
      icon: Bug,
      color: "blue",
      description:
        "Chlamydia is a common bacterial infection caused by Chlamydia trachomatis. It can affect both men and women and may lead to serious reproductive health problems if untreated.",
      symptoms:
        "Many people with chlamydia do not show symptoms, which is why it is often called a 'silent infection.' When symptoms occur, they may include painful urination, unusual genital discharge, and pelvic pain.",
      transmission:
        "It spreads through sexual contact with an infected person.",
      prevention:
        "Chlamydia can be easily treated with antibiotics. Prevention methods include consistent condom use, limiting sexual partners, and undergoing routine testing.",
    },
    {
      id: "herpes",
      name: "Genital Herpes",
      type: "Virus",
      icon: Zap,
      color: "pink",
      description:
        "Genital herpes is a viral infection caused by the Herpes Simplex Virus (HSV), most commonly HSV-2, though HSV-1 can also cause it. It is a long-term condition that remains in the body.",
      symptoms:
        "Symptoms include painful blisters or sores in the genital area, itching, and a burning sensation. Some people may experience mild symptoms or no symptoms at all, especially during early infection.",
      transmission:
        "It is transmitted through skin-to-skin contact during sexual activity.",
      prevention:
        "Although there is no cure, antiviral medications help reduce symptoms and outbreaks. Prevention includes condom use and avoiding sexual contact during active outbreaks.",
    },
    {
      id: "hepatitis-b",
      name: "Hepatitis B",
      type: "Virus",
      icon: Zap,
      color: "yellow",
      description:
        "Hepatitis B is a viral infection that affects the liver and can lead to both short-term and long-term health problems, including liver damage or liver cancer if untreated.",
      symptoms:
        "Symptoms may include fatigue, fever, nausea, abdominal pain, and jaundice, which is the yellowing of the skin and eyes. Some individuals may not show symptoms at all during early infection.",
      transmission:
        "It is transmitted through sexual contact, exposure to infected blood, and from mother to child during childbirth.",
      prevention:
        "Hepatitis B can be prevented through vaccination, which is highly effective. Treatment includes antiviral medications and regular medical monitoring to manage the infection.",
    },
  ];

  const selected = diseases.find((d) => d.id === selectedDisease);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-gray-900">Types of STDs</h1>
          <p className="text-gray-600 max-w-3xl">
            Learn about different sexually transmitted diseases, their symptoms,
            transmission methods, and prevention strategies. Click on any disease
            below for detailed information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {diseases.map((disease) => {
            const Icon = disease.icon;
            return (
              <button
                key={disease.id}
                onClick={() => setSelectedDisease(disease.id)}
                className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-left ${
                  selectedDisease === disease.id ? `ring-2 ring-${disease.color}-500` : ""
                }`}
              >
                <div className={`w-12 h-12 bg-${disease.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${disease.color}-600`} />
                </div>
                <h3 className="text-gray-900 mb-2">{disease.name}</h3>
                <div className={`inline-block px-3 py-1 bg-${disease.color}-50 text-${disease.color}-700 rounded-full text-sm`}>
                  {disease.type}
                </div>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-${selected.color}-100 rounded-lg flex items-center justify-center`}>
                <selected.icon className={`w-8 h-8 text-${selected.color}-600`} />
              </div>
              <div>
                <h2 className="text-gray-900">{selected.name}</h2>
                <span className={`text-${selected.color}-600`}>{selected.type}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">What is it?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-7">{selected.description}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">Symptoms</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-7">{selected.symptoms}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">How it spreads</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-7">{selected.transmission}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">Prevention & Treatment</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-7">{selected.prevention}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-900 mb-2">Important Reminder</h3>
              <p className="text-amber-800">
                Many STDs can be asymptomatic, meaning you may have an infection
                without knowing it. Regular testing is essential for early detection
                and treatment. If you believe you may have been exposed to an STD,
                contact a healthcare provider immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

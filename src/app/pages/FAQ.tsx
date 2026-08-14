import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Is HIV curable?",
      answer:
        "Currently, there is no cure for HIV. However, antiretroviral therapy (ART) can help people with HIV live long and healthy lives. ART works by reducing the amount of virus in the body to undetectable levels, which prevents progression to AIDS and reduces the risk of transmission to others.",
    },
    {
      question: "How often should I get tested?",
      answer:
        "Individuals who are sexually active should discuss testing frequency with a healthcare provider. Those with higher risk factors (multiple partners, unprotected sex, etc.) may require more frequent testing. Generally, sexually active individuals should get tested at least once a year, or every 3-6 months if engaging in higher-risk behaviors.",
    },
    {
      question: "Can STDs be treated?",
      answer:
        "Many bacterial STDs such as gonorrhea, chlamydia, and syphilis can be treated and cured with antibiotics. Viral infections such as HIV and herpes cannot be cured, but can be managed with medication. Early detection and proper treatment are crucial for preventing complications and reducing transmission.",
    },
    {
      question: "What are the common symptoms of STDs?",
      answer:
        "Symptoms may include unusual discharge, genital sores, painful urination, itching, rashes, fever, or swollen lymph nodes. However, many people with STDs show no symptoms at all, especially in the early stages. This is why regular testing is so important, even if you feel healthy.",
    },
    {
      question: "Can I have an STD without symptoms?",
      answer:
        "Yes. Many STDs can be asymptomatic, which is why regular testing is important. Infections like chlamydia and gonorrhea often show no symptoms, especially in women, yet can still cause serious health problems if left untreated and can be transmitted to partners.",
    },
    {
      question: "Can condoms completely prevent STDs?",
      answer:
        "Condoms greatly reduce the risk of STD transmission but do not provide 100% protection. When used correctly and consistently, condoms are highly effective at preventing many STDs, particularly those transmitted through bodily fluids. However, some STDs like herpes and HPV can be transmitted through skin-to-skin contact in areas not covered by condoms.",
    },
    {
      question: "Why is early treatment important?",
      answer:
        "Early treatment prevents complications, reduces transmission, and improves overall health outcomes. Untreated STDs can lead to serious health problems including infertility, organ damage, increased risk of HIV transmission, pregnancy complications, and certain types of cancer. Early treatment also prevents you from unknowingly spreading infections to others.",
    },
    {
      question: "Where can I get tested in Southern Leyte?",
      answer:
        "Testing and consultation services are available at provincial and district hospitals, health centers, and accredited healthcare facilities throughout Southern Leyte. Major facilities include Salvacion Oppus Yñiguez Memorial Provincial Hospital in Maasin City, Sogod District Hospital, and Padre Burgos Community Hospital. All services are confidential and professional.",
    },
    {
      question: "How much does STD testing cost?",
      answer:
        "Many STD testing services in government hospitals and health centers in the Philippines are free or low-cost. Some tests may be covered by PhilHealth. Private facilities may charge fees. Contact the facility directly to inquire about costs and available programs.",
    },
    {
      question: "Will my test results be kept confidential?",
      answer:
        "Yes. All STD testing and treatment services are confidential. Healthcare providers are bound by medical ethics and privacy laws to protect your personal health information. Your test results will not be shared without your consent.",
    },
    {
      question: "Can STDs affect pregnancy?",
      answer:
        "Yes. Untreated STDs can cause serious complications during pregnancy, including premature birth, low birth weight, stillbirth, and transmission to the baby during delivery. Pregnant women should get tested for STDs early in pregnancy and receive appropriate treatment if needed.",
    },
    {
      question: "How soon after exposure should I get tested?",
      answer:
        "The timing depends on the type of STD. Some infections can be detected within days, while others may take weeks or months. If you believe you've been exposed, contact a healthcare provider immediately. They can advise on the appropriate testing timeline and may recommend preventive treatment in some cases.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="mb-4 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about STDs, testing, treatment, and
            prevention. Click on any question to see the answer.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <Accordion.Root type="single" collapsible className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`item-${index}`}>
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-5 text-gray-700 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              If you couldn't find the answer you're looking for, don't hesitate to
              contact a healthcare professional or reach out to us directly.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-900 mb-3">Need Immediate Help?</h3>
            <p className="text-gray-600 mb-4">
              If you believe you have been exposed to an STD or are experiencing
              symptoms, contact a testing center immediately.
            </p>
            <a
              href="/testing-centers"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Find Testing Centers
            </a>
          </div>
        </div>

        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <h3 className="text-amber-900 mb-2">Important Reminder</h3>
          <p className="text-amber-800">
            The information provided on this website is for educational purposes only
            and should not replace professional medical advice. Always consult with a
            qualified healthcare provider for diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}

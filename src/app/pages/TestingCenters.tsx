import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export function TestingCenters() {
  const hospitals = [
    {
      name: "Salvacion Oppus Yñiguez Memorial Provincial Hospital",
      location: "Barangay Dongon, Mantahan, Maasin City, Southern Leyte, Philippines",
      phone: "+63 53 570 9142 / 0919 093 9035",
      email: "mcc_soymph@yahoo.com",
      hours: "Monday–Friday, 8:00 AM – 5:00 PM (Closed weekends)",
      directions: [
        "From Maasin City proper, you can take a tricycle or jeepney going to Brgy. Dongon / Provincial Hospital area.",
        "Travel time is approximately 10–15 minutes depending on traffic.",
        'The hospital is well-known locally, so you can simply tell the driver: "Provincial Hospital sa Dongon."',
      ],
    },
    {
      name: "Sogod District Hospital",
      location: "Osmeña Street, Barangay Zone 1, Sogod, Southern Leyte, Philippines",
      phone: "0917 508 4570 / (053) 577 8358",
      email: "sogoddistricthospital@gmail.com",
      hours: "Monday–Friday, 8:00 AM – 5:00 PM",
      directions: [
        "From Sogod town center, the hospital is located along Osmeña Street, easily accessible by tricycle.",
        'It is near the main public road, so commuters can ask for "District Hospital" and drivers will know the location.',
        "Travel time is usually 5–10 minutes from Sogod proper.",
      ],
    },
    {
      name: "Padre Burgos Community Hospital",
      location: "Barangay Sta. Sofia, Padre Burgos, Southern Leyte, Philippines",
      phone: "0961 572 8321",
      email: "padreburgoshospital@gmail.com",
      hours: "Monday–Friday, 8:00 AM – 5:00 PM",
      directions: [
        "From Padre Burgos town proper, ride a tricycle going to Sta. Sofia area.",
        "The hospital is located within a coastal community and is accessible via the main barangay road.",
        "Travel time is around 5–15 minutes depending on your starting point.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-gray-900">Testing and Treatment Centers</h1>
          <p className="text-gray-600 max-w-3xl mb-6">
            Find healthcare facilities in Southern Leyte where STD testing and
            treatment are available. All hospitals listed provide confidential
            medical services.
          </p>
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-blue-900 mb-2">Why Get Tested?</h3>
            <p className="text-blue-800">
              Many STDs may not show symptoms immediately. Early testing allows for
              timely treatment, prevents complications, and reduces transmission to
              others. All services are confidential and professional.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6">
                <h2 className="text-white mb-2">{hospital.name}</h2>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{hospital.location}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">Contact Number</h4>
                        <p className="text-gray-700">{hospital.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">Email Address</h4>
                        <p className="text-gray-700">{hospital.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Operating Hours</h4>
                      <p className="text-gray-700">{hospital.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Navigation className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-3">How to Get There</h4>
                      <ul className="space-y-2">
                        {hospital.directions.map((direction, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{direction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
          <h2 className="mb-6 text-gray-900">Important Information</h2>
          <div className="space-y-4">
            {[
              {
                title: "Confidential Services",
                description:
                  "All hospitals listed provide confidential medical services, including STD screening, HIV testing, treatment, and counseling.",
              },
              {
                title: "Early Consultation",
                description:
                  "Patients are encouraged to visit the nearest facility for early consultation, especially if symptoms are present or after possible exposure.",
              },
              {
                title: "Professional Care",
                description:
                  "All facilities are staffed with trained medical professionals who provide compassionate, non-judgmental care.",
              },
              {
                title: "Free or Low-Cost Services",
                description:
                  "Many testing and treatment services are available at minimal or no cost through government health programs.",
              },
            ].map((info, index) => (
              <div key={index} className="p-4 bg-gray-50 border-l-4 border-teal-500 rounded-r-lg">
                <h3 className="text-gray-900 mb-1">{info.title}</h3>
                <p className="text-gray-700">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl text-center">
          <h2 className="mb-4">Don't Wait – Get Tested Today</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Early detection saves lives. If you have concerns about your sexual
            health or believe you may have been exposed to an STD, contact one of
            these facilities today.
          </p>
          <a
            href="/faq"
            className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Have Questions? Read Our FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

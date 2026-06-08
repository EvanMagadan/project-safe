import { useState } from "react";
import { Mail, Phone, CheckCircle } from "lucide-react";
import shaniceImg from "../../imports/shanice.jpeg";
import earlImg from "../../imports/earl.jpeg";
import meldImg from "../../imports/meld.jpeg";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shanicetagoon02@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          _cc: 'timbangearl@gmail.com,meldavetocmo@gmail.com',
          _subject: 'New message from Project SAFE Contact Form',
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      alert("There was an error sending your message. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const team = [
    {
      name: "Shanice P. Tagoon",
      phone: "+63 9352318594",
      email: "shanicetagoon02@gmail.com",
      image: shaniceImg,
    },
    {
      name: "Earl John O. Timbang",
      phone: "+63 9273753061",
      email: "timbangearl@gmail.com",
      image: earlImg,
    },
    {
      name: "Meld-Ve G. Tocmo",
      phone: "+63 9933261836",
      email: "meldavetocmo@gmail.com",
      image: meldImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-gray-900">Contact and Help</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about Project SAFE or need assistance? Reach out to our
            team or contact healthcare providers directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="mb-6 text-gray-900">Send Us a Message</h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">
                  Thank you! Your message has been sent to our team successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none disabled:bg-gray-100"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none disabled:bg-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none disabled:bg-gray-100"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none disabled:bg-gray-100"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500 text-center">
              Your message will be sent to Shanice, Earl John, and Meld-Ve
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="mb-6 text-gray-900">Our Team</h2>
              <p className="text-gray-600 mb-6">
                Project SAFE was created by a dedicated team of students committed to
                increasing sexual health awareness in Southern Leyte.
              </p>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                      />
                      <h3 className="text-gray-900">{member.name}</h3>
                    </div>
                    <div className="space-y-2 ml-20">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-teal-600 transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-xl p-6">
              <h3 className="mb-3">Emergency Contacts</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Emergency Hotline: 911</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>DOH Hotline: 8651-7800</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="mb-6 text-gray-900">Healthcare Facilities</h2>
          <p className="text-gray-600 mb-6">
            For STD testing, treatment, and professional medical consultation, please
            contact one of the healthcare facilities listed below or visit our Testing
            Centers page for more information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Provincial Hospital",
                location: "Maasin City",
                phone: "+63 53 570 9142",
              },
              {
                name: "Sogod District Hospital",
                location: "Sogod",
                phone: "0917 508 4570",
              },
              {
                name: "Padre Burgos Hospital",
                location: "Padre Burgos",
                phone: "0961 572 8321",
              },
            ].map((facility, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-gray-900 mb-2">{facility.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{facility.location}</p>
                <p className="text-sm text-teal-600 flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {facility.phone}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/testing-centers"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              View All Testing Centers
            </a>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-blue-900 mb-2">Confidentiality Notice</h3>
          <p className="text-blue-800">
            All inquiries and consultations are handled with complete confidentiality.
            Your privacy and health information are protected under medical ethics and
            privacy laws.
          </p>
        </div>
      </div>
    </div>
  );
}

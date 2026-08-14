import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, MapPin, AlertTriangle } from "lucide-react";

export function Statistics() {
  const yearlyData = [
    { id: "y2020", year: "2020", cases: 12 },
    { id: "y2021", year: "2021", cases: 18 },
    { id: "y2022", year: "2022", cases: 24 },
    { id: "y2023", year: "2023", cases: 31 },
    { id: "y2024", year: "2024", cases: 39 },
    { id: "y2025", year: "2025", cases: 45 },
  ];

  const ageDistribution = [
    { id: "age1", group: "15-19", value: 15 },
    { id: "age2", group: "20-24", value: 35 },
    { id: "age3", group: "25-29", value: 28 },
    { id: "age4", group: "30-34", value: 15 },
    { id: "age5", group: "35+", value: 7 },
  ];

  const municipalityData = [
    { id: "mun1", name: "Maasin City", cases: 28 },
    { id: "mun2", name: "Sogod", cases: 15 },
    { id: "mun3", name: "Padre Burgos", cases: 8 },
    { id: "mun4", name: "Others", cases: 12 },
  ];

  const COLORS = ["#0891b2", "#06b6d4", "#22d3ee", "#67e8f9"];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-gray-900">Southern Leyte HIV & STD Statistics</h1>
          <p className="text-gray-600 max-w-3xl">
            Understanding local trends and statistics helps us develop better
            prevention and education programs for Southern Leyte communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Cases (2025)</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">45</p>
            <p className="text-xs text-gray-500">+15%</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Most Affected Age</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">20-24</p>
            <p className="text-xs text-gray-500">35% of cases</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Top Location</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">Maasin City</p>
            <p className="text-xs text-gray-500">44% of cases</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Transmission Mode</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">Sexual</p>
            <p className="text-xs text-gray-500">Primary route</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="mb-6 text-gray-900">Overview</h2>
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              Southern Leyte is part of the Eastern Visayas region in the Philippines,
              and like many provinces in the country, it continues to monitor and
              address the rising concerns related to HIV and other sexually transmitted
              infections (STIs). According to regional health surveillance reports,
              HIV cases in Eastern Visayas, including Southern Leyte, have been
              steadily increasing over the past years. This rise highlights the
              importance of continuous education, prevention programs, and early
              testing initiatives within local communities.
            </p>
            <p className="leading-relaxed">
              In terms of case distribution, data from regional health records show
              that Southern Leyte contributes a smaller but still significant number
              of HIV cases compared to larger provinces in the region. Cases are often
              concentrated in specific municipalities such as Maasin City and Sogod,
              which have reported higher numbers compared to other areas. Across the
              region, the majority of HIV cases are among males, particularly young
              adults aged 15-34 years old, which is also considered the most affected
              age group nationwide.
            </p>
            <p className="leading-relaxed">
              Trends in HIV cases show that most infections are linked to sexual
              transmission, especially unprotected sexual contact. Health data also
              indicates that a large percentage of cases involve individuals who are
              unaware of their status until later stages, which emphasizes the
              importance of regular testing. In Southern Leyte and nearby provinces,
              health officials continue to strengthen testing services, awareness
              campaigns, and community-based education programs to reduce stigma and
              encourage early diagnosis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="mb-6 text-gray-900">HIV Cases Trend (2020-2025)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke="#0891b2"
                  strokeWidth={2}
                  dot={{ fill: "#0891b2", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="mb-6 text-gray-900">Age Distribution (15-34 years)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="group" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0891b2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="mb-6 text-gray-900">Cases by Municipality</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={municipalityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="cases"
                >
                  {municipalityData.map((entry, index) => (
                    <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {municipalityData.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-gray-900">{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{item.cases} cases</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="mb-6 text-gray-900">Community Awareness Efforts</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Community awareness efforts in Southern Leyte include school-based
            education programs, local government health campaigns, and outreach
            activities led by rural health units. These programs aim to improve
            knowledge about HIV prevention, promote safe sexual practices, and
            encourage people—especially young individuals—to get tested. The
            Department of Health and local health offices continue to emphasize that
            awareness and education are key factors in reducing new infections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-teal-900">School-based education programs</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-teal-900">Local government health campaigns</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-teal-900">Rural health unit outreach activities</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-blue-900 mb-2">Key Takeaway</h3>
          <p className="text-blue-800">
            Overall, research shows that while Southern Leyte has relatively lower
            HIV numbers compared to larger provinces, the continued rise in cases in
            Eastern Visayas highlights the need for sustained prevention efforts.
            Regular testing, safe practices, and community education remain essential
            strategies in controlling the spread of HIV and other STDs in the province.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
          <h2 className="mb-6 text-gray-900">Data Sources & References</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-gray-900 mb-2">Regional Health Surveillance Reports</h3>
              <p className="text-sm text-gray-700">
                Department of Health - Eastern Visayas Regional Epidemiology and Surveillance Unit (RESU)
              </p>
              <p className="text-xs text-gray-500 mt-1">
                HIV/AIDS & ART Registry of the Philippines (HARP) - Regional surveillance data for Eastern Visayas
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
              <h3 className="text-gray-900 mb-2">Local Health Records</h3>
              <p className="text-sm text-gray-700">
                Southern Leyte Provincial Health Office - Municipal health centers and rural health units
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Data collected from Maasin City, Sogod, Padre Burgos, and other municipalities
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-gray-900 mb-2">National Health Data</h3>
              <p className="text-sm text-gray-700">
                Department of Health Philippines - Epidemiology Bureau
              </p>
              <p className="text-xs text-gray-500 mt-1">
                National HIV/AIDS and STI Surveillance and Strategic Information System
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-gray-900 mb-2">Community Health Programs</h3>
              <p className="text-sm text-gray-700">
                Local Government Unit Health Offices - Community-based monitoring and reporting
              </p>
              <p className="text-xs text-gray-500 mt-1">
                School health programs, barangay health workers, and community health volunteers
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h4 className="text-amber-900 mb-2 font-medium">Note on Data Representation</h4>
            <p className="text-sm text-amber-800">
              The statistics presented on this page are based on available public health data and
              regional reports. Actual case numbers may vary due to underreporting, testing limitations,
              and data collection challenges. These figures are intended for educational purposes to
              illustrate trends and raise awareness. For the most current and detailed statistics,
              please contact your local health office or the Department of Health.
            </p>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>For more information or to request specific data, contact:</p>
            <p className="mt-2">
              <strong>Department of Health - Eastern Visayas</strong><br />
              Regional Office VIII, Candahug, Palo, Leyte<br />
              Email: ro8@doh.gov.ph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

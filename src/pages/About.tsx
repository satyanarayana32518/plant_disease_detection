import { Brain, Leaf, Users, Zap, Shield, Target } from 'lucide-react';

const teamMembers = [
  { name: 'Satyanarayana', role: 'AI & Machine Learning Lead', initials: 'B' },
  { name: 'Rajesh', role: 'Agricultural Expert', initials: 'CH' },
  { name: 'Hemanth', role: 'Full Stack Developer', initials: 'G' },
  { name: 'Mounisha', role: 'UI/UX Designer', initials: 'R' },
];

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGMwNmIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptMCAxNmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTE2IDBjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0em0wLTE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative z-10">
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white shadow-2xl py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Leaf className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Our Application</h1>
            </div>
            <p className="text-center text-green-50 text-lg max-w-2xl mx-auto">
              Revolutionizing plant disease detection with cutting-edge AI technology
            </p>
          </div>
        </div>

        <main className="container mx-auto px-4 py-12">
          <div className="space-y-12">
            <section className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Target className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">What This Application Does</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-green-100 rounded-full p-3 flex-shrink-0 h-fit">
                        <Leaf className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Image Upload & Processing</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Users can easily upload plant leaf images using drag-and-drop functionality or traditional file selection. The application immediately displays a preview of the uploaded image, allowing users to review their selection before proceeding with analysis.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-purple-100 rounded-full p-3 flex-shrink-0 h-fit">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">AI-Powered Disease Detection</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our simulated AI engine analyzes the leaf image with multiple analysis stages including pattern recognition, color distribution processing, and disease indicator scanning. The system provides confidence percentages to indicate detection reliability.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-orange-100 rounded-full p-3 flex-shrink-0 h-fit">
                        <Zap className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Treatment Recommendations</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Based on detection results, the application provides detailed, actionable treatment suggestions including organic and chemical remedies, preventative measures, and best practices for plant care. Each recommendation is specific to the detected condition.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-teal-100 rounded-full p-3 flex-shrink-0 h-fit">
                        <Users className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Interactive Chat Assistant</h3>
                        <p className="text-gray-600 leading-relaxed">
                          A real-time chat panel provides step-by-step feedback during analysis, showing status updates and progress indicators. This transparent process helps users understand what the AI is doing at each stage of detection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Zap className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">Technology Overview</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-lg font-bold text-blue-900 mb-3">AI Detection Engine</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Uses advanced pattern recognition algorithms to analyze leaf morphology, pigmentation, and texture patterns to identify potential diseases with high accuracy.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <h3 className="text-lg font-bold text-green-900 mb-3">Image Processing</h3>
                      <p className="text-green-800 text-sm leading-relaxed">
                        Sophisticated image preprocessing including color normalization, contrast enhancement, and feature extraction to ensure accurate disease identification.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-lg font-bold text-purple-900 mb-3">Database Management</h3>
                      <p className="text-purple-800 text-sm leading-relaxed">
                        Comprehensive disease knowledge base covering multiple plant species, disease types, symptoms, and recommended treatment protocols.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                      <h3 className="text-lg font-bold text-orange-900 mb-3">Real-time Analytics</h3>
                      <p className="text-orange-800 text-sm leading-relaxed">
                        Instant processing and result delivery with confidence metrics, allowing users to make informed decisions about plant care immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Users className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">Team Members</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                            {member.initials}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-green-50 leading-relaxed max-w-3xl">
                We are dedicated to empowering farmers and agricultural professionals with advanced AI technology to detect plant diseases early, minimize crop loss, and promote sustainable farming practices. By making sophisticated disease detection accessible and affordable, we're helping build a more resilient and productive agricultural future.
              </p>
            </section>
          </div>
        </main>

        <footer className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Leaf className="w-5 h-5" />
              <p className="text-lg font-semibold">AI-powered smart farming assistant</p>
            </div>
            <p className="text-green-50 text-sm">Empowering farmers with cutting-edge technology for healthier crops</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;

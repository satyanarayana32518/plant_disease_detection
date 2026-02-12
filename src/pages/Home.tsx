import { useState, useRef } from 'react';
import { Leaf, Brain, Activity } from 'lucide-react';
import ChatBot from '../components/ChatBot';
import ResultCard from '../components/ResultCard';
import ImageUpload from '../components/ImageUpload';

interface DetectionResult {
  disease: string;
  confidence: number;
  treatments: string[];
  status: 'healthy' | 'diseased';
}

const diseaseDatabase = [
  {
    disease: 'Healthy',
    confidence: 98,
    treatments: [
      'Continue regular watering and fertilization',
      'Maintain good air circulation around plants',
      'Monitor regularly for any changes'
    ],
    status: 'healthy' as const
  },
  {
    disease: 'Powdery Mildew',
    confidence: 94,
    treatments: [
      'Remove and destroy infected leaves',
      'Apply neem oil or sulfur-based fungicide',
      'Improve air circulation and reduce humidity',
      'Avoid overhead watering'
    ],
    status: 'diseased' as const
  },
  {
    disease: 'Leaf Rust',
    confidence: 91,
    treatments: [
      'Remove infected leaves immediately',
      'Apply copper-based fungicide',
      'Ensure proper spacing between plants',
      'Water at the base of plants, not on leaves'
    ],
    status: 'diseased' as const
  },
  {
    disease: 'Bacterial Spot',
    confidence: 89,
    treatments: [
      'Remove and dispose of infected plant material',
      'Apply copper-based bactericide',
      'Avoid working with plants when wet',
      'Rotate crops to prevent recurrence'
    ],
    status: 'diseased' as const
  },
  {
    disease: 'Early Blight',
    confidence: 93,
    treatments: [
      'Remove lower leaves that touch the ground',
      'Apply fungicide containing chlorothalonil',
      'Mulch around plants to prevent soil splash',
      'Practice crop rotation'
    ],
    status: 'diseased' as const
  },
  {
    disease: 'Septoria Leaf Spot',
    confidence: 87,
    treatments: [
      'Remove infected leaves from the bottom up',
      'Apply organic copper spray',
      'Stake plants for better air circulation',
      'Water in the morning to allow leaves to dry'
    ],
    status: 'diseased' as const
  }
];

function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [progress, setProgress] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; type: 'bot' | 'status' }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
      setResult(null);
      setProgress(0);

      // Generate an immediate assistant message giving a likely condition,
      // prevention advice, and recovery tips based on a random disease sample.
      const sample = diseaseDatabase[Math.floor(Math.random() * diseaseDatabase.length)];

      const getOverview = (disease: string) => {
        switch (disease) {
          case 'Powdery Mildew':
            return 'A fungal disease that appears as white powdery spots on leaves and stems, often in warm, dry conditions with poor air circulation.';
          case 'Leaf Rust':
            return 'Rust diseases produce orange or brown pustules on the undersides of leaves and can weaken plants by reducing photosynthesis.';
          case 'Bacterial Spot':
            return 'Bacterial spots cause dark, water-soaked lesions on leaves and fruit and spread more readily in wet conditions.';
          case 'Early Blight':
            return 'A fungal disease that causes concentric rings on leaves and fruit, commonly affecting tomatoes and related plants.';
          case 'Septoria Leaf Spot':
            return 'Small round spots with dark borders on leaves, typically starting on lower foliage and spreading upward in humid conditions.';
          case 'Healthy':
          default:
            return 'The leaf appears generally healthy. Continue preventive care to keep it that way.';
        }
      };

      const overview = getOverview(sample.disease);

      const prevention = sample.status === 'healthy'
        ? [
            'Maintain consistent watering and balanced fertilization',
            'Ensure good air circulation and avoid overhead watering',
            'Inspect plants regularly and remove debris from soil surface'
          ]
        : [
            'Remove and dispose of infected leaves to reduce inoculum',
            'Avoid overhead watering and water early in the day',
            'Improve spacing for better air circulation and reduce humidity'
          ];

      const recoveryTips = sample.treatments.slice(0, 3);

      const assistantText = `Possible condition: ${sample.disease} (${sample.confidence}% typical confidence)\n\nOverview: ${overview}\n\nHow to avoid this: ${prevention.join('; ')}.\n\nRecovery tips: ${recoveryTips.join('; ')}.`;

      setChatMessages([{ text: assistantText, type: 'bot' }]);
    };
    reader.readAsDataURL(file);
  };

  const simulateAnalysis = async () => {
    if (!uploadedImage || isAnalyzing) return;

    setIsAnalyzing(true);
    setResult(null);
    setChatMessages([]);
    setProgress(0);

    const messages = [
      { text: '🖼️ Image received successfully!', delay: 300 },
      { text: '🔍 Initializing AI detection model...', delay: 800 },
      { text: '🧠 Analyzing leaf patterns and features...', delay: 1200 },
      { text: '📊 Processing color distribution...', delay: 1000 },
      { text: '🔬 Scanning for disease indicators...', delay: 1100 },
      { text: '✅ Analysis complete!', delay: 900 }
    ];

    for (let i = 0; i < messages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, messages[i].delay));
      setChatMessages(prev => [...prev, { text: messages[i].text, type: i === messages.length - 1 ? 'status' : 'bot' }]);
      setProgress(((i + 1) / messages.length) * 100);
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    const randomResult = diseaseDatabase[Math.floor(Math.random() * diseaseDatabase.length)];
    setResult(randomResult);

    setChatMessages(prev => [...prev, {
      text: `💡 Detection Result: ${randomResult.disease} (${randomResult.confidence}% confidence)`,
      type: 'status'
    }]);

    setIsAnalyzing(false);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setResult(null);
    setChatMessages([]);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGMwNmIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptMCAxNmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTE2IDBjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0em0wLTE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative z-10">
        <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -ml-36 -mb-36 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="flex items-center justify-center gap-4 mb-6 animate-slide-in">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Leaf className="w-12 h-12 animate-bounce" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Plant Disease
                <br />
                <span className="bg-gradient-to-r from-green-100 to-teal-100 bg-clip-text text-transparent">AI Detection</span>
              </h1>
            </div>
            <p className="text-center text-green-50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Upload a plant leaf image and let our advanced AI instantly detect diseases with professional treatment recommendations powered by agricultural expertise
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <ImageUpload
                uploadedImage={uploadedImage}
                onImageSelect={handleImageSelect}
                onReset={handleReset}
                fileInputRef={fileInputRef}
              />

              {uploadedImage && (
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100 hover:shadow-3xl transition-all duration-300 animate-slide-in">
                  <button
                    onClick={simulateAnalysis}
                    disabled={isAnalyzing}
                    className={`w-full py-6 rounded-xl font-bold text-lg transition-all duration-300 transform relative group ${
                      isAnalyzing
                        ? 'bg-gradient-to-r from-green-400 to-emerald-400 cursor-not-allowed scale-95'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg hover:shadow-green-600/50'
                    } text-white shadow-lg flex items-center justify-center gap-3`}
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Analyzing... {Math.round(progress)}%</span>
                      </>
                    ) : (
                      <>
                        <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Detect Disease with AI</span>
                      </>
                    )}
                  </button>

                  {isAnalyzing && (
                    <div className="mt-6">
                      <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-4 overflow-hidden shadow-inner">
                        <div
                          className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 h-full transition-all duration-300 ease-out rounded-full shadow-lg"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                        Processing analysis: {Math.round(progress)}% complete
                      </p>
                    </div>
                  )}
                </div>
              )}

              {result && <ResultCard result={result} />}
            </div>

            <div className="lg:col-span-1">
              <ChatBot messages={chatMessages} isAnalyzing={isAnalyzing} />
            </div>
          </div>
        </main>

        <footer className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Activity className="w-5 h-5" />
              <p className="text-lg font-semibold">AI-powered smart farming assistant</p>
            </div>
            <p className="text-green-50 text-sm">Empowering farmers with cutting-edge technology for healthier crops</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

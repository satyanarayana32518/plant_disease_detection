import { CheckCircle, AlertCircle, TrendingUp, Leaf } from 'lucide-react';

interface DetectionResult {
  disease: string;
  confidence: number;
  treatments: string[];
  status: 'healthy' | 'diseased';
}

interface ResultCardProps {
  result: DetectionResult;
}

function ResultCard({ result }: ResultCardProps) {
  const isHealthy = result.status === 'healthy';

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 animate-slide-in hover:shadow-3xl transition-all duration-300">
      <div className={`${
        isHealthy
          ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500'
          : 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500'
      } p-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex items-center gap-3 text-white">
          {isHealthy ? (
            <CheckCircle className="w-6 h-6 animate-bounce" />
          ) : (
            <AlertCircle className="w-6 h-6 animate-pulse" />
          )}
          <h2 className="text-2xl font-bold">Detection Results</h2>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-full ${
                  isHealthy ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <Leaf className={`w-6 h-6 ${isHealthy ? 'text-green-600' : 'text-orange-600'}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{result.disease}</h3>
              </div>
              <p className={`text-sm font-semibold ml-11 ${
                isHealthy ? 'text-green-600' : 'text-orange-600'
              }`}>
                {isHealthy ? '✓ Plant is healthy!' : '⚠ Disease detected'}
              </p>
            </div>
            <div className="text-right bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2 justify-end">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span className="text-xs text-gray-700 font-bold uppercase tracking-wide">Confidence</span>
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${
                isHealthy
                  ? 'from-green-600 to-emerald-600'
                  : 'from-orange-600 to-red-600'
              } bg-clip-text text-transparent`}>
                {result.confidence}%
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`bg-gradient-to-r ${
              isHealthy
                ? 'from-green-200 to-emerald-200'
                : 'from-orange-200 to-red-200'
            } rounded-full h-4 overflow-hidden shadow-lg`}>
              <div
                className={`h-full ${
                  isHealthy
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : 'bg-gradient-to-r from-orange-500 to-red-500'
                } rounded-full shadow-lg transition-all duration-1000 ease-out`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 font-semibold mt-2 text-center">
              {Math.round(result.confidence)}% match accuracy
            </p>
          </div>
        </div>

        <div className={`${
          isHealthy
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
            : 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200'
        } border-l-4 rounded-xl p-6 mb-8 shadow-md`}>
          <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
            isHealthy ? 'text-green-800' : 'text-orange-800'
          }`}>
            {isHealthy ? '✅ Recommended Care' : '⚠️ Treatment Required'}
          </h4>
          <ul className="space-y-3">
            {result.treatments.map((treatment, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                  isHealthy ? 'bg-green-500' : 'bg-orange-500'
                }`}>
                  {index + 1}
                </span>
                <span className="pt-0.5">{treatment}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {isHealthy ? '0' : '3-7'}
            </div>
            <div className="text-xs text-blue-800 font-bold uppercase tracking-wide">
              {isHealthy ? 'No Action Needed' : 'Days to Treat'}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {isHealthy ? 'Low' : 'Medium'}
            </div>
            <div className="text-xs text-purple-800 font-bold uppercase tracking-wide">
              Severity Level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;

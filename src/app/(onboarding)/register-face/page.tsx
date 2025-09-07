import Link from "next/link";

export default function RegisterFace() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-6">KHEL SAARTHI • SAI</h1>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
              <div className="w-8 h-0.5 bg-blue-600 mx-2"></div>
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
              <div className="w-8 h-0.5 bg-blue-600 mx-2"></div>
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800">Step 3: Face Scan</h2>
        </div>

        {/* Face Scan Visual */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="bg-gray-100 rounded-xl p-8 mb-6 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute inset-0 border-4 border-blue-600 rounded-full"></div>
              <div className="absolute -inset-2 border-2 border-blue-300 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">Position your face within the circle</p>
          </div>
          
          <Link 
            href="/register-complete" 
            className="block w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors"
          >
            Start Face Scan
          </Link>
        </div>

        {/* Security Note */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Your biometric data is securely encrypted</p>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Link href="/register-id" className="text-blue-600 text-sm">← Back</Link>
        </div>
      </div>
    </div>
  );
}

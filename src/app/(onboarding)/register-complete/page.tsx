import Link from "next/link";

export default function RegisterComplete() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-6">KHEL SAARTHI • SAI</h1>
          
          {/* Step Indicator - All Complete */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
              <div className="w-8 h-0.5 bg-green-500 mx-2"></div>
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
              <div className="w-8 h-0.5 bg-green-500 mx-2"></div>
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800">Verification Complete!</h2>
        </div>

        {/* Success Visual */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Welcome to KHEL SAARTHI!</h3>
          <p className="text-gray-600 text-sm mb-6">Your face and ID verification has been successful. You can now access all features of the app.</p>
          
          <Link 
            href="/dashboard" 
            className="block w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Security Badge */}
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full">
            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-green-700 text-xs font-medium">Verified & Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

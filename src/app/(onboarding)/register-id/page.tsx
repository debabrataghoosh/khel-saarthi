import Link from "next/link";

export default function RegisterID() {
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
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800">Step 2: Verify identity</h2>
        </div>

        {/* ID Card Visual */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="bg-gray-100 rounded-xl p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 bg-orange-400 rounded w-2/3"></div>
              <div className="h-2 bg-green-500 rounded w-3/4"></div>
            </div>
          </div>
          
          <Link 
            href="/register-face" 
            className="block w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors"
          >
            Scan ID card
          </Link>
        </div>

        {/* Security Note */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Data encrypted, stored only with SAI</p>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Link href="/register-basic" className="text-blue-600 text-sm">← Back</Link>
        </div>
      </div>
    </div>
  );
}

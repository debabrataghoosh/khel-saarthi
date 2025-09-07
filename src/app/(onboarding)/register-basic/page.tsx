import Link from "next/link";

export default function RegisterBasic() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-6">KHEL SAARTHI • SAI</h1>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800">Step 1: Basic Information</h2>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              <input 
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
              <input 
                type="tel"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Sport</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Primary Sport</option>
                <option>Cricket</option>
                <option>Football</option>
                <option>Hockey</option>
                <option>Basketball</option>
                <option>Athletics</option>
                <option>Other</option>
              </select>
            </div>
            
            <Link 
              href="/register-id" 
              className="block w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors mt-6"
            >
              Continue
            </Link>
          </form>
          
          <div className="text-center mt-4">
            <Link href="/welcome" className="text-blue-600 text-sm">Back to Welcome</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

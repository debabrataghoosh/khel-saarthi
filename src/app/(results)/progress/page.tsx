import Link from "next/link";

export default function ProgressHistory() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="text-center flex-1">
            <h1 className="text-lg font-semibold text-white">KHEL SAARTHI</h1>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mt-4">My Progress</h2>
      </div>

      <div className="px-6 py-4 mb-20">
        {/* Overall Performance Trend Chart */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Overall Performance Trend</h3>
          <div className="relative h-48">
            {/* Chart Area */}
            <div className="absolute inset-0 flex items-end justify-between">
              {/* Data Points */}
              <div className="flex items-end justify-between w-full h-full relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                  <div className="border-t border-gray-300"></div>
                  <div className="border-t border-gray-300"></div>
                  <div className="border-t border-gray-300"></div>
                  <div className="border-t border-gray-300"></div>
                  <div className="border-t border-gray-300"></div>
                </div>
                
                {/* Chart Line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  {/* Area under curve */}
                  <path
                    d="M 0 120 L 50 110 L 100 85 L 150 95 L 200 70 L 250 75 L 300 55 L 300 160 L 0 160 Z"
                    fill="url(#gradient)"
                  />
                  {/* Main line */}
                  <path
                    d="M 0 120 L 50 110 L 100 85 L 150 95 L 200 70 L 250 75 L 300 55"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Data points */}
                  <circle cx="0" cy="120" r="4" fill="#3B82F6"/>
                  <circle cx="50" cy="110" r="4" fill="#3B82F6"/>
                  <circle cx="100" cy="85" r="4" fill="#3B82F6"/>
                  <circle cx="150" cy="95" r="4" fill="#3B82F6"/>
                  <circle cx="200" cy="70" r="4" fill="#3B82F6"/>
                  <circle cx="250" cy="75" r="4" fill="#3B82F6"/>
                  <circle cx="300" cy="55" r="4" fill="#3B82F6"/>
                </svg>
              </div>
            </div>
            
            {/* X-axis labels */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-sm text-gray-600">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Recent Test Statistics */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Test Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Agility Drill */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">June 20, 2024</span>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Agility Drill</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>

            {/* Score 92% */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">June 20, 2024</span>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-2xl">92%</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>

            {/* Endurance Run */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Test Name</span>
              </div>
              <h4 className="text-white font-medium mb-2">Endurance Run</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full ml-auto"></div>
            </div>

            {/* Score 88% */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">June 20, 2024</span>
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-2xl">88%</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>

            {/* Score 92% bottom left */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">June 20, 2024</span>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-2xl">92%</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full ml-auto"></div>
            </div>

            {/* Score 88% bottom right */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">June 20, 2024</span>
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-2xl">88%</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
        <div className="grid grid-cols-5 py-2">
          <Link href="/dashboard" className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/assessments" className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs">Tests</span>
          </Link>
          <div className="flex flex-col items-center py-2 text-white relative">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center absolute -top-6 border-4 border-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xs mt-6">Progress</span>
          </div>
          <Link href="/assessments" className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs">Tests</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

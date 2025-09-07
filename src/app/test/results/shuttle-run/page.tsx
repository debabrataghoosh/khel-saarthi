import Link from "next/link";

export default function ShuttleRunResults() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-800">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Test Completed!</h1>
          <p className="text-gray-400">20m Shuttle Run Analysis</p>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Main Result */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-white mb-2">Final Score</h2>
          <div className="text-4xl font-bold text-teal-400 mb-2">Level 8.4</div>
          <p className="text-gray-400">You completed 84 shuttles</p>
        </div>

        {/* Key Metrics */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white font-bold">8:34</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Max Speed</p>
                  <p className="text-white font-bold">12.8 km/h</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Distance</p>
                  <p className="text-white font-bold">1,680m</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Avg HR</p>
                  <p className="text-white font-bold">165 bpm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Comparison</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Personal Best</span>
                <span className="text-yellow-400 font-bold">Level 7.8</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Today&apos;s Result</span>
                <span className="text-teal-400 font-bold">Level 8.4</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-teal-400 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Age Group Average</span>
                <span className="text-gray-400 font-bold">Level 6.2</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-900 border border-green-500 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-green-400 font-semibold">New Personal Best!</span>
            </div>
            <p className="text-green-200 text-sm mt-1">You improved by 0.6 levels from your previous best</p>
          </div>
        </div>

        {/* Fitness Rating */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Fitness Rating</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">Excellent</div>
            <p className="text-gray-400 mb-4">Top 15% for your age group</p>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/progress" className="block w-full bg-teal-500 text-white py-4 rounded-xl text-center font-semibold">
            View Detailed Analysis
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/assessments" className="bg-gray-700 text-gray-300 py-3 rounded-xl text-center font-medium">
              Take Another Test
            </Link>
            <Link href="/dashboard" className="bg-gray-700 text-gray-300 py-3 rounded-xl text-center font-medium">
              Back to Home
            </Link>
          </div>
          <Link href="/grievance" className="block w-full bg-red-600 text-white py-3 rounded-xl text-center font-medium">
            🚨 File Appeal/Grievance
          </Link>
        </div>
      </div>
    </div>
  );
}

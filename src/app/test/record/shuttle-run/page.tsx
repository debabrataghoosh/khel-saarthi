import Link from "next/link";

export default function ShuttleRunRecord() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/test/instructions/shuttle-run" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <p className="text-gray-400 text-sm">Recording Test</p>
              <h1 className="text-lg font-bold">20m Shuttle Run</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-sm font-medium">REC</span>
          </div>
        </div>
      </div>

      {/* Camera View Area */}
      <div className="relative bg-gray-900 mx-6 mt-6 rounded-xl overflow-hidden h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500">Camera View</p>
            <p className="text-gray-600 text-sm">Position yourself in frame</p>
          </div>
        </div>
        
        {/* Recording Overlay */}
        <div className="absolute top-4 left-4 bg-red-500 px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">● RECORDING</span>
        </div>
        
        {/* Timer Overlay */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-lg">
          <span className="text-white text-lg font-mono">02:35</span>
        </div>
        
        {/* Grid Lines for Positioning */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-0">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-gray-500"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification Code Display */}
      <div className="mx-6 mt-6">
        <div className="bg-teal-900 border border-teal-500 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <div className="flex-1">
              <p className="text-teal-400 font-medium">Say this verification code clearly:</p>
              <p className="text-white text-2xl font-bold tracking-wider">KX3-59-ZB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Instructions */}
      <div className="mx-6 mt-4">
        <div className="bg-gray-900 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Live Instructions
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">Position yourself at the starting cone</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">Wait for the first beep to start running</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <p className="text-gray-400 text-sm">Touch each cone before turning around</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Level Display */}
      <div className="mx-6 mt-4">
        <div className="bg-gray-900 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Current Level</p>
              <p className="text-white text-xl font-bold">Level 3.2</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Next Beep In</p>
              <p className="text-teal-400 text-xl font-bold">2.1s</p>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="fixed bottom-8 left-6 right-6">
        <div className="flex justify-center space-x-6">
          {/* Stop Recording */}
          <button title="Stop recording" className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Pause/Resume */}
          <button title="Pause recording" className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          {/* Complete Test */}
          <Link href="/test/results/shuttle-run" className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Link>
        </div>
        
        <div className="flex justify-center space-x-6 mt-2">
          <span className="text-red-400 text-xs">Stop</span>
          <span className="text-gray-400 text-xs">Pause</span>
          <span className="text-teal-400 text-xs">Complete</span>
        </div>
      </div>
    </div>
  );
}

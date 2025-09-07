import Link from "next/link";

export default function ShuttleRunInstructions() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Link href="/assessments" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <p className="text-gray-400 text-sm">Test Instructions</p>
            <h1 className="text-xl font-bold">20m Shuttle Run</h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Test Overview */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">20m Shuttle Run Test</h2>
              <p className="text-gray-400">Measures cardiovascular endurance and aerobic capacity</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-teal-400">20m</p>
              <p className="text-sm text-gray-400">Distance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-400">~15min</p>
              <p className="text-sm text-gray-400">Duration</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">High</p>
              <p className="text-sm text-gray-400">Intensity</p>
            </div>
          </div>
        </div>

        {/* Setup Required */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Equipment Setup
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <p className="text-gray-300">Place 2 cones exactly 20 meters apart on a flat surface</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <p className="text-gray-300">Ensure you have a clear, straight path between cones</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <p className="text-gray-300">Have audio device ready for beep signals</p>
            </div>
          </div>
        </div>

        {/* How to Perform */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to Perform
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <p className="text-white font-medium">Starting Position</p>
                <p className="text-gray-400 text-sm">Stand behind one cone, facing the other cone 20m away</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <p className="text-white font-medium">Follow the Beeps</p>
                <p className="text-gray-400 text-sm">Run to the opposite cone when you hear the beep. You must reach the cone before the next beep.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="text-white font-medium">Touch and Turn</p>
                <p className="text-gray-400 text-sm">Touch the cone with your foot and immediately turn around to run back</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <p className="text-white font-medium">Increasing Speed</p>
                <p className="text-gray-400 text-sm">The beeps will get progressively faster. Continue until you can no longer keep up.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-orange-900 border border-orange-500 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.96-.833-2.73 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Important Notes
          </h3>
          <div className="space-y-2">
            <p className="text-orange-200 text-sm">• The test ends when you fail to reach the cone before the beep twice</p>
            <p className="text-orange-200 text-sm">• Maintain a steady pace and don&apos;t start too fast</p>
            <p className="text-orange-200 text-sm">• Ensure proper warm-up before starting the test</p>
            <p className="text-orange-200 text-sm">• Say the verification code clearly when prompted during recording</p>
          </div>
        </div>

        {/* Start Test Button */}
        <div className="flex space-x-4">
          <Link href="/assessments" className="flex-1 bg-gray-700 text-gray-300 py-4 rounded-xl text-center font-semibold">
            Cancel
          </Link>
          <Link href="/test/record/shuttle-run" className="flex-1 bg-teal-500 text-white py-4 rounded-xl text-center font-semibold">
            Start Test
          </Link>
        </div>
      </div>
    </div>
  );
}

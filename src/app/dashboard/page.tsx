import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-white font-semibold text-lg">R</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Good Morning</p>
              <h1 className="text-2xl font-bold">Rahul Kumar</h1>
            </div>
          </div>
          <div className="relative w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5v5zM4 4v16h16V4H4z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        {/* Profile Card */}
        <div className="bg-gray-900 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-white font-semibold">R</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Hi, Rahul</h2>
                <p className="text-sm text-gray-400">U16 • Fast • SAI ID: UE-8291</p>
              </div>
            </div>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Performance Score */}
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            {/* Circular Progress */}
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(70 / 100) * 251.2} 251.2`}
                  className="text-teal-400"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-400">70</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex-1 ml-6">
              <div className="mb-2">
                <p className="text-sm text-gray-400">Percentile (cohort)</p>
                <p className="text-2xl font-bold text-white">78</p>
                <p className="text-sm text-gray-400">Rank</p>
              </div>
              <div className="mb-2">
                <p className="text-lg font-bold text-white">312 / 400</p>
                <p className="text-sm text-gray-400">invite status</p>
              </div>
              <div className="text-teal-400 font-semibold">Regional — Confirmed</div>
            </div>
          </div>
        </div>

        {/* My Performance */}
        <div className="bg-gray-900 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">My Performance</h3>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-white">Best: Regional Match —</p>
              <p className="text-sm text-gray-400">12 Oct, 10:00 AM</p>
            </div>
            <button className="border border-teal-400 text-teal-400 px-4 py-2 rounded-lg text-sm font-medium">
              View Details
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gray-900 rounded-xl p-4 mb-20">
          <h3 className="text-lg font-semibold text-white mb-4">Upcoming Events</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-300">Best 100m Time</p>
              <p className="text-lg font-bold text-white">11.62 s</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <p className="text-sm font-medium text-gray-300">Vertical Jump</p>
              <p className="text-lg font-bold text-white">47.2 cm</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <p className="text-sm font-medium text-gray-300">Push-ups (1-min)</p>
              <p className="text-lg font-bold text-white">24 Reps</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Link href="/assessments" className="bg-teal-500 text-white py-3 px-4 rounded-lg text-center font-medium">
              Upload Sport Drill
            </Link>
            <Link href="/grievance" className="border border-orange-400 text-orange-400 py-3 px-4 rounded-lg text-center font-medium">
              Appeal / Retest
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
        <div className="grid grid-cols-5 py-2">
          <Link href="/dashboard" className="flex flex-col items-center py-2 text-teal-400">
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
          <Link href="/progress" className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="text-xs">Progress</span>
          </Link>
          <Link href="/merit" className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs">Leaderboard</span>
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

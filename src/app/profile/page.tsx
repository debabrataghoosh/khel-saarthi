import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-400 text-sm">Good Morning</p>
            <h1 className="text-2xl font-bold">Rahul Kumar</h1>
          </div>
          <Link href="/settings" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl overflow-hidden flex items-center justify-center">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-white text-black px-3 py-1 rounded-full text-xs font-medium mb-2">
                Advanced
              </div>
              <h2 className="text-xl font-bold mb-1">21 trainings</h2>
              <p className="text-yellow-400 text-sm">8 trainings to PRO level</p>
            </div>
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 100 100">
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
                  className="text-white"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Performance</h2>
          
          {/* Performance Cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 text-sm">Weight</span>
              </div>
              <p className="text-2xl font-bold">63</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400 text-sm">Total Duration</span>
              </div>
              <p className="text-2xl font-bold">3h 46m</p>
            </div>
          </div>

          {/* Kcal Burn - Large Card */}
          <div className="bg-yellow-400 rounded-xl p-4 mb-4">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-black text-sm font-medium">Kcal Burn</span>
            </div>
            <p className="text-4xl font-bold text-black">5423</p>
          </div>

          {/* Chart Section */}
          <div className="bg-gray-900 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm">Total Average</p>
                <p className="text-2xl font-bold text-orange-500">556 <span className="text-base font-normal">Kcal</span></p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                  Kcal ▼
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                  Weekly ▼
                </button>
              </div>
            </div>
            
            {/* Chart */}
            <div className="relative h-32">
              <div className="flex items-end justify-between h-full">
                <div className="text-xs text-gray-400 space-y-2">
                  <div>1000</div>
                  <div>800</div>
                  <div>600</div>
                  <div>400</div>
                  <div>200</div>
                  <div>0</div>
                </div>
                <div className="flex-1 flex items-end justify-between mx-4 h-full">
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '40%'}}></div>
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '60%'}}></div>
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '70%'}}></div>
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '55%'}}></div>
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '45%'}}></div>
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '35%'}}></div>
                  <div className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: '50%'}}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2 px-12">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details - Collapsible */}
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold mb-3">Personal Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">SAI ID:</span>
              <span>UE-8291</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Age Category:</span>
              <span>U16</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Primary Sport:</span>
              <span>Athletics (Sprints)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Contact:</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        {/* Scores - Compact */}
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold mb-3">Performance Scores</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-green-400">82</p>
              <p className="text-xs text-gray-400">Fitness</p>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-blue-400">75</p>
              <p className="text-xs text-gray-400">Agility</p>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-purple-400">88</p>
              <p className="text-xs text-gray-400">Sport-Specific</p>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-orange-400">72</p>
              <p className="text-xs text-gray-400">Mental</p>
            </div>
          </div>
        </div>

        {/* Settings Quick Access */}
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold mb-3">Quick Settings</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-sm">Notifications</span>
              <div className="w-10 h-5 bg-green-500 rounded-full p-1">
                <div className="w-3 h-3 bg-white rounded-full transform translate-x-5"></div>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-sm">Change Password</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-sm">Help & Support</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* About SAI - Compact */}
        <div className="bg-gray-900 rounded-xl p-4 mb-20">
          <h3 className="text-lg font-semibold mb-3">About KHEL SAARTHI</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            SAI&apos;s digital platform for sports talent identification using advanced assessment techniques. 
            Making India a global sporting superpower.
          </p>
          <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
            <span>v1.0.0</span>
            <div className="space-x-3">
              <button className="text-yellow-400">Privacy</button>
              <button className="text-yellow-400">Terms</button>
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
          <Link href="/profile" className="flex flex-col items-center py-2 text-teal-400">
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

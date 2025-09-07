import Link from "next/link";

export default function MeritList() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 px-6 py-4 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold text-white">KHEL SAARTHI</div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-teal-400 font-semibold">SAI</span>
            </div>
          </div>
          <div className="text-lg font-bold text-white">SAI</div>
        </div>
      </div>

      <div className="px-6 py-4 mb-20">
        <h1 className="text-2xl font-bold mb-6">Merit & Selection Lists</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-gray-900 rounded-xl p-4 mb-6">
          {/* Search Box */}
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search athletes..." 
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-teal-500 focus:outline-none"
            />
          </div>
          
          {/* Filter Options */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Sport</label>
              <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-teal-500 focus:outline-none">
                <option value="">All Sports</option>
                <option value="athletics">Athletics</option>
                <option value="swimming">Swimming</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="cricket">Cricket</option>
                <option value="badminton">Badminton</option>
                <option value="tennis">Tennis</option>
                <option value="hockey">Hockey</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Age Group</label>
              <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-teal-500 focus:outline-none">
                <option value="">All Age Groups</option>
                <option value="u12">Under 12 (U12)</option>
                <option value="u14">Under 14 (U14)</option>
                <option value="u16">Under 16 (U16)</option>
                <option value="u18">Under 18 (U18)</option>
                <option value="u21">Under 21 (U21)</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by State</label>
              <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-teal-500 focus:outline-none">
                <option value="">All States</option>
                <option value="andhra-pradesh">Andhra Pradesh</option>
                <option value="arunachal-pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal-pradesh">Himachal Pradesh</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya-pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west-bengal">West Bengal</option>
                <option value="delhi">Delhi</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="puducherry">Puducherry</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by District</label>
              <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-teal-500 focus:outline-none">
                <option value="">All Districts</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="nashik">Nashik</option>
                <option value="nagpur">Nagpur</option>
                <option value="bangalore">Bangalore</option>
                <option value="mysore">Mysore</option>
                <option value="chennai">Chennai</option>
                <option value="coimbatore">Coimbatore</option>
                <option value="kochi">Kochi</option>
                <option value="thiruvananthapuram">Thiruvananthapuram</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="surat">Surat</option>
                <option value="jaipur">Jaipur</option>
                <option value="jodhpur">Jodhpur</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="faridabad">Faridabad</option>
                <option value="lucknow">Lucknow</option>
                <option value="kanpur">Kanpur</option>
                <option value="patna">Patna</option>
                <option value="kolkata">Kolkata</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="guwahati">Guwahati</option>
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
              </select>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex space-x-2 pt-2">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
                Apply Filters
              </button>
              <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                Clear All
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Leaderboard</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-white">Arjun Sharma</p>
                  <p className="text-sm text-gray-400">U16 • Athletics</p>
                </div>
              </div>
              <div className="text-yellow-400 font-bold">95</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-white">Priya Patel</p>
                  <p className="text-sm text-gray-400">U16 • Swimming</p>
                </div>
              </div>
              <div className="text-gray-300 font-bold">92</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-white">Rohit Singh</p>
                  <p className="text-sm text-gray-400">U16 • Football</p>
                </div>
              </div>
              <div className="text-orange-400 font-bold">89</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-teal-900 rounded-lg border border-teal-500">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">15</span>
                </div>
                <div>
                  <p className="font-medium text-white">Rahul Kumar (You)</p>
                  <p className="text-sm text-teal-300">U16 • Athletics</p>
                </div>
              </div>
              <div className="text-teal-400 font-bold">70</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Selection Status</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-900 border border-green-500 rounded-lg">
              <p className="text-green-400 font-medium">District Level - Qualified</p>
              <p className="text-sm text-gray-300 mt-1">You have qualified for district selection</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-gray-400 font-medium">State Level - Pending</p>
              <p className="text-sm text-gray-500 mt-1">Results will be announced soon</p>
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
          <Link href="/merit" className="flex flex-col items-center py-2 text-teal-400">
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

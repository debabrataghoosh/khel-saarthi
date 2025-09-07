import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-8">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to KHEL SAARTHI</h1>
          <p className="text-gray-600">• SAI •</p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/register-basic" 
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
          <Link 
            href="/dashboard" 
            className="block w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-xl font-semibold text-center hover:bg-blue-50 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

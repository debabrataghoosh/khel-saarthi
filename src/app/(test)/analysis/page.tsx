import Link from "next/link";

export default function PostTestAnalysis() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <h2 className="text-2xl font-bold mb-4">Post-Test Analysis</h2>
      <div className="mb-4">Key metrics, performance vs. personal best, etc.</div>
      <Link href="/dashboard" className="bg-blue-600 text-white py-2 px-6 rounded font-semibold">Back to Dashboard</Link>
    </div>
  );
}

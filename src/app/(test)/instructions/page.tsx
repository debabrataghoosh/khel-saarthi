import Link from "next/link";

export default function TestInstructions() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <h2 className="text-2xl font-bold mb-4">Test Instructions</h2>
      <div className="mb-4">What the test is, how to perform, setup required, etc.</div>
      <Link href="/live" className="bg-blue-600 text-white py-2 px-6 rounded font-semibold">Start Test</Link>
    </div>
  );
}

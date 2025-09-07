import Link from "next/link";

export default function LiveTest() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <h2 className="text-2xl font-bold mb-4">Live Test Capture</h2>
      <div className="mb-4">Camera interface, real-time instructions, timer, and record button.</div>
      <Link href="/analysis" className="bg-red-600 text-white py-2 px-6 rounded font-semibold">Record</Link>
    </div>
  );
}

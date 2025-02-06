import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
      <p className="text-lg mb-6">Login with your working Role.</p>
      <div className="flex gap-4">
        {/* <Link href="/dashboard">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go to Dashboard</button>
        </Link> */}
        <Link href="/login">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">Login</button>
        </Link>
      </div>
    </div>
  );
}

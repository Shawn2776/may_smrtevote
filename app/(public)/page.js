import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full justify-center items-center flex">
      <div className="text-2xl font-bold px-2 py-1 bg-blue-500 shadow-md shadow-white rounded-md">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}

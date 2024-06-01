import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen border">
      <div className="px-2 py-1 text-xl font-bold bg-blue-500 rounded-md shadow-md shadow-white">
        <Link href="/dashboard" className="text-bgSoft">
          Dashboard
        </Link>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-24">
      <div className="text-5xl">Hola Mundo</div>
      <Link href="/about">About</Link>
    </main>
  );
}

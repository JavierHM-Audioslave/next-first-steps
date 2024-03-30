import Navbar from "@/components/navbar/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-24">
        <h1>Hola Mundo</h1>
        {children}
      </div>
    </>
  );
}

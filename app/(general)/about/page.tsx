import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Acerca de",
  keywords: ["información"],
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <span className="text-7xl">About Page</span>
    </div>
  );
};

export default AboutPage;

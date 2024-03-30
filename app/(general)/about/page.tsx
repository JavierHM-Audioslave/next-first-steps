import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Acerca de",
  keywords: ["información"],
};

const AboutPage = () => {
  return <span className="text-7xl">About Page</span>;
};

export default AboutPage;

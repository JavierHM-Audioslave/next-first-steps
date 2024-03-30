import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Precios de mi servicio",
  keywords: ["pricing", "cost"],
};

const PricingPage = () => {
  return <span className="text-7xl">Pricing Page</span>;
};

export default PricingPage;

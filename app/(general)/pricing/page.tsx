import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Precios de mi servicio",
  keywords: ["pricing", "cost"],
};

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <span className="text-7xl">Pricing Page</span>
    </div>
  );
};

export default PricingPage;

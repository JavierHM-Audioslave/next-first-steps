import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contacto de la empresa",
  keywords: ["contact", "Javier", "contact"],
};

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <span className="text-7xl">Contact Page</span>
    </div>
  );
};

export default ContactPage;

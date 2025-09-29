import React from "react";
import Header from "./Header";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";

const ContactUsPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;

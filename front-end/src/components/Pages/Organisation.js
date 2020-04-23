import React from "react";
import { useTranslation } from "react-i18next";

// COMPONENTS
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function Organisation() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

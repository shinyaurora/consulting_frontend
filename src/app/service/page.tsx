import ServiceSectionOne from "@/components/Service/ServiceSectionOne";
import ServiceSectionTwo from "@/components/Service/ServiceSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <ServiceSectionOne />
      <ServiceSectionTwo />
    </>
  );
};

export default AboutPage;

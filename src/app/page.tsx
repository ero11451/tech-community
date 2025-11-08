import Blog from '@/components/home/Blog';
import ContactUs from '@/components/home/ContactUs';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
// import Integration from '@/components/home/Integration';
import CTAV1 from '@/components/shared/cta/CTAV1';
import Footer from '@/components/shared/footer/Footer';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'nivolia ',
};

const Homepage01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <section  id='event'>
          <Blog />
        </section>
        <section id='community'>
        <Integration />
        </section>
        <Faq />
        <section id='contact-us'>
        <ContactUs />
        </section>
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-white"
          ctaBtnText="Get started"
        />
      </main>
      <Footer />
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;

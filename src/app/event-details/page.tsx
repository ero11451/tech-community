import Contents from '@/components/our-serices-details/Contents';
import CTAV1 from '@/components/shared/cta/CTAV1';
import Footer from '@/components/shared/footer/Footer';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services Details - NextSaaS',
};

const EventDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7 pt-12">
        {/* <PageHero title="Our Services Details" heading="Services Details" link="#" /> */}
        <Contents slug={slug} />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <a
        href="http://"
        className="bg-background-8 fixed left-1/2 bottom-5 z-[9999] flex -translate-x-1/2 cursor-pointer items-center justify-center 
  rounded-2xl px-6 py-3 text-white font-medium transition duration-200 hover:opacity-80 dark:bg-white dark:text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy your ticket
      </a>

      <Footer />
    </Fragment>
  );
};

export default EventDetails;

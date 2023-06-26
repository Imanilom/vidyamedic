import type { Metadata } from 'next';

import Hero2 from '~/components/widgets/Hero2';

import {  hero4Data } from '~/shared/data';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <Hero2 data={hero4Data} />
    </>
  );
};

export default Page;

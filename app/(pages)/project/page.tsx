import type { Metadata } from 'next';

import Hero2 from '~/components/widgets/Hero';

import {  hero3Data } from '~/shared/data';

export const metadata: Metadata = {
  title: `Our Project`,
};

const Page = () => {
  return (
    <>
      <Hero2 data={hero3Data} />
    </>
  );
};

export default Page;

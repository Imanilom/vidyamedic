import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features3 from '~/components/widgets/Features3';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import FAQs from '~/components/widgets/FAQs';
import FAQs4 from '~/components/widgets/FAQs4';
import {

  content2Data,
  contentData,
  faqsData2,
  featuresData,
  heroData,
  hero2Data,
  faqs4Data
} from '~/shared/data';
import Contact from '~/components/widgets/Contact';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      <Features3 {...featuresData} />
      <Content {...contentData} />
      <Content {...content2Data} />
      <FAQs {...faqsData2} />
      <Steps />
      <Hero data={hero2Data} />
      <FAQs4 {...faqs4Data} />
      <Contact />
    </>
  );
}

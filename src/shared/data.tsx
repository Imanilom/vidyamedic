import {
  IconAnalyze,
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBuildingHospital,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHeartPlus,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconPhoneCall,
  IconQuestionMark,
  IconReportSearch,
  IconRocket,
  IconRss,
  IconShare,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import traditional from '~/assets/images/traditional.jpg';
import modern from '~/assets/images/modern.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import hero3Img from '~/assets/images/hero3.jpg';
import hero4Img from '~/assets/images/hero4.jpg';
import gasImg from '~/assets/images/gas.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import { IconPackage } from '@tabler/icons-react';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 13 using the new App Router »',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Project',
          href: '/project',
        },
        {
          label: 'About',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    // {
    //   label: 'Blog',
    //   href: '/blog',
    // },
    // {
    //   label: 'Contact',
    //   href: '/contact',
    // },
  ],
  actions: [
    {
      text: 'Login',
      href: '/',
      targetBlank: true,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Smart Future eHealth <span className="hidden md:inline">for who?</span>
    </>
  ),
  // subtitle: (
  //   <>
  //     <span className="hidden md:inline">
  //       <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
  //         TailNext
  //       </span>{' '}
  //       is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
  //     </span>{' '}
  //     It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
  //     optimization.
  //   </>
  // ),

  image: {
    src: heroImg,
    alt: 'Vidyamedic',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'How We Build',
  subtitle:
    `We build a smart framework on cyber physics that consist of 4 layer. Smart HealthCare VidyaMedic is an intelligent healthcare infrastructure that uses sensors to understand information, transmit information via the internet of things (IoT) in layer 1, and process information formation using supercomputers and cloud computing   In smart healtcare, patients and doctors can coordinate social systems and integrate them to realize complete healing or health by intelligently adjusting individual needs. Smart Healthcare will connect people, materials and institutions involved in healthcare, and then actively manage and respond to ecosystem needs in a smart way at the 2nd layer Smart Healthcare can promote interaction between all parties in the healthcare sector, ensure that users get the services they need, manage their medication needs according to doctor's advice, and even provide physical activity recommendations to help parties make informed decisions, and facilitate scalable resource allocation at the third layer.`,
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Hero3 data
export const hero3Data: HeroProps = {
  title: 'Activity Tracking',
  subtitle:
    `Are you looking for a way to improve your health and well-being? Do you want to track your daily activities and get feedback on how to achieve your goals? If so, you might be interested in joining our project “Activity Tracking”.
    Activity Tracking is a project that aims to develop and test a smart wearable sensor system that can monitor your physical activity, sleep quality, stress level, and other health indicators. By using this system, you can get personalized insights and recommendations on how to improve your lifestyle and prevent or manage chronic diseases.
    As a participant of this project, you will receive a free rent smart watch or band that will collect and transmit your health data to our secure cloud platform. You will also have access to a mobile app or web dashboard that will show you your progress and provide you with tips and challenges. You will also be able to share your data and experiences with other participants and researchers, creating a supportive and engaging community.
    By joining this project, you will not only benefit from the latest technology and scientific knowledge, but also contribute to the advancement of health research and innovation. You will help us understand how IoT-assisted wearable sensor systems can improve health outcomes and quality of life for people around the world.
    If you are interested in joining this project, please fill out this online form or contact us at [email protected] We are looking for people who are 18 years or older, have a smartphone or computer with internet access, and are willing to wear the sensor device and use the app or dashboard for at least 3 months.
    Don’t miss this opportunity to be part of a cutting-edge project that can make a difference in your health and well-being. Join Activity Tracking today and start your journey towards a healthier and happier life!
    Futher information please email: vidya@pptik.itb.ac.id`,
  image: {
    src: hero3Img,
    alt: 'Hero TailNext',
  },
};

// Hero4 data
export const hero4Data: HeroProps = {
  title: 'PPTIK ITB',
  subtitle:
    `PPTIK ITB
    VISION :Every Indonesian citizen must be able to take advantage of ICT for the advancement of his life. Every citizen can participate in the knowledge society and the knowledge economy,
    either benefiting from it or participating in building it. In 2016 every Indonesian citizen should be able to get rations for free.MISSION:Building a world-class reputation for research and researchers. 
    This requires topic alignment, researcher competence, facility feasibility, high activity and the rise of global partnerships in the field of ICT research.Encouraging the development of commercial, 
    entrepreneurship and industrial products in the ICT field. This is also indicated by the significant contribution of the ICT sector to ITB revenue.`,
  image: {
    src: hero4Img,
    alt: 'Hero TailNext',
  },
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Pros and Cons',
    subtitle:
      'Traditional health and smart health are two different models of health care delivery that have their own pros and cons. Some of them are:',
  },
  items: [
    {
      title: 'Traditional',
      description: `Traditional health allows patients to choose their own providers and specialists without referrals or restrictions, which can increase their satisfaction and autonomy. However, traditional health also involves higher out-of-pocket costs, deductibles, and premiums for patients, as well as more fragmentation and inefficiency in the health care system.`,
    },
    {
      title: 'Modern',
      description: `Smart health enables patients to access their own health information and communicate with their providers anytime and anywhere, which can improve their engagement and empowerment. Moreover, smart health can enhance the coordination and collaboration among different disciplines and sectors, as well as the quality and cost-effectiveness of health care delivery¹. However, smart health also faces some challenges such as privacy and security issues, ethical and legal dilemmas, technical difficulties, and digital divide`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'How we do your data?',
    highlight:
      'Personal Health Data->Personal Health Information->History Health Knowledge->Realtime Health Intelligence',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Data, information, knowledge, and intelligence are related concepts that describe different levels of understanding and processing of raw facts. Some definitions of these concepts are:',
        href: '/tab1',
      },
      items: [
        {
          title: 'Data',
          description: `Data are the raw facts that are collected or generated from various sources, such as sensors, databases, files, or web pages. Data have no meaning or context by themselves and need to be processed to become useful.`,
        },
        {
          title: 'Information',
          description: `Information is data that have been processed, organized, or structured in a meaningful way. Information can answer questions such as who, what, when, where, or how many. Information can be used to describe or explain a situation or phenomenon.`,
        },
        {
          title: "Knowledge",
          description: `Knowledge is information that have been analyzed, interpreted, or evaluated to produce insights or understanding. Knowledge can answer questions such as why, how, or what if. Knowledge can be used to predict or prescribe a course of action or outcome.`,
        },
        {
          title: "Intelligence",
          description: `Intelligence is knowledge that have been applied to a specific goal or purpose. Intelligence can solve problems, make decisions, or create value. Intelligence can be used to achieve a competitive advantage or strategic objective. These concepts form a hierarchy or pyramid, where each level builds on the previous one and adds more value and complexity. Data are the foundation of the pyramid, while intelligence is the apex. The process of moving from data to intelligence involves various methods and tools, such as data transformation, data analysis, data visualization, artificial intelligence, machine learning, and business intelligence.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What are the smart <span className="whitespace-nowrap">e-Health tasks to do?</span>
      </>
    ),
    // subtitle:
    //   'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',
    highlight: 'Smart e-Health',
  },
  items: [
    {
      title: 'Automating The Task Of Collecting',
      description:
        'The sensors collect patients clinical data and the state of their surroundings.',
      icon: IconHeartPlus,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Sharing',
      description:
        'Transmitted to teh appropriate health care centre and providers.',
      icon: IconShare,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Analysing Patient Information',
      description:
        'Real-time analysis automated decision support, prognosis action.',
      icon: IconAnalyze,
      link: {
        label: 'Discover now',
        href: '/',
      },
    }
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Traditional vs Smart Health for Individual Care',
    subtitle: 'See the difference of two term for increasing the effectiveness and efficient the individual health.',
    highlight: 'Differences',
  },
  content:
    'Traditional health model is a term that refers to the conventional way of providing health care services based on the biomedical paradigm. It is characterized by the following features:',
  items: [
    {
      title: 'Focus',
      description:
        'The focus is on curing diseases rather than promoting health and preventing illness.',
    },
    {
      title: 'Health Care',
      description:
        'The health care providers are mainly physicians and nurses who work in hospitals or clinics.',
    },
    {
      title: 'Patients',
      description:
        'The patients are passive recipients of care who follow the prescriptions and instructions of the providers.',
    },
    {
      title: 'System',
      description:
        'The health care system is fragmented and hierarchical, with little coordination and collaboration among different disciplines and sectors.',
    },
    {
      title: 'Delivery',
      description:
        'The health care delivery is based on standardized protocols and guidelines, with little attention to the individual needs and preferences of the patients.',
    },
    {
      title: 'Financing',
      description:
        'The health care financing is mainly based on fee-for-service or insurance schemes, with little incentive for quality improvement and cost containment.',
    },
  ],
  image: {
    src: traditional,
    alt: 'Traditional',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'Smart health model is a term that refers to the innovative way of providing health care services based on the integration of information and communication technologies (ICT) and medical devices. It is characterized by the following features:',
    items: [
      {
        title: 'Focus',
        description:
          'The focus is on promoting health and preventing illness rather than curing diseases.',
      },
      {
        title: 'Health Care',
        description:
          'The health care providers are not only physicians and nurses but also other professionals and stakeholders who work in different settings and platforms.',
      },
      {
        title: 'Patients',
        description:
          'The patients are active participants of care who have access to their own health information and can communicate with the providers anytime and anywhere.',
      },
      {
        title: 'System',
        description:
          'The health care system is interconnected and collaborative, with high coordination and cooperation among different disciplines and sectors.',
      },
      {
        title: 'Delivery',
        description:
          'The health care delivery is based on personalized and evidence-based protocols and guidelines, with high attention to the individual needs and preferences of the patients.',
      },
      {
        title: 'Financing',
        description:
          'The health care financing is mainly based on value-based or outcome-based schemes, with high incentive for quality improvement and cost containment.',
      },
    ],
  image: {
    src: modern,
    alt: 'Modern Health Care',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'What VidyaMedic do?',
  items: [
    {
      title: 'Vidyamedic is a term that refers to the use smart health of information and communication technologies (ICT) to improve health and health-related fields. Smart eHealth tasks are the activities that can be performed by using Vidyamedic applications or devices. Some examples of smart eHealth tasks are:',
      icon: IconBulb,
    },
    {
      title: 'Questioning',
      description:
        'Asking questions, informing, and monitoring patients through mobile apps or web applications.',
      icon: IconQuestionMark,
    },
    {
      title: 'Providing Online Consultations',
      description:
        'Providing online consultations or telemedicine services through video calls or chatbots.',
      icon: IconPackage,
    },
    {
      title: 'Supporting Diagnosis or Treatment Decisions',
      description:
        'Supporting diagnosis or treatment decisions through artificial intelligence or big data analysis.',
      icon: IconHelp,
    },
    {
      title: 'Managing Hospital Operations',
      description:
        'Managing hospital operations or resources through electronic medical records or cloud computing.',
      icon: IconBuildingHospital,
    },
    {
      title: 'Conducting Medical Research',
      description:
        'Conducting medical research or education through wearable devices or virtual reality.',
      icon: IconReportSearch,
    },
  ],
  image: {
    src: hero3Img,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
        'Etiam in libero',
        'Aenean ac nunc',
        'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
        'In hac habitasse',
      ],
      callToAction: {
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
      callToAction: {
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',
      texts: [
        'Curabitur suscipit risus',
        'Aliquam blandit malesuada',
        'Suspendisse sit amet',
        'Suspendisse auctor dui',
      ],
      callToAction: {
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Benefit Join With Us!',
    highlight: 'Join with Us',
  },

  items: [
    {
      title: '',
      description: ['Define a clear purpose and scope for your data project. What are the questions you want to answer, the problems you want to solve, or the opportunities you want to explore with your data? What are the expected outcomes and benefits of your data project?'],
      icon: IconNumber1,
    },
    {
      title: '',
      description: ['Assess the quality and availability of your data sources. Do you have enough data to support your analysis? Is your data accurate, complete, consistent, and relevant? Do you need to collect more data or enrich your existing data?'],
      icon: IconNumber2,
    },
    {
      title: '',
      description: ['Evaluate and communicate your data results and insights. How do you measure the success and impact of your data project? How do you present your data findings in a clear and compelling way? How do you share your data insights with your stakeholders and collaborators?'],
      icon: IconNumber3,
    },
  ],
  form: {
    title: 'Ready to join with us?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Jl. Tamansari No. 126, Bandung 40132, Indonesia'],
    },
    {
      title: 'Phone',
      texts: ['+62-22-4254034', '0811 2298 086', 'Fax : +62-22-2508763'],
    },
    {
      title: 'Email',
      texts: ['Office: yuliawati.pptik@gmail.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },

  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      Made by{' '} 
      VidyaMedic {' '}
      · All rights reserved.
    </div>
  ),
};

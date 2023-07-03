import Image from 'next/image';
import { HeroProps } from '~/shared/types';


const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image } = props.data;

  return (
    <section id="heroOne">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                Smart Future e-Health, for who?
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400 text-justify">{subtitle}</p>}
            </div>
          </div>

         <div className="flex-flow flex">

          <div className="flex mx-auto max-w-2xl pb-10 text-center md:pb-16">
          {image && (
            <div className="relative m-auto max-w-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                placeholder="blur"
                loading="eager"
                priority
                sizes="(max-width: 32rem) 50vw, 512px"
              />
            </div>
            )}
          </div> 
        <div className="flex mx-auto max-w-2xl pb-10 text-center md:pb-16">
            <div className="mx-auto max-w-3xl">
                <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400 text-justify">Age     : 50</p>
                <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400 text-justify">Gender  : Female</p>
                <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400 text-justify">Illness : Cancer</p>
                <p className="mb-6 text-xl font-bold text-gray-600 dark:text-slate-400 text-justify">Can Be Cured?</p>
            </div>
          </div>

        </div>
        <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
    
              <h5 className="leading-tighter font-heading mb-1 text-1xl font-bold tracking-tighter md:text-2xl">
                Only 3 probability classification for this women:
              </h5>
          </div>
            <div className="flex-flow flex pb-10 md:pb-16">

                <div className="flex mr-2 flex-col justify-between">
                    <h6 className="text-xl font-bold">Terminally ill </h6>
                    <p className="text-gray-600 dark:text-slate-400">Chance to spend the last days of their life in the comgoty of their home with familiar surroundings instead of at a hospital</p>
                </div>
                <div className="flex mr-2 flex-col justify-between">
                    <h6 className="text-xl font-bold">Chronically ill</h6>
                    <p className="text-gray-600 dark:text-slate-400">those with chronic conditions such as diabetes mellitus, cancer, hypertension, chronic obstructive pulmonary disease, and others require long-term care and regular monitoring of their vital parameters</p>
                </div>
                <div className="flex mr-2 flex-col justify-between">
                    <h6 className="text-xl font-bold">Memory impaired</h6>
                    <p className="text-gray-600 dark:text-slate-400">Patients with memory loss may otherwise be healthy enough to continue living independently</p>
                </div>
            </div>
            
            <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
              <h5 className="leading-tighter font-heading mb-1 mt-2 text-1xl font-bold tracking-tighter md:text-2xl">
                What should the woman do to face her health for the rest of her life?
              </h5>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

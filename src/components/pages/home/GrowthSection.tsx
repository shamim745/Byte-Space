import GlowLayer from "@/components/ui/GlowLayer";
import { growthFeatures, growthGlows, growthStats } from "@/db/growth";
import Image from "next/image";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);


const GrowthSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAFAFA] px-4 pt-8 sm:px-6 
    sm:pt-12 md:pt-[80px] 
    lg:pl-[8.4vw] lg:pr-[4.2vw] lg:pt-[120px] sm:pb-0">
      <GlowLayer glows={growthGlows} />

      <div className="relative mx-auto flex w-full max-w-[1258px] flex-col gap-[20px] sm:gap-10 lg:gap-[72px]">
        <div
          data-reveal
          className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[63px]"
        >
          <div className="flex w-full min-w-0 flex-col gap-6 sm:gap-10 lg:flex-1 lg:max-w-[574px]">
            <h2 className="max-w-[577px] text-[26px] font-semibold leading-[32px]
             tracking-[-0.44px] text-[#242528] sm:text-[36px] sm:leading-[44px] 
             lg:text-[44px] lg:leading-[53px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="max-w-[477px] text-[16px] leading-[26px] text-[#4B4C53]
             sm:text-[18px] sm:leading-[29px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are looking
              to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>

            <div className="flex flex-wrap items-end gap-x-8 gap-y-6 sm:gap-x-14">
              {growthStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[30px] font-medium leading-[38px] tracking-[-0.36px] text-[#003BE2] sm:text-[36px] sm:leading-[44px]">
                    {stat.value}
                  </p>
                  <p className="text-[16px] leading-[26px] text-[#4B4C53] sm:text-[18px] sm:leading-[29px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex w-full min-w-0 max-w-[621px] items-center lg:mx-0 lg:flex-1">
            <Image
              src="/assets/images/brand/advertisment-1.png"
              alt="Student learning online"
              width={703}
              height={697}
              className="h-auto w-full max-h-[552px] object-contain "
            />
          </div>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
          className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[79px]"
        >
          <div className="mx-auto lg:order-0 order-1 flex w-full min-w-0 max-w-[541px] items-center lg:mx-0 lg:flex-1">
            <Image
              src="/assets/images/brand/advertisment.png"
              alt="Creator managing courses"
              width={587}
              height={719}
              className="h-auto w-full max-h-[596px] object-contain"
            />
          </div>

          <div className="flex w-full lg:order-1 order-0 min-w-0 flex-col gap-6 sm:gap-10 lg:flex-1 lg:max-w-[580px]">
            <h2 className="max-w-[391px] text-[26px] font-semibold leading-[32px] tracking-[-0.44px] text-[#242528] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[53px]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="max-w-[574px] text-[16px] leading-[25px] text-[#4B4C53] sm:text-[18px] sm:leading-7">
              <span className="font-bold text-[#242528]">ByteSpace</span> supports
              individuals or entities in the creation, publication, and administration
              of educational courses.
            </p>

            <ul className="flex flex-col gap-4">
              {growthFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-[16px] font-medium leading-[22px] text-[#242528] sm:text-[18px]"
                >
                  <span className="text-[#003BE2]">
                    <CheckIcon />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;

import CategoryCard from "@/components/common/CategoryCard";
import { learningPaths } from "@/db/learning-paths";

const LearningPaths = () => {
  return (
    <section className=" md:pt-[72px] md:pb-[120px]  sm:pt-[45px] sm:pb-[60px] 
    py-[30px] px-4 lg:px-6">
      <div className="container">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/60 sm:text-base">
            At Bytespace, we believe learning should open doors to endless possibilities. Our
            learning paths are carefully crafted to help you achieve mastery in various fields,
            ensuring there&apos;s something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
          className="md:mt-[68px] sm:mt-[40px] mt-[25px] grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6"
        >
          {learningPaths.map((path) => (
            <CategoryCard key={path.label} label={path.label} icon={path.icon} href={path.href} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;

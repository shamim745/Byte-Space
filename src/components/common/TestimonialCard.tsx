import Image from "next/image";
import type { TestimonialCardProps } from "@/types/home";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />

      <figcaption className="flex flex-col">
        <span className="font-display text-xl font-semibold leading-6 tracking-[-0.2px] text-black">
          {testimonial.name}
        </span>
        <span className="text-lg leading-[29px] text-[#003BE2]">{testimonial.role}</span>
      </figcaption>

      <blockquote className="text-lg leading-[29px] text-[#4F4F4F]">
        {testimonial.quote}
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
